const fs = require('fs');

module.exports = {
 config: {
 name: "approve",
 version: "1.0",
 author: "RKO BRO",
 countDown: 5,
 role: 2,
 shortDescription: "",
		longDescription: "",
 category: "admin",
 guide: {
 en: "{pn} [add|del|list]",
 vi: "Để sử dụng lệnh này, hãy gõ /approve [add/delete] [thread ID]"
 }
 },
 onStart: async function ({ message,api, args, threadsData }) {
 
 const threadsFile = 'threads.json';

 if (args.length < 1) {
 message.reply("Syntax error: Type approve del (tid)| add (tid) | list");
 return;
 }

 const action = args[0];
 const threadId = args[1];
 const threadData = await threadsData.get(threadId);
const threadName = threadData.threadName;


 let threads = [];
 try {
 threads = JSON.parse(fs.readFileSync(threadsFile));
 } catch (err) {
 console.error('', err);
 }

 if (action === "add") {
 if (!threads.includes(threadId)) {
 threads.push(threadId);
 fs.writeFileSync(threadsFile, JSON.stringify(threads));
 message.reply(`Thread ${threadName} [ OK ] ✨Your Group has been Approved by admin 🙌.\n\n 🖤So Enjoy\n\n 💝🥀𝐎𝐖𝐍𝐄𝐑:- ☞RKO BRO☜ 💫\n\n 🖤 〠🖤\n\n😳𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝🤓:- ☞ https://www.facebook.com/profile.php?id=100084573213860\n\n👋For Any Kind Of Help Contact On insta  Username 👉 @himalpaudel112 and enjoy 😍`);
 } else {
 message.reply(`Thread ${threadName} is already approved ✅`);
 }
 } else if (action === "del") {
 const index = threads.indexOf(threadId);
 if (index >= 0) {
 threads.splice(index, 1);
 fs.writeFileSync(threadsFile, JSON.stringify(threads));
 message.reply(`Thread ${threadName} has been disapproved ✅`); api.removeUserFromGroup(api.getCurrentUserID(), threadId);
 } else {
 message.reply(`Thread ${threadName} is not approved yet ❌`, uid);
 }
 } else if (action === "list") {
 let threadList = "";
 for (let i = 0; i < threads.length; i++) {
 const threadData = await threadsData.get(threads[i]);
 const name = threadData.threadName;
 threadList += `${i + 1}. ${name} (${threads[i]})\n`;
 }
 if (threadList === "") {
 message.reply("No threads approved ❌");
 } else {
 message.reply(`Approved threads:\n${threadList}`);
 }
 }
 }
};
