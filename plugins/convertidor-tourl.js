/*Créditos a https://github.com/AzamiJs*/

import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'
let handler = async (m) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => '.src/avatar_contact.png')
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `⏤͟͟͞͞𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐀 𝐂𝐎𝐍 𝐔𝐍𝐀 𝐈𝐌𝐀𝐆𝐄𝐍 𝐎 𝐕𝐈𝐃𝐄𝐎 𝐏𝐀𝐑𝐀 𝐂𝐑𝐄𝐀𝐑 𝐔𝐍 𝐄𝐍𝐋𝐀𝐂𝐄`
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
  
let caption = `⇲ 𝐄𝐍𝐋𝐀𝐂𝐄:\n${link}\n
⇱ 𝐏𝐄𝐒𝐎: ${media.length}\n
⸔ 𝐕𝐄𝐍𝐂𝐈𝐌𝐈𝐄𝐍𝐓𝐎: ${isTele ? '𝙉𝙊 𝙀𝙓𝙋𝙄𝙍𝘼' : '𝘿𝙀𝙎𝘾𝙊𝙉𝙊𝘾𝙄𝘿𝙊'}\n
⋉ 𝐔𝐑𝐋 / 𝐋𝐈𝐍𝐊: ${await shortUrl(link)}`
  
conn.reply(m.chat, caption, m, { contextInfo: {externalAdReply :{mediaUrl: md, mediaType: 2, title: wm, body: botdate, thumbnail: await(await fetch(link)).buffer(), sourceUrl: link }}})}
handler.help = ['tourl']
handler.tags = ['herramientas']
handler.command = /^(tourl|upload)$/i
export default handler

handler.limit = true

async function shortUrl(url) {
let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
return await res.text()
}
