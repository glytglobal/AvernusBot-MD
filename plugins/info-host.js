let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `¡TE PRESENTAMOS!

_¡BIENVENIDO/A A BOXMINE HOST!_

> UN LUGAR ÚNICO Y UN BUEN SERVICIO DE ATENCIÓN PARA LOS USUARIOS, CONTAMOS CON SERVICIOS GRATUITOS Y DE PAGA ADEMÁS DE QUE CONTAMOS CON UN SERVICIO DE ASISTENCIA RÁPIDA Y PERSONALIZADA

*_❑ PAGINA ❑_*
_» https://boxmineworld.com_

*_✰ PAGINA - DASH ✰_*
_» https://dash.boxmineworld.com_
`

await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `⏤͟͟͞͞𝐁𝐎𝐗𝐌𝐈𝐍𝐄 - 𝐖𝐎𝐑𝐋𝐃`,
body: `✿ HOSTING DE LUJO ✿`,
"previewType": "PHOTO",
thumbnailUrl: 'https://telegra.ph/file/767775d7250ae841a9cb6.jpg', 
sourceUrl: 'https://whatsapp.com/channel/0029Va71C1q2UPBOICnxu83r'}}},
{ quoted: m})
}
handler.tags =['info'] 
handler.help = ['infinity', 'host', 'hosting'] 
handler.command = /^(infinity|infinityWa|host|hosting)$/i
export default handler
