const fs = require("fs");
module.exports = {
config:{
name: "gf chaiyo",
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
'https://i.imgur.com/SSmmV4T.mp4',
{ responseType: 'stream' }
)
).data;

if (body.indexOf("gf chaiyo")==0 || body.indexOf("girlfriend chaiyo")==0 || body.indexOf("gf khojdeu")==0 || body.indexOf("gf khojdeuna")==0) {
var msg = {
body: "𝘆𝗲𝘀𝘁𝗼 𝗴𝗳 𝘃𝗮𝘆𝗮 𝗵𝘂𝗻𝘅𝗮 𝗻𝗶🥵🥵🔥",
attachment: media
}
api.sendMessage( msg, threadID, messageID);
api.setMessageReaction("🥵", event.messageID, (err) => {}, true)
}
},
onStart: function({}) {
}
  }
