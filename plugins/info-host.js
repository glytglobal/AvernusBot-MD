let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `HOLA BIENVENIDO/A TE PRESENTO CODESANDBOX

¿QUE ES CODESANDBOX?
PLATAFORMA DONDE PUEDES ALOJAR MÚLTIPLES PROYECTOS A LARGO ALCANZE CON MUCHOS IDIOMAS Y CUSTOMIZADO

¿QUE VENTAJAS TIENE Y QUE DIFERENCIA DE OTROS HOTS?
LA DIFERENCIA ES QUE LA MAYORIA DE HOST MANTIENEN SOLO LOS LENGUAJES DE PROGRAMACION HABITUALES COMO "JAVASCRIPT" - "HTML" - "PYTHON" ADEMAS DE QUE ESTOS PUEDEN COSTAR UN CIERTO COSTO Y/O ALCANCE ADEMAS DE QUE NO PUEDES ALOJAR TANTOS DEBIDO A ALGUNA LIMITACIÓN O SU DEBIDO DINERO.

CODESANDBOX ES UN LUGAR GRATUITO DONDE TAMBIÉN ADEMAS DE QUE TENGAS UNA CUENTA, PUEDES CONECTAR TUS PROYECTOS PRIVADOS/PUBLICOS DE GITHUB, AMPLIO SISTEMA DE SOPORTE Y CUSTOMIZACION

🌟 CONTAMOS CON SOPORTE GARANTIZADO Y EXTRA

CONTAMOS CON AMPLIA VARIEDAD DE FORMATOS O LENGUAJES COMO PHP / PYTHON / JAVA / JAVASCRIPT / TYPESCRIPT / REACT / ANGULAR / ETC

¿PUEDO LLEGAR A PAGARLO O OBTENER OTRAS FUNCIONES?
SI, CONTAMOS CON UNA VERSION "VIP" O "PRO" EL CUAL PERMITE AL USUARIO  USAR LENGUAJES PERZONALIZADOS O DIRECTAMENTE CARGAR SU PROPIO SISTEMA DE LENGUAJE Y UN PROPIO LUGAR DONDE PODRAS TENER TUS PROYECTOS Y SISTEMA PRIVADOS CON MAS FUNCIONES.

¿COMO PUEDO INICIAR?
INICIAS O ALOJAS DE FORMA GRATUITA CON 4GB DE ESPACIO PARA CUALQUIER ESPECIALIDAD Y SI QUIERES AUMENTARLO ES PAGANDO DE FORMA VIP O EN SORTEOS OFICIALES

PAGINA
https://codesandbox.io/dashboard

CANAL DE WHATSAPP
https://whatsapp.com/channel/0029VagAcYlGE56u6WANKc2w

CREADOR
wa.me/5493795319022

PAGOS PARA EL VIP
wa.me/5493795297363
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
