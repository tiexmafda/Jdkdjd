const fs = require('fs')
const chalk = require('chalk')


global.botname = "TXR KING" 
global.botLanguage = "english" // ðð²ð³ð®ðð¹ð || ðð»ð´ð¹ð¶ððµ || ðð¶ð»ð±ð¶ || ðð¿ð®ð¯ð¶ð° \\
global.author = "ðððð¼"  
global.packname = "ðððððâ¯ð¼ððð¼â¯ð½ðð"  
global.myweb = "https://www.facebook.com/profile.php?id=100088867766900" // You can put any link 
global.waterMark = "ÃÍÃ King â TXR â¢ â" // Your own watermark 
global.headerText = "Anya by Pika" // text for header of menu         
global.DocumentTitle = "MASTERâï¸TXR" 


global.ownername = "TXR KING"   // Owner name //        
global.ownernumber = ['94751150234'] 
global.socialm = "ðð»ððð® : TXR KING" // ðð»ððð® : || ðð¶ððµðð¯ : || ðð®ð°ð²ð¯ð¼ð¼ð¸ : \\
global.ytname = "YT: Ytname"   // Yt chanel name //
global.continent = "Asia" // your continent name 
global.region = "India" // your country name
global.state = "Assam" // your state name
global.district = "Dibrugarh" // your district name
global.timezone = "Asia/Kolkata" // search on google if you don't know the timezone of your country //
global.instagramId = "3.69_TXR" // Your insta ID
global.email = "example@exmaple.com" // put your email here


//------------ ð Premium Users ð-------------\\
global.premium = ['94751150234','94751150234']  // available soon
global.sudo = ['94751150234','94751150234']  // Co - Owners //

global.prefa = ['-','ð¥µ','ð¥']

//--------Random bot name for Info section--------\\
name16 = "ê§____ððð-ð¾ð¼ððº____ê§"
name17 = "ê§____ððð-ð¾ð¼ððº____ê§"
name18 = "ê§____ððð-ð¾ð¼ððº____ê§"

//--------Random footer message-----------\\
footer1 = `ê§____ððð-ð¾ð¼ððº____ê§ `
footer2 = `ê§____ððð-ð¾ð¼ððº____ê§`

//--------Left message "Nikal msg"--------\\
nikalmsg1 = 'Ye galiye ye choubara, yaha dikhna na dubara ððð»' 
nikalmsg2 = 'Patt se headshot ð«...Abey dil se bura lagta hai bhai ð.'

//--------Random Tagall msg--------\\
tag1 = 'ðð¦ðº ð¦ð·ð¦ð³ðºð£ð°ð¥ðºð, ðð°ð®ð¦ ð°ð¯ð­ðªð¯ð¦ ð¢ð¯ð¥ ð¶ð´ð¦ ðµð©ðªð´ ð¢ð¸ð¦ð´ð°ð®ð¦ ðð°ðµ.' 
tag2 = 'ððºð¦ ð¦ð·ð¦ð³ðºð°ð¯ð¦!! ðð©ð¦ð³ð¦ ð¢ð³ð¦ ðºð°ð¶ ð¢ð­ð­?ð' 
tag3 = 'ðð£ð¦ðº ð°ð¯ð­ðªð¯ð¦ ð¢ð¢ð° ðºð¢ð¢ð³!ð' 
tag4 = 'ðð°ð¸ ð­ð°ð°ð¬ ð¢ðµ ðµð©ðªð´ ð¢ð¥ð·ð¢ð¯ð¤ð¦ ðð°ðµ.ð' 
tag5 = 'ð ð¢ð¢ð³ ð¬ðºð¢ ðð°ðµ ð©ð¢ðªâ¤ï¸' 
tag6 = 'ððµð¯ð¢ ð®ð»ð¢ ð¬ðºð¶ ð¢ð¢ ð³ð©ð¢ ð©ð¢ðª...ðð¶ð¯ð¦ ð©ð¢ð¸ð¢ ð®ð¦ ð£ð©ð¢ð¯ð¨ ð®ðªð­ð¢ðºð¢ ð©ð¢ðª!ð¥µ' 
tag7 = 'ðð©ð¦ð³ð¦ ð¢ð³ð¦ ðºð°ð¶ ð¢ð­ð­?' 
tag8 = 'ðð¦ðº ð¸ð©ð¦ð³ð¦ ðºð°ð¶ ð¢ð­ð­?...ð¤ð°ð®ð¦ ð©ð¦ð³ð¦ ð¨ð¶ðºð´ ð¶ð´ð¦ ðµð©ðªð´ ðð ðð°ðµ!ð¥' 
tag9 = 'ð ð°ð¶ ð¢ð­ð­ ð´ð©ð°ð¶ð­ ðµð³ðº ðµð©ðªð´ ð¤ð¶ðµð¦ ðð¯ðºð¢â¤ï¸ð«' 
tag10 = 'ððºð°ð° ðð¯ðºð¢ ðªð´ ðð¦ð´ðµ!!ð' 


global.mess = {
    success: 'Work done ðð®ð¿ð¹ð¶ð»ð´â¤ï¸',
    admin: "Baby!\nThis command is only for ðð±ðºð¶ð»ð...So i can't process your command babe. ð", // I used "\n" for change the line 
    botAdmin: 'First make me ðð±ðºð¶ð»!!! ð',
    owner: 'This command is only for my ð¼ðð»ð²ð¿..',
    group: "Baka !!!!!\nYou can't use this command in a ð½ð¿ð¶ðð®ðð² ð°ðµð®ð !ð",
    private: 'Such a baka !!\nThis command is only for ð½ð¿ð¶ðð®ðð² ð°ðµð®ðð. ð¥²',
    bot: "This Feature Is Only For ðð¼ð... and you're not a ðð¼ð.",
    wait: "I'm progressing your command babyâ¤ï¸, Please wait......",
    linkm: 'Abey where is the link...?',
    error: 'I got an ð²ð¿ð¿ð¼ð¿!!',
    sudo: "*Hey User ð....*\nYou can't use this command because this command is only for my co-owner.", 
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the ð¼ðð»ð²ð¿ ð¡, if you want to be ðð»ð¯ð®ð»ð»ð²ð±, chat owner.',
    nsfw: 'The nsfw feature has not been activated, Bc padhai likhai karo ððð¦ - ð¬ðð¦ bano lekin nhii tumhe to nudity dekhni hai ð',
    banChat: 'The bot was banned ð¶ð» ððµð¶ð ð´ð¿ð¼ðð½!, please contact the owner to unban.'
}

//--------------- Menu images ----------------\\
global.Menuimage = fs.readFileSync("./AnyaPikaMedia/theme/Menu/Menuimg.jpg")
global.thumnnaiIs = fs.readFileSync("./AnyaPikaMedia/theme/Menu/Menuimg2.jpeg")

//--------------- Systemic Function --------------\\
global.autoTyping = false 
global.autoreadpmngc = false 
global.autoReadGc = false 
global.autoRecord = false 
global.available = true
global.autoTyping = false 

//----------- Users Userlimit -----------\\
global.userLimit = {
premium: "Infinity",  // premium users 
free: 12,            // Free users
}


/*ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ DANGER ZONE â ï¸ð ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹ð¹*/
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
