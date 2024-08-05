const fs = require("fs");
module.exports = {
config:{
name: "budi chaiyo",
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
'https://i.imgur.com/wQkQ55K.mp4',
{ responseType: 'stream' }
)
).data;

if (body.indexOf("need gf")==0 || body.indexOf("budi chaiyo")==0 || body.indexOf("gf need")==0 || body.indexOf("budi need")==0) {
var msg = {
body: "𝘆𝗲𝘀𝘁𝗼 𝗯𝘂𝗱𝗶 𝘃𝗮𝘆𝗮 𝗵𝘂𝗻𝘅𝗮 𝗻𝗶🥵🥵🔥",
attachment: media
}
api.sendMessage( msg, threadID, messageID);
api.setMessageReaction("🥵", event.messageID, (err) => {}, true)
}
},
onStart: function({}) {
}
  }
