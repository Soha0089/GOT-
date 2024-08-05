const fs = require("fs");
module.exports = {
config:{
name: "fuck you",
version: "1.0.1",
role: 0,
author: "rko", 
shortDescription: "Fun",
longdescription: "noprefix",
category: "no prefix",
guide: "fuck",
countDown: 5, 
},

onChat: async function({ api, event, client, __GLOBAL }) {
var { threadID, messageID } = event;
const content = event.body ? event.body : '';
const body = content.toLowerCase();
const axios = require('axios')
const media = (
await axios.get(
'https://i.imgur.com/jYfBoHp.jpeg',
{ responseType: 'stream' }
)
).data;

if (body.indexOf("fuck you")==0 || body.indexOf("fuck u bot")==0 || body.indexOf("fuck you bot")==0 || body.indexOf("bot fuck you")==0 || body.indexOf("fuck bot")==0 || body.indexOf("fuck ")==0) {
var msg = {
body: "𝗙𝘂𝗰𝗸 𝘂 𝘁𝗼𝗼☠️🖕",
attachment: media
}
api.sendMessage( msg, threadID, messageID);
api.setMessageReaction("🖕", event.messageID, (err) => {}, true)
}
},
onStart: function({}) {
}
                        }
