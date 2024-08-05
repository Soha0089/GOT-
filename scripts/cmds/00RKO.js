const fs = require("fs");
module.exports = {
config:{
name: "owner",
version: "1.0.1",
role: 0,
author: "RKO BRO", 
shortDescription: "noprefx",
longdescription: "noprefix",
category: "admin",
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
'https://i.imgur.com/asCXA2D.jpeg',
{ responseType: 'stream' }
)
).data;

if (body.indexOf("owner")==0 || body.indexOf("Owner")==0) {
var msg = {
body: "★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★\n\n✦❏𝗡𝗔𝗠𝗘:- HIMAL PAUDEL\n\n ❏𝗔𝗚𝗘:-AGE DOENS'T MATTTER IN LOVE 💋\n\n❏𝗤𝗨𝗔𝗟𝗜𝗙𝗜𝗖𝗔𝗧𝗜𝗢𝗡:- 𝗘𝗡𝗚𝗜𝗡𝗘𝗘𝗥\n\n❏𝗛𝗢𝗕𝗕𝗬:- 𝐁𝐞𝐜𝐨𝐦𝐞 𝐚 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫🎓, 𝑲𝒕𝒆 𝒑𝒂𝒕𝒂𝒚𝒖𝒏𝒆🥱, 𝑬𝒕𝑐\n\n ❏𝗪𝗛𝗔𝗧𝗦 𝗔𝗣𝗣 𝗡𝗢:-Ooops! Forgot😵 \n\n❏𝗜𝗡 𝗔 𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡𝗦𝗛𝗜𝗣 𝗪𝗜𝗧𝗛 :-Ye bat baatayi nahi jaati😒najar lag jati hai \n\n❏𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗡𝗔𝗠𝗘/𝗜𝗗 𝗟𝗜𝗡𝗞 :(RKO BRO)https://www.facebook.com/profile.php?id=100084573213860 \n\n❏𝗕𝗢𝗧 𝗡𝗔𝗠𝗘:- CHENGARI💝♻️😘 \n\n 🆆︎🆆︎🅴︎\n\n𝔽𝔽❣️\n\n 🅁🄾🄼🄰🄽 \n\nHPD=2080-04-21💗\n\n❏𝗢𝗞𝗘𝗬 𝗕𝗬𝗘😹✦\n\n☞\n\n★★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 : ✦𝗥𝗞𝗢 𝗕𝗥𝗢👑`",
attachment: media
}
api.sendMessage( msg, threadID, messageID);
api.setMessageReaction("👑", event.messageID, (err) => {}, true)
}
},
onStart: function({}) {
}
}