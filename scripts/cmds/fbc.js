const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");

module.exports = {
  config: {
    name: "fbcover",
    version: "1.0",
    author: "𝗥𝗞𝗢 𝗕𝗥𝗢 ", //updated
    countDown: 5,
    role: 0,
    shortDescription: "Create fb Cover photo",
    longDescription: "Create fb Cover photo",
    category: "Cover",
    guide: {
      en: "{pn} name | subname | address | phone | email | color",
    }
  },

  onStart: async function ({ message, args, event, api }) {
    const info = args.join(" ");
    if (!info) {
      return message.reply(`Please enter in the format:\n\n.fbcover name | subname | address | phone | email | color`);
    } else {
      const msg = info.split("|");
      if (msg.length < 6) {
        return message.reply(`Invalid number of parameters\n\nPlease provide all required information\n\nExample ➠ .fbcover Rubish | anonymous | bangladesh | 01818181810 | rubish@gmail.com | green`);
      }
      
      const name = msg[0].trim();
      const subname = msg[1].trim();
      const address = msg[2].trim();
      const phone = msg[3].trim();
      const email = msg[4].trim();
      const color = msg[5].trim();
      
      const completionMessage = await message.reply(`
▹ 𝗦𝗶𝗿 𝗽𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁 𝗮 𝗺𝗼𝗺𝗲𝗻𝘁 ◃
                         ♛         
〨 𝗜'𝗺 𝗰𝗿𝗲𝗮𝘁𝗶𝗻𝗴 𝘆𝗼𝘂𝗿 𝗰𝗼𝘃𝗲𝗿 〨`);
   
      const img = `https://www.nguyenmanh.name.vn/api/fbcover1?name=${name}&uid=${event.senderID}&address=${address}&email=${email}&subname=${subname}&sdt=${phone}&color=${color}&apikey=sr7dxQss`;
      
      const form = {
        body: `
   ​​​​​ ≛⋯𝗵𝗲𝘆 𝘀𝗶𝗿⋯≛ 
    
⍣⊷ 𝘁𝗮𝗸𝗲 𝘆𝗼𝘂𝗿 𝗰𝗼𝘃𝗲𝗿 ⊶⍣`
      };
      
      try {
        form.attachment = [];
        form.attachment[0] = await global.utils.getStreamFromURL(img);
        await api.sendMessage(form, event.threadID);
        await api.unsendMessage(completionMessage.messageID);
      } catch (error) {
        await message.reply(`An error occurred while fetching the image. Please try again later.`);
      }
    }
  }
};