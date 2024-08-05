const axios = require("axios");
const fs = require("fs-extra");
const { createCanvas, loadImage } = require("canvas");

module.exports = {
  config: {
    name: "xavier",
    author: "RKO BRO",
    countDown: 5,
    role: 0,
    category: "write",
    shortDescription: {
      en: "sends you a meme of xavier",
    },
  },

  wrapText: async (ctx, text, maxWidth) => {
    return new Promise((resolve) => {
      const words = text.split(" ");
      const lines = [];
      let line = "";

      while (words.length > 0) {
        let testLine = line + words[0] + " ";
        if (ctx.measureText(testLine).width > maxWidth) {
          lines.push(line.trim());
          line = "";
        } else {
          line = testLine;
          words.shift();
        }
      }
      if (line) lines.push(line.trim());
      resolve(lines);
    });
  },

  onStart: async function ({ api, event, args }) {
    const { senderID, threadID, messageID } = event;
    let pathImg = __dirname + "/cache/mia.png";
    const text = args.join(" ");

    if (!text) {
      return api.sendMessage(
        "Enter the content of the comment on the board",
        threadID,
        messageID
      );
    }

    try {
      const { data: imageBuffer } = await axios.get(`https://i.imgur.com/21xuPR1.jpg`, {
        responseType: "arraybuffer",
      });
      fs.writeFileSync(pathImg, Buffer.from(imageBuffer, "binary"));

      const baseImage = await loadImage(pathImg);
      const canvas = createCanvas(baseImage.width, baseImage.height);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);

      let fontSize = 30;
      ctx.font = `${fontSize}px Arial`;
      ctx.fillStyle = "#000000";
      ctx.textAlign = "start";

      while (ctx.measureText(text).width > 1160) {
        fontSize--;
        ctx.font = `${fontSize}px Arial`;
      }

      const lines = await this.wrapText(ctx, text, 1160);
      ctx.fillText(lines.join("\n"), 30, 270); // Adjust x and y coordinates as needed

      const updatedImageBuffer = canvas.toBuffer();
      fs.writeFileSync(pathImg, updatedImageBuffer);

      return api.sendMessage(
        { attachment: fs.createReadStream(pathImg) },
        threadID,
        () => fs.unlinkSync(pathImg),
        messageID
      );
    } catch (error) {
      console.error("Error processing image:", error);
      return api.sendMessage(
        "There was an error processing the image.",
        threadID,
        messageID
      );
    }
  },
};
