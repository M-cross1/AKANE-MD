const fs = require('fs')
const chalk = require('chalk')
global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['62']

global.gambar = "https://files.catbox.moe/zhbsht.jpg"
global.owner = "2347049602299" //owner number
global.bankname = "OPAY WALLET"

global.banknumber = "9042566473"

global.bankowner = "OJO CHRISTIANAH OLAITAN"
global.creatorName = "M-CROSS"
global.ownernumber = '2347049602299'  //creator number
global.location = "Nigeria, Ogun-state, otta"
global.prefa = ['','!','.','#','&']
//================DO NOT CHANGE OR YOU'LL GET AN ERROR=============\
global.footer = "𝕽𝖎𝖈𝖍𝖎𝖊" //footer section
global.link = "https://Wa.me/2347049602299?text=Boss%20%20my%20name%20is___%20and%20I've%20saved%20your%20contact%20you%20should%20please%20save%20mine%20too%20%20✅"
global.autobio = true//auto update bio
global.botName = "⚡"
global.version = "𝙑𝟭"
global.botname = "ㅤㅤㅤㅤ MD"
global.author = "ㅤㅤㅤㅤ"
global.themeemoji = '🀄'
global.wagc = 'https://Wa.me/2347049602299?text=Boss%20%20my%20name%20is___%20and%20Ive%20saved%20your%20contact%20you%20should%20please%20save%20mine%20too%20%20✅'
global.thumbnail = 'https://files.catbox.moe/l9gpzm.jpg'
global.ownername = 'ㅤㅤㅤㅤ' 
global.onlyowner = `𝘴𝘰𝘳𝘳𝘺 𝘰𝘯𝘭𝘺 𝘧𝘰𝘳  𝘰𝘸𝘯𝘦𝘳𝘴
𝘤𝘰𝘯𝘵𝘢𝘤𝘵 ㅤㅤㅤㅤ 𝘵𝘰 𝘣𝘦 𝘢𝘯 𝘰𝘸𝘯𝘦𝘳`
  // reply 
global.database = `𝘛𝘰 𝘣𝘦 𝘪𝘯  𝘥𝘢𝘵𝘢𝘣𝘢𝘴𝘦 𝘣𝘢𝘴𝘦 𝘤𝘰𝘯𝘵𝘢𝘤𝘵 𝘙𝘪𝘤𝘩𝘪𝘦*`
  global.mess = {
wait: "```WAIT FOR ㅤㅤㅤㅤ 🀄```",
   success: "𝑺𝒖𝒄𝒄𝒆𝒔𝒔 ㅤㅤㅤㅤ",
   on: "ㅤㅤㅤㅤ active bro", 
   prem: "FOR PREMIUM USERS ONLY ADD YOUR NUMBER TO DATABASE TO ACCESS PREMIUM", 
   off: "Akane off",
   query: {
       text: "Where's the text, man?",
       link: "Where's the link, bro?",
   },
   error: {
       fitur: "Sorry, bro, the feature has error. Please chat with the Bot Developer so it can be fixed immediately.",
   },
   only: {
       group: "Sorry bro, This Feature Can Only Be Used In Groups only",
private: "Sorry bro, This Feature Can Only Be Used In Private Chats",
       owner: "Sorry bro, This Feature Can Only Be Used by Richie",
       admin: " Sorry, this feature can only be used by Bot Admins",
       badmin: "Sorry, bro, It Looks Like You Can't Use This Feature Because the Bot is Not yet Group Admin",
       premium: "This feature is specifically for Richie beloved Premium users",
   }
}

global.hituet = 0
//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = true //auto block +92 
global.autoswview = true //auto view status/story

  
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
