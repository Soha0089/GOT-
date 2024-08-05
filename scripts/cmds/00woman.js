const fs = require("fs");
module.exports = {
config:{
name: "women",
version: "1.0.1",
role: 0,
author: "RKO BRO", 
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
'https://i.imgur.com/somj4nc.mp4',
{ responseType: 'stream' }
)
).data;

if (body.indexOf("aaimai")==0 || body.indexOf("Women")==0 || body.indexOf("women")==0) {
var msg = {
body: "𝘄𝗼𝗺𝗲𝗻 𝗵𝗮𝗵𝗮 1 𝗰𝘂𝗽 𝗰𝗵𝗲𝘆𝗮 𝗸𝗵𝗮𝘂🍻",
attachment: media
}
api.sendMessage( msg, threadID, messageID);
api.setMessageReaction("☕", event.messageID, (err) => {}, true)
}
},
onStart: function({}) {
}
  }
