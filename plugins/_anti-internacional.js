import db from '../lib/database.js' //Esta función es para la versión LATAM
let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"
}
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
if (isBotAdmin && chat.antifake) {
let texto = `${lenguajeMY['smsAvisoAG']()}${lenguajeMY['smsInt1']()} *@${m.sender.split`@`[0]}* ${lenguajeMY['smsInt2']()}`
	
if (m.sender.startsWith('212' || '212')) {
global.db.data.users[m.sender].block = true
await conn.reply(m.chat, texto, m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('234' || '234')) {
global.db.data.users[m.sender].block = true
await conn.reply(m.chat, texto, m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
		
if (m.sender.startsWith('90' || '90')) {
global.db.data.users[m.sender].block = true
await conn.reply(m.chat, texto, m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('92' || '92')) {
global.db.data.users[m.sender].block = true
await conn.reply(m.chat, texto, m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('93' || '93')) {
global.db.data.users[m.sender].block = true
await conn.reply(m.chat, texto, m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('94' || '94')) {
global.db.data.users[m.sender].block = true
await conn.reply(m.chat, texto, m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('95' || '95')) {
global.db.data.users[m.sender].block = true
await conn.reply(m.chat, texto, m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('7' || '7')) {
global.db.data.users[m.sender].block = true
await conn.reply(m.chat, texto, m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('49' || '49')) {
global.db.data.users[m.sender].block = true
await conn.reply(m.chat, texto, m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('20' || '20')) {
global.db.data.users[m.sender].block = true
await conn.reply(m.chat, texto, m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('91' || '91')) {
global.db.data.users[m.sender].block = true
await conn.reply(m.chat, texto, m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('48' || '48')) {
global.db.data.users[m.sender].block = true
await conn.reply(m.chat, texto, m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 
}}
export default handler
