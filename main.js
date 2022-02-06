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

       ikyy.sendMessage("0@s.whatsapp.net", `halo mark🗿`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Owner RIFQI BOTZ",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./connect.jpg'),sourceUrl:"https://wa.me/0?text=Assalamualaikum"}}})

     console.log(color('|INFO!|', 'yellow'), color('mengirim info bot ke owner', 'cyan'))

   })
	// session



	await ikyy.connect({



		timeoutMs: 30 * 1000



	})



	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(ikyy.base64EncodedAuthInfo(), null, '\t'))

//jd

if (hour_now >= '02:00' && hour_now <= '04:00') {
          console.log(color('[PESAN DARI ORANG BAIK]', 'cyan'), color('Waktunya sahur kak, Main botnya buat nanti lagi, Sebelum makan jangan lupa baca Doa ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '04:00' && hour_now <= '05:00') {
          console.log(color('[PESAN DARI ORANG BAIK]', 'cyan'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'yellow'), color('(😊)', 'white'))
          }
          if (hour_now >= '05:00' && hour_now <= '06:00') {
          console.log(color('[PESAN DARI ORANG BAIK]', 'cyan'), color('Udah sholat Subuh belum kak', 'yellow'), color('(🙄)', 'white'))
          }
        if (hour_now >= '06:00' && hour_now <= '11:00') {
          console.log(color('[PESAN DARI ORANG BAIK]', 'cyan'), color('Pagi kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
          if (hour_now >= '11:00' && hour_now <= '12:00') {
          console.log(color('[PESAN DARI ORANG BAIK]', 'cyan'), color('Siang kak, Dah mandi blm kak?', 'yellow'), color('(🙄)', 'white'))
          }
          if (hour_now >= '12:00' && hour_now <= '14:00') {
           console.log(color('[PESAN DARI ORANG BAIK]', 'cyan'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '14:00' && hour_now <= '15:00') {
          console.log(color('[PESAN DARI ORANG BAIK]', 'cyan'), color('Sore kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
        if (hour_now >= '15:00' && hour_now <= '16:00') {
          console.log(color('[PESAN DARI ORANG BAIK]', 'cyan'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '17:00' && hour_now <= '18:00') {
          console.log(color('[PESAN DARI ORANG BAIK]', 'cyan'), color('Bentar lagi maghrib kak, Sabar ya kak', 'yellow'), color('(😆)', 'white'))
          }
        if (hour_now >= '18:00' && hour_now <= '19:00') {
        	console.log(color('[PESAN DARI ORANG BAIK]', 'cyan'), color('Alhamdulillah, Dah adzan kak, Puasanya dibatalin dulu kak, Sebelum makan jangan lupa baca doa kak, Setelah makan langsung sholat Maghrib ya kak', 'yellow'), color('(😊)', 'white'))
        }
        if (hour_now >= '19:00' && hour_now <= '20:00') {
           console.log(color('[PESAN DARI ORANG BAIK]', 'cyan'), color('Bentar lagi jam 8 kak, Yok kak main botnya buat nanti lagi, Sekarang siap-siap dulu buat Sholat Tarawih', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '20:00' && hour_now <= '00:00') {
           console.log(color('[PESAN DARI ORANG BAIK]', 'cyan'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'yellow'), color('(😄)', 'white'))
        }
          if (hour_now >= '00:00' && hour_now <= '02:00') {
           console.log(color('[PESAN DARI ORANG BAIK]', 'cyan'), color('KenzyBot ngantuk kak, tidur dulu ya kak', 'yellow'), color('(😴)', 'white'))
        }
        
        
        

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
