const fs = require("fs");
module.exports = {
config:{
name: "aama",
version: "1.0.1",
role: 0,
author: "rko", 
shortDescription: "Fun",
longdescription: "noprefix",
category: "no prefix",
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
'https://i.imgur.com/KoG8pwB.mp4',
{ responseType: 'stream' }
)
).data;

if (body.indexOf("Aama KO yaad")==0 || body.indexOf("aama ko maya")==0 || body.indexOf("Mummy ko yaad aayo")==0 || body.indexOf("mom ")==0 || body.indexOf("aama ")==0 || body.indexOf("mom love")==0) {
var msg = {
body: "𝗮𝗮𝗺𝗮 𝗸𝗼 𝘆𝗮𝗮𝗱 𝗮𝗮𝘆𝗼💝😌",
attachment: media
}
api.sendMessage( msg, threadID, messageID);
api.setMessageReaction("👨‍👩‍👧‍👧", event.messageID, (err) => {}, true)
}
},
onStart: function({}) {
}
    }
