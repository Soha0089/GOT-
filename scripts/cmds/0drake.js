const axios = require("axios");
const fs = require("fs-extra");
const { loadImage, createCanvas, registerFont } = require("canvas");

module.exports = {
  config: {
    name: "drake",
    author: "RKO BRO",
    countDown: 5,
    role: 0,
    category: "write",
    guide: "drake dhoni |Virat ",
    shortDescription: {
      en: "make meme of which better ",
    },
  },

  wrapText: async (ctx, text, maxWidth) => {
    return new Promise((resolve) => {
      if (ctx.measureText(text).width < maxWidth) return resolve([text]);
      if (ctx.measureText("W").width > maxWidth) return resolve(null);
      const words = text.split(" ");
      const lines = [];
      let line = "";
      while (words.length > 0) {
        let split = false;
        while (ctx.measureText(words[0]).width >= maxWidth) {
          const temp = words[0];
          words[0] = temp.slice(0, -1);
          if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
          else {
            split = true;
            words.splice(1, 0, temp.slice(-1));
          }
        }
        if (ctx.measureText(`${line}${words[0]}`).width < maxWidth)
          line += `${words.shift()} `;
        else {
          lines.push(line.trim());
          line = "";
        }
        if (words.length === 0) lines.push(line.trim());
      }
      resolve(lines);
    });
  },

  onStart: async function ({ api, event, args }) {
    let { senderID, threadID, messageID } = event;
    const pathImg = __dirname + `/cache/drake.png`;
    const text = args.join(" ")
      .trim()
      .replace(/\s+/g, " ")
      .replace(/(\s+\|)/g, "|")
      .replace(/\|\s+/g, "|")
      .split("|");

    // Get image from URL and save
    const getImage = (
      await axios.get("https://i.imgur.com/qmkwLUx.png", {
        responseType: "arraybuffer",
      })
    ).data;
    fs.writeFileSync(pathImg, Buffer.from(getImage));

    // Check and get font if not exists
    const fontPath = __dirname + "/cache/SVN-Arial 2.ttf";
    if (!fs.existsSync(fontPath)) {
      const getFont = (
        await axios.get("https://drive.google.com/u/0/uc?id=11YxymRp0y3Jle5cFBmLzwU89XNqHIZux&export=download", {
          responseType: "arraybuffer",
        })
      ).data;
      fs.writeFileSync(fontPath, Buffer.from(getFont));
    }

    // Load the base image and setup canvas
    const baseImage = await loadImage(pathImg);
    const canvas = createCanvas(baseImage.width, baseImage.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);

    // Register and use the custom font
    registerFont(fontPath, { family: "SVN-Arial 2" });
    ctx.font = "30px SVN-Arial 2";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";

    // Wrap and draw text
    const [line1, line2] = await Promise.all([
      this.wrapText(ctx, text[0], 464),
      this.wrapText(ctx, text[1], 464),
    ]);
    ctx.fillText(line1.join("\n"), 464, 129);
    ctx.fillText(line2.join("\n"), 464, 339);

    // Save the canvas to a file and send it
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);
    return api.sendMessage(
      { attachment: fs.createReadStream(pathImg) },
      threadID,
      () => fs.unlinkSync(pathImg),
      messageID
    );
  },
};
