const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs")

module.exports = {
    config: {
            name: "slap2",
                    aliases: ["1day"],
                            version: "1.0",
                                    author: "RKO BRO",
                                            countDown: 5,
                                                    role: 0,
                                                            shortDescription: "slap in funny style",
                                                                    longDescription: "",
                                                                            category: "img",
                                                                                    guide: "{pn}"
                                                                                        },
    onStart: async function ({ message, event, args }) {
            const mention = Object.keys(event.mentions);
                    if (mention.length == 0) return message.reply("Please mention someone");
                            else if (mention.length == 1) {
                                        const one = event.senderID, two = mention[0];
                                                    bal(one, two).then(ptth => { message.reply({ body: "「 maja aya?😝 」", attachment: fs.createReadStream(ptth) }) })
                                                            } else {
                                                                        const one = mention[1], two = mention[0];
                                                                                    bal(one, two).then(ptth => { message.reply({ body: "「 maja aaya😝 」", attachment: fs.createReadStream(ptth) }) })
                                                                                            }
                                                                                                }
                                                                                                };
async function bal(one, two) {
    let avone = await jimp.read(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);
        avone.circle();
            let avtwo = await jimp.read(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);
                avtwo.circle();
                    let pth = "image.jpg";
                        let img = await jimp.read("https://i.ibb.co/dDSVgXk/image.jpg");
//IMG Resizing 
    const resizeWidth = 600;
        const resizeHeight = 597;
//Avatar2 resizing 
    const avoneWidth = 80;
        const avoneHeight = 80;
//Avatar2 x and y axis measure
    const x2 = 400;
        const y2 = 100;
//Avatar1 resizing 
    const avtwoWidth = 80;
        const avtwoHeight = 80;
//Avatar1 x and y axis measure
    const x1 = 135;
        const y1 = 170;
    img.resize(resizeWidth, resizeHeight).composite(avone.resize(avoneWidth, avoneHeight), x1, y1).composite(avtwo.resize(avtwoWidth, avtwoHeight), x2, y2);
    await img.writeAsync(pth);
        return pth;
        }