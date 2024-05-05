var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = creatorimg.getRandom()        
const cat = `
彡 ⪻ ⏤͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞𝐌𝐲𝐥𝐢𝐧𝐠𝐁𝐨𝐭-𝐌𝐃 ⪼ 彡


 ◆ ⃟ ⃟ ░▒▓  ҈ ҈ ҈ ҈ ⃟ ♧ ⃟  ҈ ҈ ҈ ҈▓▒░ ⃟ ⃟ ◆ 
--- 𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝚆𝙸𝙻𝚂𝙾𝙽  𝙾𝙵𝙲---
◆ ⃟ ⃟ ░▒▓  ҈ ҈ ҈ ҈ ⃟ ♧ ⃟  ҈ ҈ ҈ ҈▓▒░ ⃟ ⃟

    ★彡𝑰𝑵𝑭𝑶 𝑪𝑹𝑬𝑨𝑫𝑶𝑹彡★
♥️🎩⚠︎  シ︎𝑾𝒊𝒍𝖘𝒐𝒏シ︎ ⚠︎🎩♥️
    • *${asistencia}*
   
- 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌:
  *${ig}*

- 𝐂𝐀𝐍𝐀𝐋 𝐃𝐄 𝐘𝐓:
  *${yt}*

- 𝐂𝐀𝐍𝐀𝐋 𝐎𝐅𝐂 𝐌𝐘:
  *${cnl}*

- 𝐑𝐄𝐏𝐎𝐒𝐈𝐓𝐎𝐑𝐈𝐎:
  *${md}*

⊰᯽⊱┈─╌❊ - ❊╌─┈⊰᯽⊱

 ╔══❖•ೋ° - °ೋ•❖══╗
- *¿TIENES DUDAS SOBRE EL BOT?*

- *¿TIENES ALGUNA QUEJA CON EL BOT?* 

- *¿TE GUSTARIA COMPARTIR OPINIONES Y/O SUGERENCIAS DEL BOT?*


*¡PERFECTO!*
> CONTACTA CON MI CREADOR PARA CUALQUIER TEMA DEL BOT, NO ESCRIBIR SI NO ES POR TEMA DEL BOT, EVITE PROBLEMAS.

╚══❖•ೋ° - °ೋ•❖══╝`

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
