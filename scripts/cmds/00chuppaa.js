const fs = require("fs");
module.exports = {
config:{
name: "chuppaaa",
version: "1.0.1",
role: 0,
author: "rko", 
shortDescription: "Fun",
longdescription: "noprefix",
category: "media",
guide: "🥰",
countDown: 5, 
},

onChat: async function({ api, event, client, __GLOBAL }) {
var { threadID, messageID } = event;
const content = event.body ? event.body : '';
const body = content.toLowerCase();
const axios = require('axios')
const media = (
await axios.get(
'https://i.imgur.com/OnykuQf.mp4',
{ responseType: 'stream' }
)
).data;

if (body.indexOf("chuppa")==0 || body.indexOf("chuppa deu na")==0 || body.indexOf("chuppa deu")==0 || body.indexOf("chuppa need")==0 || body.indexOf("chuppa chaiyo")==0) {
var msg = {
body: "𝗟𝗮𝘂 𝗯𝗮𝗯𝗲 𝗰𝗵𝘂𝗽𝗽𝗮🥵🔥💋💋",
attachment: media
}
api.sendMessage( msg, threadID, messageID);
api.setMessageReaction("💋", event.messageID, (err) => {}, true)
}
},
onStart: function({}) {
}
  }
