// TEST - BOTONES

let handler  = async (m, { conn, usedPrefix, command }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
	
let picture = './media/menus/instalacion.jpg'
let gata = `𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝘾𝙄𝙊𝙉 𝘿𝙀 𝙈𝙔𝙇𝙄𝙉𝙂𝘽𝙊𝙏


*┏━━━━━━━━━━━━━⬣*
┃ 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝘾𝙄𝙊𝙉 - 𝙏𝙀𝙍𝙈𝙐𝙓
┃
┃⪩ *_INSTALACION AUTOMATICA_*
┃
┃termux-setup-storage
┃apt update -y && yes | apt
┃upgrade && pkg install -y 
┃bash wget mpv && wget -O - 
┃https://raw.githubusercontent
┃.com/WilsonOFC/MylingBot-MD/master
┃/Myling.sh | bash
┃
┃⪩ *_INSTALACION MANUAL_*
┃
┃termux-setup-storage
┃apt update
┃apt upgrade
┃pkg install -y git nodejs ffmpeg imagemagick yarn
┃git clone https://github.com/WilsonOFC/MylingBot-MD
┃cd MylingBot-MD
┃yarn install
┃npm install
┃npm start
┃
┃⪩ *_INSTALACION ARCHIVOS_*
┃
┃termux-setup-storage
┃apt update
┃apt upgrade
┃pkg install -y git nodejs ffmpeg imagemagick yarn
┃cd storage/downloads/MylingBot-MD/MylingBot-MD-master 
┃yarn install
┃npm install
┃npm start
┃
┃
┃ *✿━━━━━━━━━━━━━✿*
┃
┃ 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝘾𝙄𝙊𝙉 - 𝘽𝙊𝙓𝙈𝙄𝙉𝙀
┃
┃ *_PROXIMAMENTE..._*
┃
┃ *✿━━━━━━━━━━━━━✿*
┃
┃𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝘾𝙄𝙊𝙉 - 𝙃𝙀𝙍𝙊𝙆𝙐
┃
┃ *_PROXIMAMENTE..._*
┃
*┗━━━━━━━━━━━━━⬣*`
await conn.sendFile(m.chat, picture, 'Hola.mp3', gata, fkontak)}

handler.command = /^(instalarbot|instalarkatashibot|instalarkatashi|procesobot|botproceso|procesodelbot|botinstall|installbot)/i
export default handler
