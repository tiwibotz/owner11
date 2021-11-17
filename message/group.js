/// API WELCOME ///
/*lolhuman = https://api.lolhuman.xyz/api/base/welcome?apikey=${setting.lolkey}&img1=${pp_user}&img2=${pp_grup}&background=https://telegra.ph/file/559d40a73f54e257b0b2e.jpg&username=${encodeURI(anu_user)}&member=${memeg}&groupname= ${encodeURI(mdata.subject)}
/* hadi api = http://hadi-api.herokuapp.com/api/card/welcome2?nama=${encodeURI(anu_user)}&descriminator=${memeg}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&gcicon=${pp_grup}&pp=${pp_user}&bg=https://bit.ly/walpamikel
/*hadi api = http://hadi-api.herokuapp.com/api/card/welcome?nama=${encodeURI(anu_user)}&descriminator=${memeg}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&gcicon=${pp_grup}&pp=${pp_user}&bg=https://bit.ly/walpamikel
/*aldi fauzi = https://ziy.herokuapp.com/api/author/welcome1?pp=${pp_user}&nama=${anu_user}&namagc=${encodeURI(mdata.subject)}&ppgc=${ppgc}&bg=https://i.ibb.co/XjgQzkB/b1be492ada987df650bc831b1631815e.jpg&member=${mdata.participants.length}
**/

/////////// WELCOME BUTTON ////////
/**const {

	MessageType

} = require("@adiwajshing/baileys");

const fs = require("fs-extra")



const { getBuffer } = require('../lib/myfunc')

const { color, bgcolor } = require('../lib/color')

join = 'WELCOMEðŸ’«'

leave = '\`\`\`Sayonaraa\`\`\`'



teks = `${join}`

let setting = JSON.parse(fs.readFileSync('./setting.json'))



module.exports = welcome = async (ikyy, anu) => {

	    const welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))

	    const isWelcome = welkom.includes(anu.jid)

	    if (!isWelcome) return

		try {

			    mem = anu.participants[0]

			    console.log(anu)

                try {

                pp_user = await ikyy.getProfilePicture(mem)

                } catch (e) {

                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'

            }

                try {

                pp_grup = await ikyy.getProfilePicture(anu.jid)

                } catch (e) {

                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'

            }

            if (anu.action == 'add' && mem.includes(ikyy.user.jid)) {

            ikyy.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot Ketik !menu', 'conversation')

            }

             if (anu.action == 'add' && !mem.includes(ikyy.user.jid)) {

             if (!welkom.includes(anu.jid)) return

                mdata = await ikyy.groupMetadata(anu.jid)

           

                memeg = mdata.participants.length

            	num = anu.participants[0]

                let v = ikyy.contacts[num] || { notify: num.replace(/@.+/, '') }

                anu_user = v.vname || v.notify || num.split('@')[0]

            buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome2?nama=${encodeURI(anu_user)}&descriminator=${memeg}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&gcicon=${pp_grup}&pp=${pp_user}&bg=https://bit.ly/walpamikel`)

        buttons = [



          { buttonId: `!selamatdatang`, buttonText: { displayText: "WelcomeðŸ‘‹" }, type: 1 },



        ];



        imageMsg = (



          await ikyy.prepareMessageMedia(buff, "imageMessage", {



            thumbnail: buff,



          })



        ).imageMessage;



        buttonsMessage = {



          contentText: `${teks}`,



          footerText: "Welcome Message By ",



          imageMessage: imageMsg,



          buttons: buttons,



          headerType: 4,



        };



        prep = await ikyy.prepareMessageFromContent(



          mdata.id,



          { buttonsMessage },



          {}



        );



        ikyy.relayWAMessage(prep);



      }



      if (anu.action == "remove" && !mem.includes(ikyy.user.jid)) {



        mdata = await ikyy.groupMetadata(anu.jid);



        num = anu.participants[0];



        let w = ikyy.contacts[num] || { notify: num.replace(/@.+/, "") };



        anu_user = w.vname || w.notify || num.split("@")[0];



        memeg = mdata.participants.length;



        out = `${leave}`;



        buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye2?nama=${encodeURI(anu_user)}&descriminator=${memeg}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&gcicon=${pp_grup}&pp=${pp_user}&bg=https://bit.ly/walpamikel`)

            

        buttons = [



          { buttonId: `!bay`, buttonText: { displayText: "SayonaraðŸ‘‹" }, type: 1 },];



        imageMsg = (



          await ikyy.prepareMessageMedia(buff, "imageMessage", {



            thumbnail: buff,



          })



        ).imageMessage;



        buttonsMessage = {



          contentText: `${out}`,



          footerText: "Leave Message By ",



          imageMessage: imageMsg,



          buttons: buttons,



          headerType: 4,



        };



        prep = await ikyy.prepareMessageFromContent(



          mdata.id,



          { buttonsMessage },



          {}



        );



        ikyy.relayWAMessage(prep);

        }

		} catch (e) {

			console.log('Error : %s', color(e, 'red'))

		}

	}**/
/////////////////END//////////////////
	
	
//// WELCOME BUTLOC //////
/**const {

	MessageType

} = require("@adiwajshing/baileys");

const fs = require("fs-extra")



const { getBuffer } = require('../lib/myfunc')

const { color, bgcolor } = require('../lib/color')



let setting = JSON.parse(fs.readFileSync('./setting.json'))

const moment = require("moment-timezone")



module.exports = welcome = async (ikyy, anu) => {

	    const welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))

	    const isWelcome = welkom.includes(anu.jid)

	    if (!isWelcome) return

		try {

			    mem = anu.participants[0]

			    console.log(anu)

          try {

               var pp_user = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)

            } catch {

                var pp_user = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'

            }

           

   



                var ppgc = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'

            

            if (anu.action == 'add' && mem.includes(ikyy.user.jid)) {

            ikyy.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot Ketik !menu', 'conversation')

            }

             if (anu.action == 'add' && !mem.includes(ikyy.user.jid)) {

             if (!welkom.includes(anu.jid)) return

                mdata = await ikyy.groupMetadata(anu.jid)

                memeg = mdata.participants.length

            	 num = anu.participants[0]

                let v = ikyy.contacts[num] || { notify: num.replace(/@.+/, '') }

                anu_user = v.vname || v.notify || num.split('@')[0]

                let p2 = await ikyy.getStatus(num)

        let p3 = `${p2? `${p2.status}` : '-'}`

        timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
   d = new Date
        locale = 'id'
        gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
      weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
         week = d.toLocaleDateString(locale, { weekday: 'long' })
 date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
 waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })
calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
       })
               timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
                teks = `*Welcome @${num.split('@')[0]}* 

📛 : _${anu_user}_
💌 : _${p3}_
🔣 : _@${num.split('@')[0]}_
🥉 : _${memeg} Member (s)_
⏰ : _${timuu} Indonesian time_

\`\`\`Hope you like it and don't forget to read the group description\`\`\``;

	            buff = await getBuffer(`https://ziy.herokuapp.com/api/author/welcome1?pp=${pp_user}&nama=${anu_user}&namagc=${encodeURI(mdata.subject)}&ppgc=${ppgc}&bg=https://i.ibb.co/XjgQzkB/b1be492ada987df650bc831b1631815e.jpg&member=${mdata.participants.length}`)

		        ikyy.sendMessage(mdata.id, { contentText: `${teks}`, footerText: `${timuu} - ${week} ${weton} - ${calender}`, buttons: [{buttonId: `!lll`,buttonText:{displayText: 'Welcome'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
		}
            if (anu.action == 'remove' && !mem.includes(ikyy.user.jid)) {

            if (!welkom.includes(anu.jid)) return

                mdata = await ikyy.groupMetadata(anu.jid)

            	num = anu.participants[0]

                let w = ikyy.contacts[num] || { notify: num.replace(/@.+/, '') }

                anu_user = w.vname || w.notify || num.split('@')[0]

                memeg = mdata.participants.length

                let p2 = await ikyy.getStatus(num)

        let p3 = `${p2? `${p2.status}` : '-'}`

         d = new Date
        locale = 'id'
        gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
      weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
         week = d.toLocaleDateString(locale, { weekday: 'long' })
 date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
 waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })
 calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
       })
              timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
                out = `◪ Goodbye @${num.split('@')[0]}
◪ Leave from group:
${mdata.subject}
│
└─ ❏ Nomor: ${num.replace('@s.whatsapp.net', '')}

GoodBye~~`;

                buff = await getBuffer(`https://ziy.herokuapp.com/api/author/goodbye1?pp=${pp_user}&nama=${anu_user}&namagc=${encodeURI(mdata.subject)}&ppgc=${ppgc}&bg=https://i.ibb.co/XjgQzkB/b1be492ada987df650bc831b1631815e.jpg&member=${mdata.participants.length}`)

                ikyy.sendMessage(mdata.id, { contentText: `${out}`, footerText: `${timuu} - ${week} ${weton} - ${calender}`, buttons: [{buttonId: `!lll`,buttonText:{displayText: 'Welcome'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
		}
		} catch (e) {

			console.log('Error : %s', color(e, 'red'))

		}

	}**/
	////////////////END//////////
	
	
	
//////// WELCOME BIASA ////////////
const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")

const { getBuffer } = require('../lib/myfunc')
const { color, bgcolor } = require('../lib/color')

let setting = JSON.parse(fs.readFileSync('./setting.json'))
const moment = require("moment-timezone")

module.exports = welcome = async (ikyy, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    mem = anu.participants[0]
			    console.log(anu)
   
            try {
               pp_user = await nino.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
           var pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            
            if (anu.action == 'add' && mem.includes(ikyy.user.jid)) {
            ikyy.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot Ketik !menu', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(ikyy.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await ikyy.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	 num = anu.participants[0]
                let v = ikyy.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                let p2 = await ikyy.getStatus(num)
        let p3 = `${p2? `${p2.status}` : '-'}`
        timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
                teks = `*Welcome @${num.split('@')[0]}* 

📛 : _${anu_user}_
💌 : _${p3}_
🔣 : _@${num.split('@')[0]}_
🥉 : _${memeg} Member (s)_
⏰ : _${timuu} Indonesian time_

\`\`\`Hope you like it and don't forget to read the group description\`\`\``;
	            buff = await getBuffer(pp_user)
		        ikyy.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		}
            if (anu.action == 'remove' && !mem.includes(ikyy.user.jid)) {
            if (!welkom.includes(anu.jid)) return
                mdata = await ikyy.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = ikyy.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                memeg = mdata.participants.length
                let p2 = await ikyy.getStatus(num)
        let p3 = `${p2? `${p2.status}` : '-'}`
        timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
                out = `◪ Goodbye @${num.split('@')[0]}
◪ Leave from group:
${mdata.subject}
│
└─ ❏ Nomor: ${num.replace('@s.whatsapp.net', '')}
GoodBye~~`;
                buff = await getBuffer(pp_user)
                ikyy.sendMessage(mdata.id, buff, MessageType.image, {caption: out, contextInfo: {"mentionedJid": [num]}})
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}