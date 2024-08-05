const axios = require("axios");
const fs = require("fs-extra");
const { loadImage, createCanvas } = require("canvas");

module.exports = {
  config: {
    name: "yes",
    author: "RKO BRO",
    countDown: 5,
    role: 0,
    category: "meme",
    guide: "text",
    shortDescription: {
      en: "sends a meme of yes or no",
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
    let pathImg = __dirname + '/cache/yes.png';
    let text = args.join(" ");
    if (!text) return api.sendMessage("Enter the content of the comment on the board", threadID, messageID);

    let response = await axios.get('https://i.ibb.co/GQbRhkY/Picsart-22-08-14-17-32-11-488.jpg', { responseType: 'arraybuffer' });
    fs.writeFileSync(pathImg, Buffer.from(response.data));

    let baseImage = await loadImage(pathImg);
    let canvas = createCanvas(baseImage.width, baseImage.height);
    let ctx = canvas.getContext("2d");
    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);

    let fontSize = 45;
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.fillStyle = "black";
    ctx.textAlign = "start";
    while (ctx.measureText(text).width > 2250) {
      fontSize--;
      ctx.font = `bold ${fontSize}px Arial`;
    }

    const lines = await this.wrapText(ctx, text, 350);
    ctx.fillText(lines.join('\n'), 280, 50); // Adjust as needed

    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);

    return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);
  }
};
