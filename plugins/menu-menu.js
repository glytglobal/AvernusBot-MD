import fs from 'fs'  
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
// let pp = unity.getRandom()
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

const lugarFecha = moment().tz('America/Lima')
const formatoFecha = {
weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}
lugarFecha.locale('es', formatoFecha)
const horarioFecha = lugarFecha.format('dddd, DD [de] MMMM [del] YYYY || HH:mm A').replace(/^\w/, (c) => c.toUpperCase())
const fkontak = {'key': {'participants': '0@s.whatsapp.net', 'fromMe': false, 'id': '3B64558B07848BD81108C1D14712018E'}, 'message': {'locationMessage': {'name': `彡 𝐌𝐨𝐝𝐞𝐫𝐦𝐞 𝐁𝐲 𝐆𝐋 𝐘𝐓 𝐌𝐗`, `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'}
 
let menu = `
⏤͟͟͞͞𝐀𝐕𝐄𝐑𝐍𝐔𝐒 - 𝐁𝐎𝐓

┃彡 *𝑹𝑬𝑮𝑰𝑺𝑻𝑹𝑨𝑫𝑶𝑺* » ${rtotalreg}/${totalreg}
┃ _${lenguajeMY['smsUptime']()}_ » _${uptime}_ 
┃彡 _${lenguajeMY['smsVersion']()}_ » _${vs}_
┃彡 _${lenguajeMY['smsMode']()}_ » _${global.opts['self'] ? `${lenguajeMY['smsModePrivate']().charAt(0).toUpperCase() + lenguajeMY['smsModePrivate']().slice(1).toLowerCase()}` : `${lenguajeMY['smsModePublic']().charAt(0).toUpperCase() + lenguajeMY['smsModePublic']().slice(1).toLowerCase()}`}_
┃彡 _${lenguajeMY['smsBanChats']()}_ » _${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_

彡 𝑹𝑬𝑮𝑰𝑺𝑻𝑹𝑶 » ${user.registered === true ? `${user.registroC === true ? '_𝖢𝖮𝖬𝖯𝖫𝖤𝖳𝖮_' : '_𝖱𝖠𝖯𝖨𝖣𝖮_'}` : '_✕ 𝖲𝖨𝖭 𝖱𝖤𝖦𝖨𝖲𝖳𝖱𝖮_'}
彡 𝑬𝑺𝑻𝑨𝑫𝑶 » ${typeof user.miestado !== 'string' ? '_X ' + usedPrefix + 'MIESTADO_' : '_ME SIENTO' + user.miestado + '_'}
彡 𝑹𝑬𝑮𝑰𝑺𝑻𝑹𝑨𝑫𝑶 » ${user.registered === true ? '✓' : '_X ' + usedPrefix + 'VERIFICAR_'}
彡 ${lenguajeMY['smsBotonM7']().charAt(0).toUpperCase() + lenguajeMY['smsBotonM7']().slice(1).toLowerCase()} » ${user.premiumTime > 0 ? '✓' : '_X ' + usedPrefix + 'PASE PREMIUM_'}
彡 ${lenguajeMY['smsBotonM5']().charAt(0).toUpperCase() + lenguajeMY['smsBotonM5']().slice(1).toLowerCase()} » ${role}
彡 ${lenguajeMY['smsBotonM6']().charAt(0).toUpperCase() + lenguajeMY['smsBotonM6']().slice(1).toLowerCase()} » ${emoji} || ${user.exp - min}/${xp}
彡 ${lenguajeMY['smsPareja']()} ${pareja ? `\n*»_ ${name} 💕 ${conn.getName(pareja)}` : `» ღ *${lenguajeMY['smsResultPareja']()}*`}
彡 𝑷𝑨𝑺𝑨𝑻𝑰𝑬𝑴𝑷𝑶`𝑺 ⧎ » ${user.pasatiempo === 0 ? 'SIN REGISTRO' : user.pasatiempo}

✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧
✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧
✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧

┏━━━━ 𝐓𝐔 𝐍𝐈𝐕𝐄𝐋 ━━━━◉
┃꧁TU NIVEL CON
┃MYLINGBOT-MD
┃
┃ _EXPERIENCIA ➟_ ${exp} ×͜×
┃ _DIAMANTES ➟_ ${limit} ⨻
┃ _MYLINGCOINS ➟_ ${money} ⫹⫺
┃ _TOKENS ➟_ ${joincount} ⧎
┗━━━━━━━━━━━━━◉

┏━━━ 𝐈𝐍𝐅𝐎 - 𝐌𝐘 ━━━━⪩
┃
┃❑ _${usedPrefix}cuentasmyling | cuentasmy_
┃❏ _${usedPrefix}gruposmy | grupos_
┃❏ _${usedPrefix}donar | donate_
┃❏ _${usedPrefix}listagrupos | grouplist_
┃❏ _${usedPrefix}estado | heymy | status_
┃❏ _${usedPrefix}infomyling | infobot_
┃❏ _${usedPrefix}instalarbot | installbot_
┃❏ _${usedPrefix}creador | owner_      
┃❏ _${usedPrefix}velocidad | ping_      
┃❏ _términos y condiciones_
┃❏ _Bot_ 
┗━━━━━━━━━━━━⪩

┏━━━ 𝐒𝐔𝐁 - 𝐁𝐎𝐓 ━━━≫
┃
┃❑ _${usedPrefix}serbot | jadibot_
┃❑ _${usedPrefix}serbot --code | jadicode_
┃❑ _${usedPrefix}infosubbot | infosub_
┃❑ _${usedPrefix}bots | listjadibots_
┃❑ _${usedPrefix}detener | stop_
┗━━━━━━━━━━━━≫

┏━━ 𝐑𝐄𝐏𝐎𝐑𝐓𝐄𝐒 ━━━━⪼
┃ _REPORTE UN COMANDO,_
┃ _EN CASO DE QUE FALLE_
┃ _TENGA ERRORES._
┃
┃❑ _${usedPrefix}reporte *texto*_
┗━━━━━━━━━━━━━⪼

┏━━━━ PREMIUM ━━━━𖡛
┃✨ _CONVIERTE EN 
┃USUARIO(A) PREMIUM_
┃
┃❏ _${usedPrefix}listapremium | listprem_
┃❏ _${usedPrefix}pase premium_
┃❏ _${usedPrefix}pass premium_
┗━━━━━━━━━━━━━𖡛

┏━━━━ JUEGOS ━━━━𖤐
┃🌟 _DIVIERTETE CON JUEGOS EN GRUPOS/PRIVADO_
┃
┃⧎ _${usedPrefix}trivia_
┃⧎ _${usedPrefix}acertijo_
┃⧎ _${usedPrefix}palabra | ordenar_
┃⧎ _${usedPrefix}pelicula | adv_
┃⧎ _${usedPrefix}mates | matemáticas | math_
┃⧎ _${usedPrefix}ppt *piedra : papel : tijera*_
┃⧎ _${usedPrefix}lanzar *cara* | *cruz*_
┃⧎ _${usedPrefix}tictactoe | ttt *sala*_
┃⧎ _${usedPrefix}deltictactoe | delttt_
┃⧎ _${usedPrefix}topgays_
┃⧎ _${usedPrefix}topotakus_
┃⧎ _${usedPrefix}toppajer@s_
┃⧎ _${usedPrefix}topput@s_ 
┃⧎ _${usedPrefix}topintegrantes | topintegrante_
┃⧎ _${usedPrefix}toplagrasa | topgrasa_
┃⧎ _${usedPrefix}toppanafrescos | toppanafresco_
┃⧎ _${usedPrefix}topshiposters | topshipost_
┃⧎ _${usedPrefix}toplindos | toplind@s_ 
┃⧎ _${usedPrefix}topfamosos | topfamos@s_
┃⧎ _${usedPrefix}topparejas | top5parejas_ 
┃⧎ _${usedPrefix}gay | gay *@tag*_ 
┃⧎ _${usedPrefix}gay2 *nombre : @tag*_ 
┃⧎ _${usedPrefix}lesbiana *nombre : @tag*_ 
┃⧎ _${usedPrefix}manca *nombre : @tag*_
┃⧎ _${usedPrefix}manco *nombre : @tag*_
┃⧎ _${usedPrefix}pajero *nombre : @tag*_
┃⧎ _${usedPrefix}pajera *nombre : @tag*_
┃⧎ _${usedPrefix}puto *nombre : @tag*_
┃⧎ _${usedPrefix}puta *nombre : @tag*_
┃⧎ _${usedPrefix}rata *nombre : @tag*_
┃⧎ _${usedPrefix}love *nombre : @tag*_
┃⧎ _${usedPrefix}ship | shipear *nombre1 nombre2*_
┃⧎ _${usedPrefix}doxear *nombre : @tag*_
┃⧎ _${usedPrefix}doxxeame_
┃⧎ _${usedPrefix}apostar | slot *cantidad*_
┃⧎ _${usedPrefix}pregunta *texto*_
┃⧎ _${usedPrefix}formarpareja_ 
┃⧎ _${usedPrefix}dado_
┃⧎ _${usedPrefix}verdad_
┃⧎ _${usedPrefix}reto_
┃⧎ _${usedPrefix}juegos_
┗━━━━━━━━━━━━━𖤐

┏━━━━ IA - MYLING ━━━✵
┃⭐ *UTILIZA INTELIGENCIA ARTIFICIAL*
┃ 
┃𖤝 _${usedPrefix}simi | ia *texto*_
┃𖤝 _${usedPrefix}alexa | siri | cortana *texto*_ 
┃𖤝 _${usedPrefix}simsimi | bixby *texto*_
┗━━━━━━━━━━━━━✵

┏━━━━ ON - OFF  ━━━━𖡛
┃💫 _PUEDES MEJORAR TUS GRUPOS CON MYLINGBOT-MD_
┃
┃𖥳 _${usedPrefix}on *:* off *bienvenida | welcome*_
┃𖥳 _${usedPrefix}on *:* off *avisos | detect*_
┃𖥳 _${usedPrefix}on *:* off *autonivel | autolevelup*_
┃𖥳 _${usedPrefix}on *:* off *restringir | restrict*_
┃𖥳 _${usedPrefix}on *:* off *antillamar | anticall*_
┃𖥳 _${usedPrefix}on *:* off *publico | public*_
┃𖥳 _${usedPrefix}on *:* off *autovisto | autoread*_
┃𖥳 _${usedPrefix}on *:* off *temporal*_
┃𖥳 _${usedPrefix}on *:* off *stickers*_
┃𖥳 _${usedPrefix}on *:* off *autosticker*_
┃𖥳 _${usedPrefix}on *:* off *reacciones | reaction*_
┃𖥳 _${usedPrefix}on *:* off *audios*_
┃𖥳 _${usedPrefix}on *:* off *modocaliente | modohorny*_
┃𖥳 _${usedPrefix}on *:* off *antitoxicos | antitoxic*_
┃𖥳 _${usedPrefix}on *:* off *antiver | antiviewonce*_ 
┃𖥳 _${usedPrefix}on *:* off *antieliminar | antidelete*_ 
┃𖥳 _${usedPrefix}on *:* off *antinternacional | antifake*_
┃𖥳 _${usedPrefix}on *:* off *antienlace | antilink*_
┃𖥳 _${usedPrefix}on *:* off *antienlace2 | antilink2*_
┃𖥳 _${usedPrefix}on *:* off *antitiktok | antitk*_
┃𖥳 _${usedPrefix}on *:* off *antiyoutube | antiyt*_
┃𖥳 _${usedPrefix}on *:* off *antitelegram | antitel*_
┃𖥳 _${usedPrefix}on *:* off *antifacebook | antifb*_
┃𖥳 _${usedPrefix}on *:* off *antinstagram | antig*_
┃𖥳 _${usedPrefix}on *:* off *antitwitter | antitw*_
┃𖥳 _${usedPrefix}on *:* off *soloprivados | pconly*_
┃𖥳 _${usedPrefix}on *:* off *sologrupos | gconly*_
┗━━━━━━━━━━━𖡛

┏━━━ DESCARGAS ━━━⨳
┃🌟 _DESCARGUE O BUSQUE TODO LO QUE QUIERA CON MYLINGBOT-MD_
┃
┃◮ _${usedPrefix}imagen | image *texto*_
┃◮ _${usedPrefix}pinterest | dlpinterest *texto*_
┃◮ _${usedPrefix}wallpaper|wp *texto*_
┃◮ _${usedPrefix}play | play2 *texto o link*_
┃◮ _${usedPrefix}play.1 *texto o link*_
┃◮ _${usedPrefix}play.2 *texto o link*_ 
┃◮ _${usedPrefix}ytmp3 | yta *link*_ 
┃◮ _${usedPrefix}ytmp4 | ytv *link*_
┃◮ _${usedPrefix}pdocaudio | ytadoc *link*_
┃◮ _${usedPrefix}pdocvieo | ytvdoc *link*_
┃◮ _${usedPrefix}tw |twdl | twitter *link*_
┃◮ _${usedPrefix}facebook | fb *link*_
┃◮ _${usedPrefix}instagram *link video o imagen*_
┃◮ _${usedPrefix}verig | igstalk *usuario(a)*_
┃◮ _${usedPrefix}ighistoria | igstory *usuario(a)*_
┃◮ _${usedPrefix}tiktok *link*_
┃◮ _${usedPrefix}tiktokimagen | ttimagen *link*_
┃◮ _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
┃◮ _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
┃◮ _${usedPrefix}mediafire | dlmediafire *link*_
┃◮ _${usedPrefix}clonarepo | gitclone *link*_
┃◮ _${usedPrefix}clima *país ciudad*_
┃◮ _${usedPrefix}consejo_
┃◮ _${usedPrefix}morse codificar *texto*_
┃◮ _${usedPrefix}morse decodificar *morse*_
┃◮ _${usedPrefix}fraseromantica_
┃◮ _${usedPrefix}historia_
┗━━━━━━━━━━━━━⨳

┏━━ CHAT ANONIMO ━━━𖢖
┃ _PODRAS ENVIAR SMS DE_
┃ _FORMA_
┃ _PRIVADA A UNA ANONIMA_
┃ _CON MYLING_
┃
┃𖤌 _${usedPrefix}chatanonimo | anonimochat_
┃𖤌 _${usedPrefix}anonimoch_
┃𖤌 _${usedPrefix}start_
┃𖤌 _${usedPrefix}next_
┃𖤌 _${usedPrefix}leave_
┗━━━━━━━━━━━━━𖢖
 
┏━━━━ GRUPOS ━━━━❍
┃💧 _CONFIGURACION EN GRUPOS CON MYLINGBOT-MD_
┃❍ _${usedPrefix}add *numero*_
┃❍ _${usedPrefix}sacar | ban | kick  *@tag*_
┃❍ _${usedPrefix}grupo *abrir : cerrar*_
┃❍ _${usedPrefix}group *open : close*_
┃❍ _${usedPrefix}daradmin | promote *@tag*_
┃❍ _${usedPrefix}quitar | demote *@tag*_
┃❍ _${usedPrefix}banchat_
┃❍ _${usedPrefix}unbanchat_
┃❍ _${usedPrefix}banuser *@tag*_
┃❍ _${usedPrefix}unbanuser *@tag*_
┃❍ _${usedPrefix}admins *texto*_
┃❍ _${usedPrefix}invocar *texto*_ 
┃❍ _${usedPrefix}tagall *texto*_
┃❍ _${usedPrefix}hidetag *texto*_
┃❍ _${usedPrefix}infogrupo | infogroup_
┃❍ _${usedPrefix}grupotiempo | grouptime *Cantidad*_ 
┃❍ _${usedPrefix}advertencia *@tag*_ 
┃❍ _${usedPrefix}deladvertencia *@tag*_
┃❍ _${usedPrefix}delwarn *@tag*_
┃❍ _${usedPrefix}crearvoto | startvoto *texto*_ 
┃❍ _${usedPrefix}sivotar | upvote_
┃❍ _${usedPrefix}novotar | devote_
┃❍ _${usedPrefix}vervotos | cekvoto_
┃❍ _${usedPrefix}delvoto | deletevoto_
┃❍ _${usedPrefix}enlace | link_
┃❍ _${usedPrefix}newnombre *texto*_
┃❍ _${usedPrefix}newdesc *texto*_   
┃❍ _${usedPrefix}setwelcome *texto*_   
┃❍ _${usedPrefix}setbye | despedida *texto*_  
┃❍ _${usedPrefix}nuevoenlace | resetlink_
┃❍ _${usedPrefix}on_
┃❍ _${usedPrefix}off_   
┗━━━━━━━━━━━❍
 
┏━━ PAREJAS (INFIELES) ━━𖡍
┃🌟 _ENCUENTRA TU PAREJA 💕_
┃
┃𖡨 _${usedPrefix}listaparejas | listship_
┃𖡨 _${usedPrefix}mipareja | mylove_
┃𖡨 _${usedPrefix}pareja | couple *@tag*_
┃𖡨 _${usedPrefix}aceptar | accept *@tag*_
┃𖡨 _${usedPrefix}rechazar | decline *@tag*_
┃𖡨 _${usedPrefix}terminar | finish *@tag*_
┗━━━━━━━━━━━━━━𖡍
 
┏━━ VOTACIONES ━━━◈
┃⭐ _REALIZA ENCUESTAS/VOTACIONES EN TUS GRUPOS_
┃
┃✰ _${usedPrefix}crearvoto | startvoto *texto*_ 
┃✰ _${usedPrefix}sivotar | upvote_ 
┃✰ _${usedPrefix}novotar | devote_ 
┃✰ _${usedPrefix}vervotos | cekvoto_
┃✰ _${usedPrefix}delvoto | deletevoto_ 
┗━━━━━━━━━━━━━◈
 
┏━━ MENU +18 ━━━━━━━▤
┃◐ _${usedPrefix}hornymenu_
┗━━━━━━━━━━━━━━━▤
 
┏━━━ CONVERTIDORES ━━━𖣥
┃
┃✯ _${usedPrefix}toimg | img | jpg *sticker*_ 
┃✯ _${usedPrefix}toanime | jadianime *foto*_
┃✯ _${usedPrefix}tomp3 | mp3 *video o nota de voz*_
┃✯ _${usedPrefix}tovn | vn *video o audio*_
┃✯ _${usedPrefix}tovideo *audio*_
┃✯ _${usedPrefix}tourl *video, imagen*_
┃✯ _${usedPrefix}toenlace  *video, imagen o audio*_
┃✯ _${usedPrefix}tts es *texto*_
┃✯ _${usedPrefix}logos *efecto texto*_
┃✯ _${usedPrefix}menulogos2_
┗━━━━━━━━━━━━━━𖣥

┏━━ EFECTOS ━━━⨷
┃
┃⊛ _${usedPrefix}simpcard *@tag*_
┃⊛ _${usedPrefix}hornycard *@tag*_
┃⊛ _${usedPrefix}lolice *@tag*_
┃⊛ _${usedPrefix}ytcomment *texto*_
┃⊛ _${usedPrefix}itssostupid_
┃⊛ _${usedPrefix}pixelar_
┃⊛ _${usedPrefix}blur_
┗━━━━━━━━━━━⨷

┏━━━ IMAGENES - SFG ━━━✿
┃_MIRA IMAGENES DE TU ANIME O IDOLO(A) FAVORITA_
┃
┃❖ _${usedPrefix}chica_ 
┃❖ _${usedPrefix}chico_
┃❖ _${usedPrefix}cristianoronaldo_
┃❖ _${usedPrefix}messi_
┃❖ _${usedPrefix}meme_
┃❖ _${usedPrefix}meme2_
┃❖ _${usedPrefix}itzy_
┃❖ _${usedPrefix}blackpink_
┃❖ _${usedPrefix}kpop *blackpink : exo : bts*_
┃❖ _${usedPrefix}lolivid_
┃❖ _${usedPrefix}loli_
┃❖ _${usedPrefix}navidad_
┃❖ _${usedPrefix}ppcouple_
┃❖ _${usedPrefix}neko_
┃❖ _${usedPrefix}waifu_
┃❖ _${usedPrefix}akira_
┃❖ _${usedPrefix}akiyama_
┃❖ _${usedPrefix}anna_
┃❖ _${usedPrefix}asuna_
┃❖ _${usedPrefix}ayuzawa_
┃❖ _${usedPrefix}boruto_
┃❖ _${usedPrefix}chiho_
┃❖ _${usedPrefix}chitoge_
┃❖ _${usedPrefix}deidara_
┃❖ _${usedPrefix}erza_
┃❖ _${usedPrefix}elaina_
┃❖ _${usedPrefix}eba_
┃❖ _${usedPrefix}emilia_
┃❖ _${usedPrefix}hestia_
┃❖ _${usedPrefix}hinata_
┃❖ _${usedPrefix}inori_
┃❖ _${usedPrefix}isuzu_
┃❖ _${usedPrefix}itachi_
┃❖ _${usedPrefix}itori_
┃❖ _${usedPrefix}kaga_
┃❖ _${usedPrefix}kagura_
┃❖ _${usedPrefix}kaori_
┃❖ _${usedPrefix}keneki_
┃❖ _${usedPrefix}kotori_
┃❖ _${usedPrefix}kurumi_
┃❖ _${usedPrefix}madara_
┃❖ _${usedPrefix}mikasa_
┃❖ _${usedPrefix}miku_
┃❖ _${usedPrefix}minato_
┃❖ _${usedPrefix}naruto_
┃❖ _${usedPrefix}nezuko_
┃❖ _${usedPrefix}sagiri_
┃❖ _${usedPrefix}sasuke_
┃❖ _${usedPrefix}sakura_
┃❖ _${usedPrefix}cosplay_
┗━━━━━━━━━━━━✿

┏━━ MODIFICAR - AUDIOS ━━◎
┃
┃✧ _${usedPrefix}bass_
┃✧ _${usedPrefix}blown_
┃✧ _${usedPrefix}deep_
┃✧ _${usedPrefix}earrape_
┃✧ _${usedPrefix}fat_
┃✧ _${usedPrefix}fast_
┃✧ _${usedPrefix}nightcore_
┃✧ _${usedPrefix}reverse_
┃✧ _${usedPrefix}robot_
┃✧ _${usedPrefix}slow_
┃✧ _${usedPrefix}smooth_
┃✧ _${usedPrefix}tupai_
┗━━━━━━━━━━◎

┏━━ BUSQUEDAS ━━▣
┃
┃𖤛 _${usedPrefix}animeinfo *texto*_
┃𖤛 _${usedPrefix}mangainfo *texto*_
┃𖤛 _${usedPrefix}google *texto*_
┃𖤛 _${usedPrefix}letra | lirik *texto*_
┃𖤛 _${usedPrefix}ytsearch | yts *texto*_
┃𖤛 _${usedPrefix}wiki | wikipedia *texto*_
┗━━━━━━━━━▣

┏━━━ AUDIOS ━━━━━❖
┃✠ _SOLICITE EL MENU DE AUDIOS DE MYLINGBOT-MD_
┃✠ _USANDO EL COMANDO:_
┃✠ _${usedPrefix}audios_
┗━━━━━━━━━━━━❖

┏━━ HERRAMIENTAS ━━𖣨
┃
┃◭ _${usedPrefix}afk *motivo*_
┃◭ _${usedPrefix}acortar *url*_
┃◭ _${usedPrefix}calc *operacion math*_
┃◭ _${usedPrefix}del *respondre a mensaje del Bot*_
┃◭ _${usedPrefix}qrcode *texto*_
┃◭ _${usedPrefix}readmore *texto1|texto2*_
┃◭ _${usedPrefix}spamwa *numero|texto|cantidad*_
┃◭ _${usedPrefix}styletext *texto*_
┃◭ _${usedPrefix}traducir *texto*_
┃◭ _${usedPrefix}morse codificar *texto*_
┃◭ _${usedPrefix}morse decodificar *morse*_
┃◭ _${usedPrefix}encuesta | poll *Motivo*_
┃◭ _${usedPrefix}horario_
┗━━━━━━━━━━━━𖣨

┏━━ RPG - NIVEL ━━━𖦜
┃ _SUBE DE NIVEL Y OBTEN RECOMPENSAS_
┃
┃◐ _${usedPrefix}botemporal *enlace* *cantidad*_
┃◐ _${usedPrefix}addbot *enlace* *cantidad*_
┃◐ _${usedPrefix}pase premium_
┃◐ _${usedPrefix}pass premium_
┃◐ _${usedPrefix}listapremium | listprem_
┃◐ _${usedPrefix}transfer *tipo cantidad @tag*_
┃◐ _${usedPrefix}dar *tipo cantidad @tag*_
┃◐ _${usedPrefix}enviar *tipo cantidad @tag*_
┃◐ _${usedPrefix}balance_
┃◐ _${usedPrefix}cartera | wallet_ 
┃◐ _${usedPrefix}experiencia | exp_
┃◐ _${usedPrefix}top | lb | leaderboard_
┃◐ _${usedPrefix}nivel | level | lvl_
┃◐ _${usedPrefix}rol | rango_
┃◐ _${usedPrefix}inventario | inventory_ 
┃◐ _${usedPrefix}aventura | adventure_ 
┃◐ _${usedPrefix}caza | cazar | hunt_
┃◐ _${usedPrefix}pescar | fishing_
┃◐ _${usedPrefix}animales_ 
┃◐ _${usedPrefix}alimentos_
┃◐ _${usedPrefix}curar | heal_
┃◐ _${usedPrefix}buy_
┃◐ _${usedPrefix}sell_
┃◐ _${usedPrefix}verificar | registrar_
┃◐ _${usedPrefix}perfil | profile_
┃◐ _${usedPrefix}myns_
┃◐ _${usedPrefix}unreg *numero de serie*_
┃◐ _${usedPrefix}minardiamantes | minargemas_
┃◐ _${usedPrefix}minargatacoins | minarcoins_
┃◐ _${usedPrefix}minarexperiencia | minarexp_
┃◐ _${usedPrefix}minar *:* minar2 *:* minar3_
┃◐ _${usedPrefix}reclamar | regalo | claim_
┃◐ _${usedPrefix}cadahora | hourly_
┃◐ _${usedPrefix}cadasemana | semanal | weekly_
┃◐ _${usedPrefix}cadames | mes | monthly_
┃◐ _${usedPrefix}cofre | abrircofre | coffer_
┃◐ _${usedPrefix}trabajar | work_
┗━━━━━━━━━━━━◐

┏━ TOP - LISTA GLOBAL ━━𖣔
┃╭─────────❍
┃│ 𖣐 _${usedPrefix}top | lb | leaderboard_
┃╰─────────❍
┗━━━━━━━━━━━━━𖣔

┏━━━ STICKER ━━━𖠇
┃
┃𖤓 _${usedPrefix}sticker | s *imagen o video*_
┃𖤓 _${usedPrefix}sticker | s *url de tipo jpg*_
┃𖤓 _${usedPrefix}emojimix *卐+😐*_
┃𖤓 _${usedPrefix}scircle | círculo *imagen*_
┃𖤓 _${usedPrefix}semoji | emoji *tipo emoji*_
┃𖤓 _${usedPrefix}attp *texto*_
┃𖤓 _${usedPrefix}attp2 *texto*_
┃𖤓 _${usedPrefix}ttp *texto*_
┃𖤓 _${usedPrefix}ttp2 *texto*_
┃𖤓 _${usedPrefix}ttp3 *texto*_
┃𖤓 _${usedPrefix}ttp4 *texto*_
┃𖤓 _${usedPrefix}ttp5 *texto*_
┃𖤓 _${usedPrefix}ttp6 *texto*_
┃𖤓 _${usedPrefix}dado_
┃𖤓 _${usedPrefix}stickermarker *efecto : responder a imagen*_ 
┃𖤓 _${usedPrefix}stickerfilter *efecto : responder a imagen*_ 
┃𖤓  _${usedPrefix}cs *:* cs2_
┗━━━━━━━━━━𖠇

┏━━ STICKER - EDITOR ━━𖣊
┃ _¡EDITA LOS STICKERS QUE QUIERAS A TU GUSTO!_
┃
┃𖢄 _${usedPrefix}wm *packname|author*_
┃𖢄 _${usedPrefix}wm *texto1|texto2*_
┗━━━━━━━━━━━━𖣊

┏━━ ACCIONES - STICKERS ━━━⫸
┃_JUEGOS CON STICKERS 👻_
┃
┃𖢗 _${usedPrefix}palmaditas | pat *@tag*_
┃𖢗 _${usedPrefix}bofetada | slap *@tag*_
┃𖢗 _${usedPrefix}golpear *@tag*_
┃𖢗 _${usedPrefix}besar | kiss *@tag*_ 
┃𖢗 _${usedPrefix}alimentar | food *@tag*_
┗━━━━━━━━━━━━⫸

┏━━━ CEADOR - OWNER ━━━━🜲
┃ _COMANDOS QUE SOLO LOS PROPIETARIOS/OWNERS PUEDEN USAR.
┃
┃❀ _${usedPrefix}join *enlace*_
┃❀ _${usedPrefix}unete *enlace*_
┃❀ _${usedPrefix}dardiamantes *cantidad*_
┃❀ _${usedPrefix}darxp *cantidad*_
┃❀ _${usedPrefix}darkatacoins *cantidad*_ 
┃❀ _${usedPrefix}addprem | userpremium *@tag* *cantidad*_
┃❀ _${usedPrefix}addprem2 | userpremium2 *@tag* *cantidad*_
┃❀ _${usedPrefix}addprem3 | userpremium3 *@tag* *cantidad*_
┃❀ _${usedPrefix}addprem4 | userpremium4 *@tag* *cantidad*_
┃❀ _${usedPrefix}idioma | language_
┃❀ _${usedPrefix}cajafuerte_
┃❀ _${usedPrefix}comunicar | broadcastall | bc *texto*_
┃❀ _${usedPrefix}broadcastchats | bcc *texto*_
┃❀ _${usedPrefix}comunicarpv *texto*_
┃❀ _${usedPrefix}broadcastgc *texto*_ 
┃❀ _${usedPrefix}comunicargrupos *texto*_
┃❀ _${usedPrefix}borrartmp | cleartmp_
┃❀ _${usedPrefix}delexp *@tag*_
┃❀ _${usedPrefix}delkatacoins *@tag*_
┃❀ _${usedPrefix}deldiamantes *@tag*_
┃❀ _${usedPrefix}reiniciar | restart_
┃❀ _${usedPrefix}ctualizar | update_
┃❀ _${usedPrefix}addprem | +prem *@tag*_
┃❀ _${usedPrefix}delprem | -prem *@tag*_
┃❀ _${usedPrefix}listapremium | listprem_
┃❀ _${usedPrefix}añadirdiamantes *@tag cantidad*_
┃❀ _${usedPrefix}añadirxp *@tag cantidad*_
┃❀ _${usedPrefix}añadirmylingcoins *@tag cantidad*_
┗━━━━━━━━━━━━🜲`.trim()

const vi = ['https://telegra.ph/file/45c66b22615c030476cc0.jpg', 'https://telegra.ph/file/e43024f4f2d970e3c7cbf.png', 'https://telegra.ph/file/40689ea4040746fd3d9d9.jpg']
await conn.sendMessage(m.chat, { image: { url: vi.getRandom() }, imgPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak })
} catch (e) {
await m.reply(lenguajeMY['smsMalError3']() + '\n*' + lenguajeMY.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeMY.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeMY.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeMY['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|info|comandos|menubot|ayuda|commands|commandos|menucompleto|allmenu|menumyling|menumy|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
