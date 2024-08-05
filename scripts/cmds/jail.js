const DIG = require("discord-image-generation");
const fs = require("fs-extra");

module.exports = {
  config: {
    name: "jail",
    version: "1.1",
    author: "𝗥𝗞𝗢 𝗕𝗥𝗢",
    countDown: 5,
    role: 0,
    shortDescription: "Jail image",
    longDescription: "Jail image",
    category: "image",
    guide: {
      en: "{pn} @tag"
    }
  },

  langs: {
    vi: {
      noTag: "Bạn phải tag người bạn muốn tù"
    },
    en: {
      noTag: "You must tag the person you want to jail"
    }
  },

  onStart: async function ({ event, message, usersData, args, getLang }) {
    const uid1 = event.senderID;
    const uid2 = Object.keys(event.mentions)[0];
    if (!uid2)
      return message.reply(getLang("noTag"));
    const avatarURL1 = await usersData.getAvatarUrl(uid1);
    const avatarURL2 = await usersData.getAvatarUrl(uid2);
    const img = await new DIG.Jail().getImage(avatarURL2);
    const pathSave = `${__dirname}/tmp/${uid2}_Jail.png`;
    fs.writeFileSync(pathSave, Buffer.from(img));
    const content = args.join(' ').replace(Object.keys(event.mentions)[0], "");
    message.reply({
      body: `${(content || "You're in jail!")} 🚔`,
      attachment: fs.createReadStream(pathSave)
    }, () => fs.unlinkSync(pathSave));
  }
};