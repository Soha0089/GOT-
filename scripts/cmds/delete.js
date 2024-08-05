const DIG = require("discord-image-generation");
const fs = require("fs-extra");

module.exports = {
  config: {
    name: "deleting",
    version: "1.0",
    author: "𝗥𝗞𝗢 𝗕𝗥𝗢",
    countDown: 1,
    role: 0,
    shortDescription: "Delete!",
    longDescription: "",
    category: "fun",
    guide: "{pn} [mention|leave_blank]",
    envConfig: {
      deltaNext: 5
    }
  },

  langs: {
    vi: {
      noTag: "Bạn phải tag người bạn muốn tát"
    },
    en: {
      noTag: "You must tag the person you want to "
    }
  },

  onStart: async function ({ event, message, usersData, args, getLang }) {
    let mention = Object.keys(event.mentions)
    let uid;

    if (event.type == "message_reply") {
      uid = event.messageReply.senderID
    } else {
      if (mention[0]) {
        uid = mention[0]
      } else {
        console.log(" jsjsj")
        uid = event.senderID
      }
    }

    let url = await usersData.getAvatarUrl(uid)
    let avt = await new DIG.Delete().getImage(url)

    const pathSave = `${__dirname}/tmp/delete.png`;
    fs.writeFileSync(pathSave, Buffer.from(avt));
    // Send the image as a reply to the command message
    message.reply({
      attachment: fs.createReadStream(pathSave)
    }, () => fs.unlinkSync(pathSave));
  }
};