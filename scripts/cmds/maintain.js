const fs = require("fs-extra");
const { config } = global.GoatBot;
const { client } = global;

module.exports = {
	config: {
		name: "maintain",
		aliases: ["maintainmode", "superadminonly", "superadmin"],
		version: "1.2",
		author: "𝗥𝗞𝗢 𝗕𝗥𝗢",
		countDown: 5,
		role: 2,
		shortDescription: {
			vi: "bật/tắt chỉ admin sử dụng bot",
			en: "turn on/off "
		},
		longDescription: {
			vi: "bật/tắt chế độ chỉ admin mới có thể sử dụng bot",
			en: "turn on/off only owner can use bot"
		},
		category: "owner",
		guide: {
			en: "{pn} [on | off]"
		}
	},

	langs: {
		vi: {
			turnedOn: "Đã bật chế độ chỉ admin mới có thể sử dụng bot",
			turnedOff: "Đã tắt chế độ chỉ admin mới có thể sử dụng bot",
			syntaxError: "Sai cú pháp, chỉ có thể dùng {pn} on hoặc {pn} off"
		},
		en: {
			turnedOn: "Turned on the mode only owner can use bot",
			turnedOff: "Turned off the mode only owner can use bot",
			syntaxError: "Syntax error, only use {pn} on or {pn} off"
		}
	},

	onStart: function ({ args, message, getLang  }) {
    const permission = global.GoatBot.config.GOD;
  if (!permission.includes(event.senderID)) {
    api.sendMessage("You don't have enough permission to use this command. Only My Authors Have Access.", event.threadID, event.messageID);
    return;
  }
		if (args[0] == "on") {
			config.adminOnly.enable = true;
			message.reply(getLang("turnedOn"));
			fs.writeFileSync(client.dirConfig, JSON.stringify(config, null, 2));
		}
		else if (args[0] == "off") {
			config.adminOnly.enable = false;
			message.reply(getLang("turnedOff"));
			fs.writeFileSync(client.dirConfig, JSON.stringify(config, null, 2));
		}
		else
			return message.reply(getLang("syntaxError"));
	}
};