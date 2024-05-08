var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = creatorimg.getRandom()        
const cat = `

𝑮𝑹𝑨𝑪𝑰𝑨𝑺 𝑨 𝑳𝑶𝑺 𝑪𝑶𝑳𝑨𝑩𝑶𝑹𝑨𝑫𝑶𝑹𝑬𝑺 𝑫𝑬 𝑬𝑺𝑻𝑬 𝑷𝑹𝑶𝒀𝑬𝑪𝑻𝑶 𝑷𝑶𝑹 𝑨𝒀𝑼𝑫𝑨𝑹𝑴𝑬 𝒀 𝑫𝑨𝑹𝑴𝑬 𝑼𝑵𝑨 𝑴𝑨𝑵𝑶 𝑪𝑼𝑨𝑵𝑫𝑶 𝑳𝑨 𝑵𝑬𝑪𝑬𝑺𝑰𝑻𝑬

𝐂𝐎𝐋𝐀𝐁𝐎𝐑𝐀𝐃𝐎𝐑𝐄𝐒:
» 𝖣𝖨𝖤𝖦𝖮
» 𝖠𝖷𝖷
» 𝖨𝖵𝖠𝖭
» 𝖤𝖭𝖣𝖤𝖱 𝖳𝖠𝖫𝖫𝖸𝖢𝖫𝖤𝖱𝖪

𝐂𝐑𝐄𝐀𝐃𝐎𝐑:
» 𝖦𝖫 𝖸𝖳 𝖬𝖷

𝐈𝐍𝐅𝐎:
» 𝖣𝖨𝖤𝖦𝖮
» gitHub.com/


`

await conn.sendFile(m.chat, pp, 'Hola.mp3', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler

/*function handler(m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const data = global.owner.filter(([id, isCreator]) => id && isCreator) 
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), fkontak, { contextInfo: { externalAdReply: { showAdAttribution: true }}})
}

handler.command = ['owner', 'creador']  
//handler.register = true
export default handler*/
