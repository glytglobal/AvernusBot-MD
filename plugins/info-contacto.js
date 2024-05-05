// CÓDIGO CREADO GRACIAS A https://github.com/Azami19 & https://github.com/GataNina-Li

import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
try{
let contact, number, ofc, nombre, description, correo, lugar, enlace, biog
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let biografiaBot = await conn.fetchStatus(conn.user.jid.split('@')[0] + '@s.whatsapp.net').catch(_ => 'undefined')
let bioBot = biografiaBot.status?.toString() || `${desc2 == '' ? lenguajeMY.smsContacto1() : desc2}`

let contacts = global.official.filter(c => c[2] === 1)
let lista = []
for (let i = 0; i < contacts.length; i++) {
contact = contacts[i]
number = String(contact[0])
ofc = await conn.getName(number + '@s.whatsapp.net') //String(contact[1])
let biografia = await conn.fetchStatus(number +'@s.whatsapp.net').catch(_ => 'undefined')
let bio = biografia.status?.toString() || `${desc2 == '' ? lenguajeMY.smsContacto2() : desc2}`
  
nombre = official[0][0] == String(contact[0]) ? official[0][1] : official[1][0] == String(contact[0]) ? official[1][1] : official[2][0] == String(contact[0]) ? official[2][1] : official[3][0] == String(contact[0]) ? official[3][1] : official[4][0] == String(contact[0]) ? official[4][1] : lenguajeMY.smsContacto3() 
description = official[0][0] == String(contact[0]) ? '𝐒𝐎𝐋𝐎 𝐓𝐄𝐌𝐀𝐒 𝐃𝐄 𝐀𝐕𝐄𝐑𝐍𝐔𝐒' : official[1][0] == String(contact[0]) ? lenguajeMY.smsContacto4() : official[2][0] == String(contact[0]) ? lenguajeMY.smsContacto4() : official[3][0] == String(contact[0]) ? lenguajeMY.smsContacto4() : desc === '' ? lenguajeMY.smsContacto5() : desc
correo = official[0][0] == String(contact[0]) ? 'avernusglobalgmail.com' : official[1][0] == String(contact[0]) ? 'avernusglobal@gmail.com' : official[2][0] == String(contact[0]) ? lenguajeMY.smsContacto6() : mail === '' ? lenguajeMY.smsContacto6() : mail
lugar = official[0][0] == String(contact[0]) ? '' : official[1][0] == String(contact[0]) ? '𝐒𝐈𝐍 𝐏𝐀𝐈𝐒' : official[2][0] == String(contact[0]) ? '𝐒𝐈𝐍 𝐏𝐀𝐈𝐒' : official[3][0] == String(contact[0]) ? '𝐒𝐈𝐍 𝐏𝐀𝐈𝐒' : country === '' ? '🇨🇴 𝐂𝐎𝐋𝐎𝐌𝐁𝐈𝐀' : country
enlace = official[0][0] == String(contact[0]) ? 'https://github.com/glytglobal' : official[1][0] == String(contact[0]) ? 'https://chat.whatsapp.com/BlfrM8qGlef5UUMkeLp21T' : official[2][0] == String(contact[0]) ? 'https://chat.whatsapp.com/BlfrM8qGlef5UUMkeLp21T' : official[3][0] == String(contact[0]) ? 'https://chat.whatsapp.com/EBQOkLPgftc8mPR4KTml8S' : md 
   
lista.push([number, ofc, nombre, description, official[3][0] == String(contact[0]) ? null : correo, lugar, enlace, bio, official[1][0] == String(contact[0]) ? 'https://chat.whatsapp.com/BlfrM8qGlef5UUMkeLp21T' : null])
lista.push([conn.user.jid.split('@')[0], await conn.getName(conn.user.jid), packname, lenguajeMY.smsContacto8(), mail === '' ? 'avernusglobal@gmail.com' : mail, lenguajeMY.smsContacto7(), md, yt, ig, fb, paypal, nna])
await conn.sendContactArray(m.chat, lista, null, { quoted: fkontak })
  
} catch (e) {
await m.reply(lenguajeMY['smsMalError3']() + '\n*' + lenguajeMY.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeMY.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeMY.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeMY['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}} 
handler.command = /^(contacto|contacts)$/i //['contacto', 'contact']  

export default handler
