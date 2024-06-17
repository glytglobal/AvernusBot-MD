let WAMessageStubType = (await import(global.baileys)).default
export async function before(m, { conn, participants}) {
if (!m.messageStubType || !m.isGroup) return
let usuario = `@${m.sender.split`@`[0]}`
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let users = participants.map(u => conn.decodeJid(u.id))
if (m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `*_${usuario} HA CAMBIADO EL NOMBRE DEL GRUPO A:\n\n*${m.messageStubParameters[0]}*_*`, mentions: [m.sender]/*, mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id)*/ }, { quoted: fkontak }) 
} else if (m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `*_${usuario} HAS CAMBIADO LA FOTO DEL GRUPO_*`, mentions: [m.sender] }, { quoted: fkontak }) 
} else if (m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `*_${usuario} LA NUEVA DESCRIPCION DEL GRUPO ES:\n\n${m.messageStubParameters[0]}_*`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `*_🔒 AHORA *${m.messageStubParameters[0] == 'on' ? 'SOLO ADMINISTRADORES' : 'TODOS'}* PUEDEN EDITAR LA INFORMACION DE ESTE GRUPO_*`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `*_${m.messageStubParameters[0] == 'on' ? '¡ESTE GRUPO ESTA CERRADO! SOLOS LOS ADMINISTRADORES PODRÁN ENVIAR MENSAJES' : '¡ESTE GRUPO ESTA ABIERTO!'}_*`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 29) {
await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} ¡BIENVENIDO/A! AHORA ERES PARTE DE LA ADMINISTRACION\n\nACCION REALIZADA POR: ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`]/*, mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id)*/ }, { quoted: fkontak })
} else if (m.messageStubType == 30) {
await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} ¡NOS VEMOS! AHORA YA DEJAS DE SER PARTE DE LA ADMINISTRACION\n\nACCION REALIZADA POR: ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`]/*, mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id)*/ }, { quoted: fkontak })
} else if (m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `*_${usuario} HAS CAMBIADO LAS DURACIONES DE LOS MENSAJES TEMPORALES: *@${m.messageStubParameters[0]}*_*`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `*_${usuario} DESACTIVASTE LA DURACIÓN DE LOS MENSAJES PARA ESTE CHAT_*`, mentions: [m.sender] }, { quoted: fkontak })
} else {
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}
