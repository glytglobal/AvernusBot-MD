const comandos = /piedra|papel|tijera|estado|verificar|creador|grupos|instalarbot|términos|bots|deletebot|eliminarsesion|verify|register|registrar|reg|reg1|nombre|name|nombre2|name2|edad|age|edad2|age2|genero|género|gender|identidad|pasatiempo|hobby|identify|finalizar|pas2|pas3|pas4|pas5|registroc|deletesesion|registror/i
export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner, usedPrefix, command }) {
if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
const regex = new RegExp(`^${comandos.source}$`, 'i')
if (regex.test(m.text.toLowerCase().trim())) return !0

let chat, user, bot, mensaje
chat = global.db.data.chats[m.chat]
user = global.db.data.users[m.sender]
bot = global.db.data.settings[this.user.jid] || {}

if (bot.antiPrivate && !isOwner && !isROwner) {
if (user.counterPrivate === 0) {
mensaje = `¡HOLA! *@${m.sender.split`@`[0]}*\n\n𝖤𝖲𝖳𝖠 𝖯𝖱𝖮𝖧𝖨𝖡𝖨𝖣𝖮 𝖤𝖲𝖢𝖱𝖨𝖡𝖨𝖱𝖬𝖤 𝖠 𝖬𝖨 𝖯𝖱𝖨𝖵𝖠𝖣𝖮\n\n⚠️ \`\`\`𝐏𝐑𝐈𝐌𝐄𝐑𝐀 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀\`\`\` ⚠️`
await conn.reply(m.chat, mensaje, m, { mentions: [m.sender] })  
  
} else if (user.counterPrivate === 1) {
let grupos = [ nn, nna2, nnnttt2, nnnttt3, nnnttt4 ].getRandom()
mensaje = `*@${m.sender.split`@`[0]}*\n\n¡𝖠𝖭𝖳𝖤𝖱𝖨𝖮𝖱𝖬𝖤𝖭𝖳𝖤 𝖫𝖤 𝖠𝖢𝖫𝖠𝖱𝖤 𝖠𝖢𝖳𝖴𝖠𝖫𝖬𝖤𝖭𝖳𝖤 𝖲𝖨 𝖵𝖴𝖤𝖫𝖵𝖤 𝖠 𝖤𝖲𝖢𝖱𝖨𝖡𝖨𝖱 𝖲𝖤𝖱𝖠 𝖡𝖫𝖮𝖰𝖴𝖤𝖠𝖣𝖮! 😑\n\n⚠️ \`\`\`𝐒𝐄𝐆𝐔𝐍𝐃𝐀 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀\`\`\`⚠️`
await conn.reply(m.chat, mensaje, m, { mentions: [m.sender] }) 
  
} else if (user.counterPrivate === 2) {
mensaje = `*@${m.sender.split`@`[0]}* 𝖠𝖧𝖮𝖱𝖠 𝖴𝖲𝖳𝖤𝖣 𝖲𝖤𝖱𝖠 𝖡𝖫𝖮𝖰𝖴𝖤𝖠𝖣𝖮 😾🫵\n\n 𝖳𝖤 𝖫𝖮 𝖬𝖤𝖭𝖢𝖨𝖮𝖭𝖤 𝖳𝖱𝖤𝖲 𝖵𝖤𝖢𝖤𝖲 𝖠𝖧𝖮𝖱𝖠 𝖲𝖤𝖱𝖠 𝖡𝖫𝖮𝖰𝖴𝖤𝖠𝖣𝖮\n\n¡𝖦𝖱𝖠𝖢𝖨𝖠𝖲 𝖯𝖮𝖱 𝖴𝖲𝖠𝖱 𝖤𝖲𝖳𝖤 𝖡𝖮𝖳!\n\n⚠️ \`\`\`𝐓𝐄𝐑𝐂𝐄𝐑𝐀 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀\`\`\` ⚠️`
await conn.reply(m.chat, mensaje, m, { mentions: [m.sender] }) 
  
user.counterPrivate = -1
await this.updateBlockStatus(m.sender, 'block')
}
user.counterPrivate++
}
return !1
}
