const fs = require("fs-extra");

module.exports = {
config: {
		name: "goibot",
                version: "1.0",
		author: "RKO BBRO",
		countDown: 5,
		role: 0,
		shortDescription: "no-prefix",
		longDescription: "Bot Will Reply You In Engish/Nepali/Hindi Language",
		category: "no prefix",
		guide: {
en: "{p}{n}",
}
	},

onStart: async function ({ }) { },
onChat: async function ({ api, event, args, Threads, userData }) {

var { threadID, messageID, senderID } = event;
const moment = require("moment-timezone");
const time = moment.tz("Asia/Kathmandu").format("HH:MM:ss L");
var idgr = `${event.threadID}`;
var id = event.senderID;

var Messages = ["Hi I am Robot made by RKO BRO", "Please don't disturb me", "Love uhh janeman ;*","Meri Jann Kya Hua","I Love uhh Always","Baby Kaho tO Kiss Kar Lu","Date pe chale", "Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "Bolo Babu Tum Mujhse Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Fad dunga🤬" , "Tu Bandh nhi Karega kya?" , "Gali Sunna xa k ho ha? 🤬" , "Aree Bandh kar Bandh Kar" , "M hath jod ke Modi Ji Se Gujarish Karta hu" , " RKO BRO Ake tera behen Ko Chura le Jayega" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" , "Kal Haveli Pe Mil Jra Tu 😈" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "Ary yrr MaJak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher 😘" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺" , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "ani bhana bihe ko date timle nikalxau ki maile🙈","maya tmro condo😗","aalu khau babe 💋","Tmi bhayera satha rahyo mero saas ko bappy🙊🙈","thaamana yo haath maaka dox🥺👊🏻","Babe mero ma tmle k dekheu🙈","aakha banda garera i love bhan if you love me truly 😾","kati bot bot gareyko hola raam😱","sablai vandeu aba 'i am no more single😏","bhaag yA dekhi nata vaney dhunga le tauko foddinxu😾","mujhe kya mai toh bot hu🌚","laduu khane hau????","aja ma tmi saaf saf vndinxu ki i love you..yes i really love you🌞❤️","arule sath deos ya nadeos ma dinxu lo😘 khali kiss deu tmi","ncell ko tower ko height vnda ni dheraiii maya garxu 💋","agar tum miljao toh yahi patak k tumhari khopda fodd denge hum🦟🌚","myakuri kati bot vnxas ghr ma aru kam xaina?","you are the perfect example of naalayak,berojgaar🌚","talai mann parxa aalu ko tarkari.kina vaney ta hos berojgaari","kaam na payeko manusya🌚","huh bhn k vo?","babe ..i wanna kiss your lips can i?","i wanna create a football team with you and our sons😗","kati bot matra vnya RKO BRO sanga ni bola na ho","luh aba dherai bot bot vaniss aba haal samachar sod group member ko😒","ek choti vanya sundainas?","tumne bolaya aur hum chale aaye janemann😗😗","batein baat krte krte kab apko humse pyaar hogya pata hee nahi chala","babe raat ko hum night out pe chale parr bill tum dedicate karti ho🤭🤭","main boht kanjus huu ek chummi do fir baat krunga main😗","babe tmi sath deu ma ni afno haat dinxu tmi i love you vana mro vikk ko naam ma aam ko paat dinxu😘","maya ..paisa magda tmile malai xillar diyeu ..maile tmilai sacho mqya garda tmile malai dhoka diyeuu","kinw bolako k jhanna kp oli ko natini fasai skeyko thye","malai vote gara ma nepal lai amrika banai dinxu 😻 ","moh sher bdr deuba ji lai eti vanna chahnxu ki yo bot bot vanne jati sab pagal lai mental hospital ko bato dekhaidinuss","RKO BRO ko maaya ma dubeuu haina??😿","mah aile bot hu ta eti maya grxau human vako vaye ajai bihe hunthyo ani voli palta bihe😘","babe tmi sachikai eti Ramro ho ki mero akha ko Power badhyo","dimag maa ta tmro bare sochda ta rangsala khele jhai lagxa ta k ho😃","finally i m in love with you","sorry I have a navako girlfriend","dhoka dina ta koi tmi bata sikhoss","jeans launa naskne baini ni boy vnxan ta k ho tmlai vnya haina hai uslai vneko","tmro koi cousin single xa? xa vane yaso budi banai deuna","Systemm faad dungaa chup kar","Systeem faad dunga💥","kate bot vaneko i love you admin ni vana","k bolyaa vai","yaaa vai tmi kun garhaa bata aako😒","Rukoo jara sabar karo","I'm waiting for iPhone 18 because I'm not buying iPhone that is underage😂😒🔥"," love you babe kiss deuna malai pani kati afno babe lai matra denxau k 😂 "," K xa babe chuppa deuna mero maya lagdaina timilai","vana darlingg k vayoo"," aunty hoki uncle ho🤔 boksi jataii dekhxa ta hau ","😑😑vana k vayoo","🤨🤨mula katii bolakoo busyy xuu tw jastoo free huna ma ","love you babe kiss deuna malai pani kati afno babe lai matra denxau k 😂","sab le malai afno babe off hunda matra samjhenxa aafno babe online ayese sab le birsenxa 😂","na hera malai tesarii maya baslaa haii besariii 😂","timro akha ma here rahu jhaii lagxa tra timro akha arkako babe tera lagxa kinna 😂","photo dekhaauna meroo ramri babe😾💁‍♂️","😁Smile I am Taking Selfy✌️🤳", "🥺Jan nahi kehna to men naraz ho jana he", "Block Your ‘’ gf ‘’ And Purpose me 🙂💔" ,"K0i Perp0Se Hi Krd0 Perm0te T0 hm PhlY hi HaiN 🙂","Main yahi hoon kya hua sweetheart🥂🙈💞 ," , "AA Dk Tujhe Aur Koi Kaam Nhi Hai? Har Waqt Bot Bot Karta H" , "Chup Reh, Nahi Toh Bahar Ake tera Dath Tor Dunga🤣✊" , "yes my love 💘" , "kya hua baby ko 😘😘" , "mujhe sharam ati hai aise aap bolte hai tho 🤭😝" , "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line" , "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠" , "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑" , "ruk tu chappal kaha he mari🩴" , "shakal Sy masoom lgty ho 😂 but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan 😂" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️" , "haiy babu ne boldiya hai shaid purpose kerna hai mujhe bolo bolo babu 😘" , "Aree pagal roti banana ke le aty main Pani ko istamal kerte ho 😂" , "Ary joke nah mar jo bhi kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂" , "Hayee Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Jao 😚🙈♥️" , "Dur Dur karib na a tujhe Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Karte Rahte Ho 😂" , "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail🤣✅" , "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂" , "ary babu babu kal hawali py kon bola rha tha 😂" , "Me Aap ki mummy ji ko btaou ga Aap Facebook use karty ho 😂" , "ary tum Wohi ho nah jis ko ma nahi janta 🤣✅" , "haveli per kal mil Zara bataunga 🌚😂Ha but उल्टी-सीधी harkat karne ke liye nahi" , "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬" , "aap aise mat bulo hame sharam aati hai 🙈♥️" , "bbu muje perpose karo na🤧", "tuje dekha to essa laga chand mere samne h😍", "menu bs teri ek chumi de de sona😚", "kalp gya kya mujse chal ab daru pila😀", "teri bbu muje inbox me msg kar rhi h😞", "abye suar", "bbu sun na teri sakal nhi h achi powder laga le 😂", "haw haw tu tó garibo ka masiha h na 😂", "systummmm apna chalta h elvish to chela h mera😐", "La la vayo aba Sut ki ma ni aaune ho 💋babe" , "1 Night ko 3000 dinxu😎🔥 codeing gardeu" , "Aau sutna Timro gar ma sutna dedainan hola hai 😂" , "Room Khali vaya Bolau na malai🧨😴" , "Room ma ko ko xau bolau na malai sutna man lagyo🙁nin layo" , "Yo garmi ma ajoi Hot huna xa vane bolau malai🔥" , "Aaija khana mero lalipop😌👀 yo feri🍭" , "mero boss RKO BRO lai soji kte khojdeuna 🥺" , "k vo afno girlfriend dinxasra malai bolako😒" , "K vo ba Tero budi lagera vageko jsre bolish ta😒😴" , "Yesari Hanxu ni ... tya 🙄aafai buj" , "Kate bot vanya buda vanera sutna ni bola😑😴" , "Kate Chateko mero.. dimak feri🙄👀"];

var rand = Messages[Math.floor(Math.random() * Messages.length)]

if ((event.body.toLowerCase() == "love bot") || (event.body.toLowerCase() == "love bot")) {
return api.sendMessage("Hmm... Bot is too shy to love the bot admin :))", threadID);
};

if ((event.body.toLowerCase() == "does bot love you") || (event.body.toLowerCase() == "bot loves you")) {
return api.sendMessage("Hi, Bot loves you more than me, love bot <3", threadID);
};

if ((event.body.toLowerCase() == "dog bot") || (event.body.toLowerCase() == "dog bot")) {
return api.sendMessage("What dog just talked bad about me, want to die😠", threadID);
};

if ((event.body.toLowerCase() == "dmm bot") || (event.body.toLowerCase() == "dmm bot")) {
return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
};

if ((event.body.toLowerCase() == "cursing cmm") || (event.body.toLowerCase() == "undercover cmm")) {
return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
};

if ((event.body.toLowerCase() == " bot muji") || (event.body.toLowerCase() == "khate bot")) {
return api.sendMessage("gaali garne kam nagar hoi Fuchhe ☠😾 :))", threadID);
};

if ((event.body.toLowerCase() == "🙊") || (event.body.toLowerCase() == "🥵")) {
return api.sendMessage("khub baish aaxa hoi tero👹", threadID);
};

if ((event.body.toLowerCase() == "khana vayo bot") || (event.body.toLowerCase() == "khana vayo")) {
return api.sendMessage("umm vakhar vayo ani hjr ko vannus🥰", threadID);
};

if ((event.body.toLowerCase() == "vayo") || (event.body.toLowerCase() == "Vayo")) {
return api.sendMessage("️ah huss❣", threadID);
};

if ((event.body.toLowerCase() == "🥶") || (event.body.toLowerCase() == "jado")) {
return api.sendMessage("Kate Jadoo hai babe🥶💝", threadID);
};

if ((event.body.toLowerCase() == "nasta khayeu") || (event.body.toLowerCase() == "nasta vayo")) {
return api.sendMessage("um khako ani timro💝🥰", threadID);
};

if ((event.body.toLowerCase() == "💋") || (event.body.toLowerCase() == "😘")) {
return api.sendMessage("️Ja brush garera aaija paile 🤢ksto ganaxa🤮", threadID);
};

if ((event.body.toLowerCase() == "Kata gayeu sab") || (event.body.toLowerCase() == "koi xau")) {
return api.sendMessage("️Ma XU TA yehi BEB💋 ❤️", threadID);
};

if ((event.body.toLowerCase() == "👀") || (event.body.toLowerCase() == "🙄")) {
return api.sendMessage("️na hara yesari love parla basari maya💝😘", threadID);
};

if ((event.body.toLowerCase() == "bot le maya gardaina") || (event.body.toLowerCase() == "bot le dhoka deyo")) {
return api.sendMessage("️no I love you and everytime so much💋💝", threadID);
};

if ((event.body.toLowerCase() == "sad vayo bot") || (event.body.toLowerCase() == "is the bot sad?")) {
return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
};

if ((event.body.toLowerCase() == "💔") || (event.body.toLowerCase() == "💘")) {
return api.sendMessage("Are k vayo feri breakup😬", threadID);
};

if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😢")) {
return api.sendMessage("abeyy oyee kabir Singh 🙄..k dukhi atma vako huh?", threadID);
};

if ((event.body.toLowerCase() == "chup")) {
return api.sendMessage("huss🙏", threadID);
};

if ((event.body.toLowerCase() == "bot do you love me") || (event.body.toLowerCase() == "Bot do you love me")) {
return api.sendMessage("yes babe💋 i love you khai xeto chuppa deu💋🙈😘", threadID);
};

if ((event.body.toLowerCase() == "😎")) {
return api.sendMessage("m toh Andha Hu Dekh nhi sakta😜", threadID);
};

if ((event.body.toLowerCase() == "love you bot") || (event.body.toLowerCase() == "i love you bot")) {
return api.sendMessage("️love you 2 babee😘💋lau chuppa", threadID);
};

if ((event.body.toLowerCase() == "ha vagwan")) {
return api.sendMessage("k vayo🥺", threadID);
};

if ((event.body.toLowerCase() == "nobody loves me")) {
return api.sendMessage("️Come on, the bot loves you <3 <3😘", threadID);
};

if ((event.body.toLowerCase() == "does the bot love the admin bot")) {
return api.sendMessage("Yes, love him the most, don't try to rob me😅", threadID);
};

if ((event.body.toLowerCase() == "kole banako tmlai") || (event.body.toLowerCase() == "timlai kole banako")) {
return api.sendMessage("RKO BRO is ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Latkaye Mat Raha Karo. Har Waqt Haste Raho.", threadID);
};

if ((event.body.toLowerCase() == "BOT KO HO") || (event.body.toLowerCase() == "bot vanya ko ho")) {
return api.sendMessage("He is RKO BRO. He Gives me a name ,CHENGARI,", threadID);
};

if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "🥴")) {
return api.sendMessage("afno thopda kalo karai jsto xa 😂 aja ignore garna khojne😑.", threadID);
};

if ((event.body.toLowerCase() == "bot ko chora")) {
return api.sendMessage("mere baccha toh Tumhare Pet m H", threadID);
};

if ((event.body.toLowerCase() == "bot help me")) {
return api.sendMessage("K vayo vana na🥺", threadID);
};

if ((event.body.toLowerCase() == "bot goes to sleep")) {
return api.sendMessage("I'm a bot, you're the one who should go to sleep <3😉", threadID);
};

if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
return api.sendMessage("I'm full when I see you eat <3", threadID);
};

if ((event.body.toLowerCase() == "does the bot love me")) {
return api.sendMessage("Yes <3💝", threadID);
};

if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
return api.sendMessage("Yes <3🔥", threadID);
};

if ((event.body.toLowerCase() == "😮")) {
return api.sendMessage("muu to band Karo chachara😒", threadID, messageID);
};

if ((event.body.toLowerCase() == "bot bihe garam hoi?") || (event.body.toLowerCase() == "Bihe garam bot")) {
return api.sendMessage("️hunxa, garxu tra baccha. Timro pet ma hunxa💋 ?", threadID, messageID);
};

if ((event.body.toLowerCase() == "chenanas malai") || (event.body.toLowerCase() == "Malik sa panga")) {
return api.sendMessage("️srry malik maaf kr do ab nhi kruga 🥺🙏", threadID, messageID);
};

if ((event.body.toLowerCase() == "k") || (event.body.toLowerCase() == "k?")) {
return api.sendMessage("️K na K😕", threadID, messageID);
};

if ((event.body.toLowerCase() == "Baby") || (event.body.toLowerCase() == "baby")) {
return api.sendMessage("️Don't Call Me baby Bcz I AM Yours buda😊", threadID, messageID);
};

if ((event.body.toLowerCase() == "husband") || (event.body.toLowerCase() == "budo")) {
return api.sendMessage("️Yes, My wife🥰", threadID, messageID);
};

if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "gm") || (event.body.toLowerCase() == "good morning")) {
return api.sendMessage("️Good Morningg!🌄,Have a great day 🔥💝", threadID, messageID);
};

if ((event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "bot thank you") || (event.body.toLowerCase() == "Thank you bot")) {
return api.sendMessage("️Ma xu nai teti rmro🥱 thank you vannu prdaina timle🥱🥱.", threadID, messageID);
};

if ((event.body.toLowerCase() == "bot name k ho tero") || (event.body.toLowerCase() == "name k ho bot") || (event.body.toLowerCase() == "Name van bot")) {
return api.sendMessage("️Name ma kei xaina direct i love you bot vndeu💗😘. hello", threadID, messageID);
};

if ((event.body.toLowerCase() == "koile maya gardaina malai") || (event.body.toLowerCase() == "dhoka deyo") || (event.body.toLowerCase() == "breakup vayo")) {
return api.sendMessage("️M Hu Na bby, Meri Pas Aoo M Pyar Karunga☺️", threadID, messageID);
};

if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gn") || (event.body.toLowerCase() == "good night")) {
return api.sendMessage("️Good Night🌃, Take Care Babe🥺", threadID, messageID);
};

if ((event.body.toLowerCase() == "bro bot")) {
return api.sendMessage("️But I Am boy, You Can Call Me Maya", threadID, messageID);
};

if ((event.body.toLowerCase() == "bot girl")) {
return api.sendMessage("️bbe, I Am boy 😑", threadID, messageID);
};

if ((event.body.toLowerCase() == "Sanchai xau") || (event.body.toLowerCase() == "sanchai xau")) {
return api.sendMessage("️umm ani hjr💝", threadID, messageID);
};

if ((event.body.toLowerCase() == "are u fine?")) {
return api.sendMessage("️yeah☺️", threadID, messageID);
};

if ((event.body.toLowerCase() == "bot ksre banayune")) {
return api.sendMessage("Khud hi bna lo. tumhe kuch nhi ata h ?", threadID, messageID);
};

if ((event.body.toLowerCase() == "ramro xeu") || (event.body.toLowerCase() == "beautiful xeu") || (event.body.toLowerCase() == "Ramri xeu") || (event.body.toLowerCase() == "dami xeu") || (event.body.toLowerCase() == "sexy xeu") || (event.body.toLowerCase() == "cute xeu")) {
return api.sendMessage("So beautiful so elegant just looking like a wow 💝😘💋", threadID, messageID);
};

if ((event.body.toLowerCase() == "RKO ") || (event.body.toLowerCase() == "RKO BRO") || (event.body.toLowerCase() == "RK O BRO") || (event.body.toLowerCase() == "rko")) {
return api.sendMessage("https://www.facebook.com/profile.php?id=100084573213860🥰", threadID, messageID);
};

if ((event.body.toLowerCase() == "fight") || (event.body.toLowerCase() == "fyt")) {
return api.sendMessage("️Sorry, We Are Peace Lover ✌🏻🕊", threadID, messageID);
};


if ((event.body.toLowerCase() == "i love you bot") || (event.body.toLowerCase() == "Love you bot")) {
return api.sendMessage("I love you 2 babe 💋😘 lau chuppa💝💋", threadID, messageID);
};

if ((event.body.toLowerCase() == "who are you") || (event.body.toLowerCase() == "who r u")) {
return api.sendMessage("️I Am RKO BOT , An AI Based Messenger Chatbot.", threadID, messageID);
};

if (event.body.indexOf("Bot") == 0 || (event.body.toLowerCase() == "bot") || (event.body.indexOf("BOT") == 0)) {
var msg = {
body: ` ${rand}`
}
return api.sendMessage(msg, threadID, messageID);
}
}
};			
