import fetch from 'node-fetch'
import fs from 'fs' 

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, text }) => { 
//try{
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'

let titulo = [ 
lenguajeMY.smsParaAdmins() + ' ' + `${m.isGroup ? chat.welcome ? '✅' : '❌' : lenguajeMY.smsNoGg()}`, 
lenguajeMY.smsParaAdmins() + ' ' + `${m.isGroup ? chat.detect ? '✅' : '❌' : lenguajeMY.smsNoGg()}`,  
lenguajeMY.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.autolevelup ? '✅' : '❌' : lenguajeMY.smsNoGg()}`,   
lenguajeMY.smsParaOw() + ' ' + `${bot.restrict ? '✅' : '❌'}`,    
lenguajeMY.smsParaOw() + ' ' + `${bot.antiCall ? '✅' : '❌'}`,
lenguajeMY.smsParaOw() + ' ' + `${bot.antiSpam ? '✅' : '❌'}`,	
lenguajeMY.smsParaOw() + ' ' + `${global.opts['self'] ? '❌' : '✅'}`,    
lenguajeMY.smsParaAdmins() + ' ' + `${m.isGroup ? chat.modoadmin ? '✅' : '❌' : lenguajeMY.smsNoGg()}`,  
lenguajeMY.smsParaOw() + ' ' + `${global.opts['autoread'] ? '✅' : '❌'}`, 
lenguajeMY.smsParaOw() + ' ' + `${bot.temporal ? '✅' : '❌'}`,      
lenguajeMY.smsParaAdmins() + ' ' + `${m.isGroup ? chat.stickers ? '✅' : '❌' : lenguajeMY.smsNoGg()}`,   
lenguajeMY.smsParaAdmins() + ' ' + `${m.isGroup ? chat.autosticker ? '✅' : '❌' : lenguajeMY.smsNoGg()}`,   
lenguajeMY.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.reaction ? '✅' : '❌' : lenguajeMY.smsNoGg()}`,    
lenguajeMY.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.audios ? '✅' : '❌' : lenguajeMY.smsNoGg()}`,  
lenguajeMY.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.modohorny ? '✅' : '❌' : lenguajeMY.smsNoGg()}`,   
lenguajeMY.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antitoxic ? '✅' : '❌' : lenguajeMY.smsNoGg()}`,   
lenguajeMY.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.antiver ? '✅' : '❌' : lenguajeMY.smsNoGg()}`,  
lenguajeMY.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.delete ? '✅' : '❌' : lenguajeMY.smsNoGg()}`,  
lenguajeMY.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antifake ? '✅' : '❌' : lenguajeMY.smsNoGg()}`,  
lenguajeMY.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiLink ? '✅' : '❌' : lenguajeMY.smsNoGg()}`,   
lenguajeMY.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiLink2 ? '✅' : '❌' : lenguajeMY.smsNoGg()}`,    
lenguajeMY.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTiktok ? '✅' : '❌' : lenguajeMY.smsNoGg()}`,    
lenguajeMY.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiYoutube ? '✅' : '❌' : lenguajeMY.smsNoGg()}`,    
lenguajeMY.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTelegram ? '✅' : '❌' : lenguajeMY.smsNoGg()}`,    
lenguajeMY.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiFacebook ? '✅' : '❌' : lenguajeMY.smsNoGg()}`,   
lenguajeMY.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiInstagram ? '✅' : '❌' : lenguajeMY.smsNoGg()}`,    
lenguajeMY.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTwitter ? '✅' : '❌' : lenguajeMY.smsNoGg()}`,    
lenguajeMY.smsParaOw() + ' ' + `${global.opts['pconly'] ? '✅' : '❌'}`,  
lenguajeMY.smsParaOw() + ' ' + `${global.opts['gconly'] ? '✅' : '❌'}`]
lenguajeMY.smsParaOw() + ' ' + `${global.opts['antiprivado'] ? '✅' : '❌'}`

let nombre = [ lenguajeMY.smsWel1(), lenguajeMY.smsDete1(), lenguajeMY.smsANivel1(), lenguajeMY.smsRestri1(), lenguajeMY.smsLlamar1(), lenguajeMY.smsAntiSp1(), lenguajeMY.smsModP1(), lenguajeMY.smsModAd1(), lenguajeMY.smsLect1(), lenguajeMY.smsTempo1(), lenguajeMY.smsStik1(), lenguajeMY.smsStickA1(), lenguajeMY.smsReacc1(), lenguajeMY.smsAudi1(), lenguajeMY.smsModHor1(), lenguajeMY.smsAntitoc1(), lenguajeMY.smsModOb1(), lenguajeMY.smsAntiEli1(), lenguajeMY.smsAntiInt1(), lenguajeMY.smsAntiE1(), lenguajeMY.smsAntiEE1(), lenguajeMY.smsAntiTT1(), lenguajeMY.smsAntiYT1(), lenguajeMY.smsAntiTEL1(), lenguajeMY.smsAntiFB1(),
lenguajeMY.smsAntiIG1(), lenguajeMY.smsAntiTW1(), lenguajeMY.smsSOLOP1(), lenguajeMY.smsSOLOG1()]

let descripción = [ lenguajeMY.smsWel2(), lenguajeMY.smsDete2(), lenguajeMY.smsANivel2(), lenguajeMY.smsRestri2(), lenguajeMY.smsLlamar2(), lenguajeMY.smsAntiSp2(), lenguajeMY.smsModP2(), lenguajeMY.smsModAd2(), lenguajeMY.smsLect2(), lenguajeMY.smsTempo2(), lenguajeMY.smsStik2(), lenguajeMY.smsStickA2(), lenguajeMY.smsReacc2(), lenguajeMY.smsAudi2(), lenguajeMY.smsModHor2(), lenguajeMY.smsAntitoc2(), lenguajeMY.smsModOb2(), lenguajeMY.smsAntiEli2(), lenguajeMY.smsAntiInt2(), lenguajeMY.smsAntiE2(), lenguajeMY.smsAntiEE2(), lenguajeMY.smsAntiTT2(), lenguajeMY.smsAntiYT2(), lenguajeMY.smsAntiTEL2(), lenguajeMY.smsAntiFB2(),
lenguajeMY.smsAntiIG2(), lenguajeMY.smsAntiTW2(), lenguajeMY.smsSOLOP2(), lenguajeMY.smsSOLOG2()]

let comando = [ "welcome", "detect", "autolevelup", "restrict", "anticall", "antispam", "public", "modoadmin", "autoread", "temporal", "stickers", "autosticker", "reaction", "audios", "modohorny", "antitoxic", "antiviewonce", "antidelete", "antifake", "antilink", "antilink2", "antitiktok", "antiyoutube", "antitelegram", "antifacebook",
"antinstagram", "antitwitter", "pconly", "gconly", "antiprivado"]

let sections = Object.keys(titulo, nombre, descripción, comando).map((v, index) => ({ title: `${titulo[v]}`,
rows: [{ title: `${nombre[v]} : ${command} ${comando[v]}`, description: `${1 + index}. ${descripción[v]}`, rowId: usedPrefix + command + ' ' + comando[v], }], }))

let name = await conn.getName(m.sender)
/*const listMessage = {
text: `${lenguajeMY.smsConfi10()}`,
footer: `╭━━━✦ *${lenguajeMY.smsConfi1()}* ✦━━━━⬣
┃
┃🌟 ${lenguajeMY.smsConfi2()} *${name}*
┃
${lenguajeMY.smsConfi3()}
${lenguajeMY.smsConfi4()}
┃
${lenguajeMY.smsConfi5()}
${lenguajeMY.smsConfi6()}
${lenguajeMY.smsConfi7()}
${lenguajeMY.smsConfi8()}
${m.isGroup ? `┃` : `┃\n${lenguajeMY.smsConfi9()}`}
╰━━━━━✦ *${vs}* ✦━━━━⬣
${wm}`,
title: null,
buttonText: `⚙️ ${lenguajeMY.smsConfi1()} ⚙️`,
sections }*/

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false

switch (type) {
case 'welcome': case 'bienvenida':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
    
case 'detect': case 'avisos':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
		
case 'antidelete': case 'antieliminar': case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
    
case 'public': case 'publico':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
    
case 'antilink': case 'antienlace':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
    
case 'antilink2': case 'antienlace2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
		
case 'antitiktok': case 'antitk': case 'antitik':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTiktok = isEnable 
break
		
case 'antiyoutube': case 'antiyt':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiYoutube = isEnable 
break
		
case 'antitelegram': case 'antitl': case 'antitele': case 'antitg': case 'antitel':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTelegram = isEnable 
break
		
case 'antifacebook': case 'antifb': case 'antifbook':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiFacebook = isEnable 
break
		
case 'antiinstagram': case 'antinstagram': case 'antiig': case 'antig': case 'antiinsta': case 'antinsta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiInstagram = isEnable 
break
		
case 'antitwitter': case 'antitw': case 'antitwit': case 'antitwter': case 'antitwiter': case 'antiTwr':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTwitter = isEnable 
break
    
case 'modohorny': case 'modocaliente':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
    
case 'stickers':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.stickers = isEnable          
break
    
case 'temporal':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.temporal = isEnable
break
		
case 'autolevelup': case 'autonivel': case 'nivelautomatico':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autolevelup = isEnable          
break
    
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
    
case 'reaction': case 'reaccion': case 'emojis': case 'antiemojis': case 'reacciones': case 'reaciones':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break
		
case 'antitoxic': case 'antitoxicos': case 'antimalos':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antitoxic = isEnable
break
    
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
    
case 'antiver': case 'modover': case 'modoobservar': case 'modobservar': case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiver = isEnable 
break
		
case 'antiinternacional': case 'antinternacional': case 'antinternational': case 'antifake': case 'antifalsos': case 'antivirtuales': case 'antiextranjeros':		
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antifake = isEnable          
break
		
case 'jadibotmd': case 'modojadibot': case 'serbotmd': case 'modoserbot': 
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.jadibotmd = isEnable
break 
    
case 'restrict': case 'restringir':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
    
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
    
case 'autoread': case 'autovisto':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['autoread'] = isEnable  
break
    
case 'anticall': case 'antillamar':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
		
case 'antispam':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.antiSpam = isEnable
break
 
case 'modoadmin': case 'soloadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
   
case 'pconly': case 'privateonly': case 'soloprivados':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
    
case 'gconly': case 'grouponly': case 'sologrupos':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break

case 'antiprivado':
case 'privado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break

case 'antitrabas':
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break

case 'simi':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break

case 'modoia':
case 'chatgpt':
case 'ia':
isAll = true;
if (!isOwner) {
global.dfail('owner', m, conn);
throw false;
}
bot.modoia = isEnable;      
break;      
      
case 'swonly': case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.reply(m.chat, `${lenguajeMY.smsConfi10()}\n\n🌟 ${lenguajeMY.smsConfi2()} *@${toUser}*

${lenguajeMY.smsConfi3()}
${lenguajeMY.smsConfi4()}

${lenguajeMY.smsConfi5()}
${lenguajeMY.smsConfi6()}
${lenguajeMY.smsConfi7()}
${lenguajeMY.smsConfi8()}
${m.isGroup ? `` : `${lenguajeMY.smsConfi9()}`}

┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┅

✓ ${lenguajeMY.smsParaAdmins()} ${m.isGroup ? chat.welcome ? '✅' : '❌' : lenguajeMY.smsNoGg()}
✓ ${lenguajeMY.smsParaAdmins()} ${m.isGroup ? chat.detect ? '✅' : '❌' : lenguajeMY.smsNoGg()}
✓ ${lenguajeMY.smsParaAdYOw()} ${m.isGroup ? chat.autolevelup ? '✅' : '❌' : lenguajeMY.smsNoGg()} 
✓ ${lenguajeMY.smsParaOw()} ${bot.restrict ? '✅' : '❌'}
✓ ${lenguajeMY.smsParaOw()} ${bot.antiCall ? '✅' : '❌'}
✓ ${lenguajeMY.smsParaOw()} ${bot.antiSpam ? '✅' : '❌'}
✓ ${lenguajeMY.smsParaOw()} ${global.opts['self'] ? '❌' : '✅'}
✓ ${lenguajeMY.smsParaAdmins()} ${m.isGroup ? chat.modoadmin ? '✅' : '❌' : lenguajeMY.smsNoGg()} 
✓ ${lenguajeMY.smsParaOw()} ${global.opts['autoread'] ? '✅' : '❌'}
✓ ${lenguajeMY.smsParaOw()} ${bot.temporal ? '✅' : '❌'}
✓ ${lenguajeMY.smsParaAdmins()} ${m.isGroup ? chat.stickers ? '✅' : '❌' : lenguajeMY.smsNoGg()}
✓ ${lenguajeMY.smsParaAdmins()} ${m.isGroup ? chat.autosticker ? '✅' : '❌' : lenguajeMY.smsNoGg()}
✓ ${lenguajeMY.smsParaAdYOw()} ${m.isGroup ? chat.reaction ? '✅' : '❌' : lenguajeMY.smsNoGg()}    
✓ ${lenguajeMY.smsParaAdYOw()} ${m.isGroup ? chat.audios ? '✅' : '❌' : lenguajeMY.smsNoGg()}
✓ ${lenguajeMY.smsParaAdmins()} ${m.isGroup ? chat.antitoxic ? '✅' : '❌' : lenguajeMY.smsNoGg()}
✓ ${lenguajeMY.smsParaAdYOw()} ${m.isGroup ? chat.antiver ? '✅' : '❌' : lenguajeMY.smsNoGg()}
✓ ${lenguajeMY.smsParaAdYOw()} ${m.isGroup ? chat.delete ? '✅' : '❌' : lenguajeMY.smsNoGg()}
✓ ${lenguajeMY.smsParaAdmins()} ${m.isGroup ? chat.antifake ? '✅' : '❌' : lenguajeMY.smsNoGg()}
✓ ${lenguajeMY.smsParaAdmins()} ${m.isGroup ? chat.antiLink ? '✅' : '❌' : lenguajeMY.smsNoGg()}
✓ ${lenguajeMY.smsParaAdmins()} ${m.isGroup ? chat.antiLink2 ? '✅' : '❌' : lenguajeMY.smsNoGg()}
✓ ${lenguajeMY.smsParaAdmins()} ${m.isGroup ? chat.antiYoutube ? '✅' : '❌' : lenguajeMY.smsNoGg()}
✓ ${lenguajeMY.smsParaAdmins()} ${m.isGroup ? chat.antiTelegram ? '✅' : '❌' : lenguajeMY.smsNoGg()}
✓ ${lenguajeMY.smsParaAdmins()} ${m.isGroup ? chat.antiFacebook ? '✅' : '❌' : lenguajeMY.smsNoGg()} 
✓ ${lenguajeMY.smsParaAdmins()} ${m.isGroup ? chat.antiInstagram ? '✅' : '❌' : lenguajeMY.smsNoGg()}
✓ ${lenguajeMY.smsParaAdmins()} ${m.isGroup ? chat.antiTwitter ? '✅' : '❌' : lenguajeMY.smsNoGg()}  
✓ ${lenguajeMY.smsParaOw()} ${global.opts['pconly'] ? '✅' : '❌'}
✓ ${lenguajeMY.smsParaOw()} ${global.opts['gconly'] ? '✅' : '❌'}
✓ ${lenguajeMY.smsParaOw()} ${bot.antiPrivate ? '✅' : '❌'}

${wm}`, fkontak, { mentions: [aa,] })
//conn.sendMessage(m.chat, { text: texto }, { quoted: fkontak })
//conn.sendMessage(m.chat, texto, {quoted: fkontak})	
throw false
}
await conn.reply(m.chat, `${lenguajeMY['smsAvisoRG']()}ღ *_${lenguajeMY['smsMens1']()}_* *|* ${type} 
ღ *_${lenguajeMY['smsMens2']()}_* *|* ${isEnable ? lenguajeMY.smsEncender() : lenguajeMY.smsApagar()} 
ღ *_${lenguajeMY['smsMens3']()}_* *|* ${isAll ? lenguajeMY.smsMens4() : isUser ? '' : lenguajeMY.smsMens5()}`, fkontak, m)}	
/*await conn.sendButton(m.chat, `${lenguajeMY['smsAvisoRG']()}ღ *_${lenguajeMY['smsMens1']()}_* *|* ${type} 
ღ *_${lenguajeMY['smsMens2']()}_* *|* ${isEnable ? lenguajeMY.smsEncender() : lenguajeMY.smsApagar()} 
ღ *_${lenguajeMY['smsMens3']()}_* *|* ${isAll ? lenguajeMY.smsMens4() : isUser ? '' : lenguajeMY.smsMens5()}`, wm, null, [[`${isEnable ? lenguajeMY.smsApagar() : lenguajeMY.smsEncender()}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], [lenguajeMY.smsConMenu(), '.menu']], fkontak, m)}*/

handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
