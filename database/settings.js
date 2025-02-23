const version = require("@whiskeysockets/baileys/package.json").version
const { pairNumber, accNumber, bankName, name, any, emoji }  = require('../USER')
global.pairingNumber = pairNumber
global.botNumber = pairingNumber
global.anticall = false
global.autoReadChat = false
global.alwaysonline = true
global.autoswview = false
global.autoreact = false
global.public = true
global.antidelete = false
global.autotyping = false
global.autoBio = true
global.antiSpam = true
global.sign = any
global.bank = bankName
global.bankname = name
global.accnumber = accNumber
global.language = "en"
global.sessionName = "session"
global.pairingCode = true 
global.runWith = "𝙽𝙾𝙳𝙴.𝙹𝚂"
global.newsletterJid = "120363304326105871@newsletter"
global.newsletterName = "𝐁𝐋𝐔𝐄 𝐗 𝐃𝐄𝐌𝐎𝐍 𝐕𝟓"
global.caption = "powered by blue demon"
global.ownerName = "𝐁𝐋𝐔𝐄 𝐃𝐄𝐌𝐎𝐍"
global.syt = 'https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h'
global.sgc = 'https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h'
global.sig = 'https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h'
global.web = 'https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h'
//setbot
global.botName = "𝐁𝐋𝐔𝐄 𝐗 𝐃𝐄𝐌𝐎𝐍 𝐕𝟓" 
global.wm = "𝐁𝐋𝐔𝐄 𝐗 𝐃𝐄𝐌𝐎𝐍 𝐕𝟓"
global.fake = botName
global.setmenu = "image" 
global.docType = "application/vnd.ms-excel"
global.themeemoji = emoji
global.fotoRandom = [
"https://wallpapercave.com/wp/wp12801047.jpg",
"https://wallpapercave.com/wp/wp12456894.jpg"]
global.Intervalmsg = 1000
global.baileysMd = true
global.multi = false
global.autorespon = false
global.copyright = `𝐁𝐋𝐔𝐄 𝐗 𝐃𝐄𝐌𝐎𝐍 𝐕𝟓`
global.baileysVersion = `${themeemoji}Baileys ${version}`
global.packName = `𝐁𝐋𝐔𝐄 𝐗 𝐃𝐄𝐌𝐎𝐍 𝐕𝟓`
global.authorName = "BLUE DEMON"
global.replyType = "web"
global.setwelcome = "type1"
global.fake = "whatsapp bot"
global.gcounti = {
'prem' : 1000,
'user' : 5
} 
let d = new Date();
      let locale = "en";
      let gmt = new Date(0).getTime() - new Date("1 January 2024").getTime();
      let week = d.toLocaleDateString(locale, { weekday: "long" });
      const calender = d.toLocaleDateString("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      });
global.calender = calender;
const fs = require("fs");
const { color } = require("../lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})