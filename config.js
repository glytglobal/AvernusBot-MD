import { watchFile, unwatchFile } from "fs"  
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"
import cheerio from "cheerio"
import fetch from "node-fetch"
import axios from "axios"
import moment from "moment-timezone"
import { en, es, id, ar, pt, fr } from "./lib/idiomas/total-idiomas.js"
 
// ⪨━━━━━━━ 𝐎𝐖𝐍𝐄𝐑𝐒 / 𝐏𝐑𝐎𝐏𝐈𝐄𝐓𝐀𝐑𝐈𝐎𝐒 ━━━━━━━⪩

global.owner = [
['5493795319022', '𝐌𝐃𝐊 - 𝐆𝐋 𝐘𝐓 𝐌𝐗 ', true],
['5493795319019', '𝐀𝐒𝐈𝐒𝐓𝐄𝐍𝐂𝐈𝐀 - 𝐌𝐃𝐊', true], 
['50558124470'],
['573012482597'],
['595972157130']]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ
global.mods = []
global.prems = ["5493795319022"]
// KEY DE VIOLETICS
global.Key360 = ["964f-0c75-7afc"]
   
  
// ⪨━━━━━━ 𝐈𝐃𝐈𝐎𝐌𝐀 ━━━━━━⪩
// SELECCIONE EL IDIOMA QUE QUIERE QUE SEA PARA AVERNUS-BOT-MD
// IDIOMAS PARA SELECCIONAR:
//  es = Español         id = Bahasa Indonesia
//  en = English         pt = Português 
//  ar = عرب

global.lenguajeMY = es // IDIOMA :: EJEMPLO: es|en|pt|id

// ◉━━━━━━━━━ KEYS / APIS ━━━━━━━━━━━◉

global.openai_key = 'sk-0'

global.openai_org_id = 'org-3'

global.keysZens = ["LuOlangNgentot", "c2459db922", "37CC845916", "6fb0eff124", "hdiiofficial", "fiktod", "BF39D349845E", "675e34de8a", "0b917b905e6f"]
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ["29d4b59a4aa687ca", "5LTV57azwaid7dXfz5fzJu", "cb15ed422c71a2fb", "5bd33b276d41d6b4", "HIRO", "kurrxd09", "ebb6251cc00f9c63"]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ["5VC9rvNx", "cfALv5"]
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = "WilsonOFC"
global.itsrose = ["4b146102c4d500809da9d1ff"]
global.baileys = "@whiskeysockets/baileys"

global.APIs = { 
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',	
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',	
  rose: 'https://api.itsrose.site',
  popcat : 'https://api.popcat.xyz',
  xcoders : 'https://api-xcoders.site'
},
global.APIKeys = { 
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': `${lolkeysapi}`,
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren'
};

global.mods = []

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

// ⪻ DATA - INFO ⪼

/(global.official = [
["5493795319019", '𝐌𝐃𝐊 - 𝐆𝐋 𝐘𝐓 𝐌𝐗', 1],
["5493795319022", '𝐌𝐃𝐊 - 𝐆𝐋 𝐘𝐓 𝐌𝐗 - 𝐀𝐒𝐈𝐒𝐓𝐄𝐍𝐂𝐈𝐀', 1]]*/

global.official = [ // Agregate si eres Owner
['18059196237', 'Aj-Md 💻', 1], 
['5492266466080', '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 💻', 1],  
['5214531106422', '𝗖𝗿𝗲𝗮𝗱𝗼𝗿 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 💻', 1],
['5521989092076', '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿𝗮 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 💻', 1],
['5491173694367', 'Prueba', 1]] 

global.mail = '' //agrega tú correo
global.desc = '' //agrega una descripción corta
global.desc2 = '' //agrega una descripción larga (Solo se aplicará si su whasapp no tiene descripción)
global.country = '' //agrega tú país ejemplo: 🇪🇨

global.packname = "𝐀𝐯𝐞𝐫𝐧𝐮𝐬𝐁𝐨𝐭-𝐌𝐃"
global.author = "𝐆𝐋 𝐘𝐓 𝐌𝐗"

//⊱ ━━━━━.⋅ Versión | Nombre | cuentas ⋅.━━━━ ⊰

global.vs = "1.0.0"
global.vsJB = "1.0 (Beta)"

global.ds = "𝐀𝐯𝐞𝐫𝐧𝐮𝐬𝐁𝐨𝐭-𝐌𝐃"
global.gt = "𝐀𝐯𝐞𝐫𝐧𝐮𝐬𝐁𝐨𝐭-𝐌𝐃"
global.yt = "https://youtube.com/@GLYTMX"
global.yt2 = "https://www.youtube.com/shorts/"
global.ig = "https://www.instagram.com/"
global.md = "https://github.com/glytglobal/AvernusBot-MD/"
global.fb = "https://www.facebook.com/GLYTMX" // PROXIMAMENTE

global.cnl = 'https://whatsapp.com/channel/1'
global.nna = 'https://whatsapp.com/channel/2'
global.nn2 = 'https://whatsapp.com/channel/3'
global.nna2 = 'https://chat.whatsapp.com/1'
global.nn = 'https://chat.whatsapp.com/2'
global.nnn = 'https://chat.whatsapp.com/3'
global.nnnt = 'https://chat.whatsapp.com/4'
global.nnntt = 'https://chat.whatsapp.com/5'
global.nnnttt = 'https://chat.whatsapp.com/LgxLCZwejjSFaeREilUo7r' //Grupo 5 - Anexados del infierno
global.nnnttt1 = 'https://chat.whatsapp.com/6'
global.nnnttt2 = 'https://chat.whatsapp.com/7'
global.nnnttt3 = 'https://chat.whatsapp.com/8'
global.nnnttt4 = 'https://chat.whatsapp.com/9'
global.nnnttt5 = 'https://chat.whatsapp.com/10'
global.paypal = 'https://paypal.me/WilsonWaoz'
global.asistencia = 'Wa.me/5493795319022' // SOY EL CREADOR DE AV (HABLAME)
global.asistencia2 = 'Wa.me/5493795319022' // ASISTENCIA AVERNUS - BOT
global.accountsmy = [cnl, nna, nn2, nn, nnn, nnnt, nnntt, nnntt, nnnttt, nnnttt1, nnnttt2, nnnttt3, nnnttt4, nnnttt5]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━━━━━━━━━.⋅ Datos ⋅.━━━━━━━━━━━━━━ ⊰

global.rg = '╰⊱✅⊱ 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊 ⊱✅⊱╮\n\n'
global.resultado = rg

global.ag = '╰⊱⚠️⊱ 𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 ⊱⚠️⊱╮\n\n'
global.advertencia = ag

global.iig = '╰⊱❕⊱ 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊́𝙉 ⊱❕⊱╮\n\n'
global.informacion = iig

global.fg = '╰⊱❌⊱ 𝙀𝙍𝙍𝙊𝙍 ⊱❌⊱╮\n\n'
global.fallo = fg

global.mg = '╰⊱❗️⊱ 𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇 ⊱❗️⊱╮\n\n'
global.mal = mg

global.eeg = '╰⊱📩⊱ 𝙍𝙀𝙋𝙊𝙍𝙏𝙀 ⊱📩⊱╮\n\n'
global.envio = eeg

global.eg = '╰⊱💚⊱ 𝙀́𝙓𝙄𝙏𝙊 ⊱💚⊱╮\n\n'
global.exito = eg

//𝙀𝙅𝙀𝙈𝙋𝙇𝙊 | 𝙀𝙓𝘼𝙈𝙋𝙇𝙀
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ Información | Information ⋅.━━━━ ⊰

global.wm = "𝐀𝐯𝐞𝐫𝐧𝐮𝐬𝐁𝐨𝐭-𝐌𝐃"
global.igfg = "𝐀𝐯𝐞𝐫𝐧𝐮𝐬𝐁𝐨𝐭-𝐌𝐃"
global.wait = "*𝑪𝑨𝑹𝑮𝑨𝑵𝑫𝑶 ▬▭▭▭▭▭▭*"
global.waitt = "*𝑪𝑨𝑹𝑮𝑨𝑵𝑫𝑶 ▬▬▭▭▭*"
global.waittt = "*𝑪𝑨𝑹𝑮𝑨𝑵𝑫𝑶 ▬▬▬▬▭▭*"
global.waitttt = "*𝑪𝑨𝑹𝑮𝑨𝑵𝑫𝑶 ▬▬▬▬▬▬▭*"
global.nomorown = "5493795319022"
global.pdoc = ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/msword", "application/pdf", "text/rtf"];

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ IMG ⋅.━━━━ ⊰

global.imagen1 = fs.readFileSync("./media/menus/img1.jpg")
global.imagen2 = fs.readFileSync("./media/menus/img2.jpg")
global.imagen3 = fs.readFileSync("./media/menus/img3.jpg")
global.imagen4 = fs.readFileSync("./media/menus/img4.jpg")
global.imagen5 = fs.readFileSync("./media/menus/img5.jpg")
global.imagen6 = fs.readFileSync("./media/menus/img6.jpg")
global.imagen7 = fs.readFileSync("./media/menus/img7.jpg")
global.imagen8 = fs.readFileSync("./media/menus/img8.jpg")
global.imagen9 = fs.readFileSync("./media/menus/img9.jpg")
global.imagen10 = fs.readFileSync("./media/menus/img10.jpg")
global.imagen11 = fs.readFileSync("./media/menus/img11.jpg")
global.imagen12 = fs.readFileSync("./media/menus/img12.jpg")
global.imagen13 = fs.readFileSync("./media/menus/Menu3.jpg")

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//━━━━━━━━━━━━━━ img ━━━━━━━━━

global.img = 'https://telegra.ph/file/38cd8c6bea67860878901.jpg'
global.img2 = 'https://telegra.ph/file/38cd8c6bea67860878901.jpg'

global.img3 = 'https://telegra.ph/file/b296c5cf0dfbc3e944c97.jpg' //prem
global.img4 = 'https://telegra.ph/file/b296c5cf0dfbc3e944c97.jpg' //prem

global.img5 = 'https://telegra.ph/file/041c8bb3213da3a0ef410.jpg'
global.img6 = 'https://telegra.ph/file/041c8bb3213da3a0ef410.jpg'
global.img7 = 'https://telegra.ph/file/424dd6d15bd2aef9aaf1d.jpg'
global.img8 = 'https://telegra.ph/file/424dd6d15bd2aef9aaf1d.jpg'
global.img9 = 'https://telegra.ph/file/9db73a2463e7889c68c2f.jpg'

global.img10 = 'https://telegra.ph/file/9db73a2463e7889c68c2f.jpg'
global.img11 = 'https://telegra.ph/file/c5fa3b0c75a97f1a310d3.jpg'
global.img12 = 'https://telegra.ph/file/c5fa3b0c75a97f1a310d3.jpg'
global.img13 = 'https://telegra.ph/file/1e7e54a16dd6fd59c8d22.jpg'
global.img14 = 'https://telegra.ph/file/2ec3b7ae20644a018278a.jpg'
global.img15 = 'https://telegra.ph/file/c314943b11806b25803f3.jpg'

global.img16 = 'https://telegra.ph/file/c314943b11806b25803f3.jpg' //+18

global.img17 = 'https://telegra.ph/file/38cd8c6bea67860878901.jpg'
global.img18 = 'https://telegra.ph/file/1e7e54a16dd6fd59c8d22.jpg'

global.logogit = 'https://telegra.ph/file/75bbb5686e0dff952e79c.jpg'

global.welgata = [ig, yt2, yt2, ig, md, ig, yt, paypal, yt2, yt2, ig, fb]
global.redesMenu = [cnl, nna, nn, nnn, nnnt, nnntt, nnnttt, nnnttt1, nnnttt2, nnnttt3, nnnttt4, asistencia2, ig, paypal, yt, asistencia, fb]
global.gataMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18]
global.gataVidMenu = ['https://telegra.ph/file/e43024f4f2d970e3c7cbf.png', 'https://telegra.ph/file/45c66b22615c030476cc0.jpg', 'https://telegra.ph/file/5f861408375b072c4b3d8.jpg']
global.gataImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13]
global.autoresp = 'https://telegra.ph/file/988c8473c3bd4b6c6a341.png'

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ RPG ⋅.━━━━ ⊰

global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='];

global.cmenut = "❖––––––『"
global.cmenub = "┊✦ "
global.cmenuf = "╰━═┅═━––––––๑\n"
global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     "
 
global.dmenut = "*❖─┅──┅〈*"
global.dmenub = "*┊»*"
global.dmenub2 = "*┊*"
global.dmenuf = "*╰┅────────┅✦*"
global.htjava = "⫹⫺"

global.htki = "*⭑•̩̩͙⊱•••• ☪*"
global.htka = "*☪ ••••̩̩͙⊰•⭑*"

global.comienzo = "• • ◕◕════"
global.fin = " • •"

global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; //Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;//America/Los_Angeles
global.fgif = {
            key: {
                 participant : '0@s.whatsapp.net'},
            message: { 
                        "videoMessage": { 
                        "title": wm,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': bottime,
                        'jpegThumbnail': fs.readFileSync('./media/menus/Menu3.jpg')
                               }
                              }
                             };

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


global.multiplier = 150 // Cuanto más alto, más difícil subir de nivel | The higher, The harder levelup 

//Emojis RPG - Referencias
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      level: '🧬 Nivel : Level',
      limit: lenguajeMY.eDiamante(),
      exp: lenguajeMY.eExp(),
      bank: '🏦 Banco : Bank',
      diamond: lenguajeMY.eDiamantePlus(),
      health: '❤️ Salud : Health',
      kyubi: lenguajeMY.eMagia(),
      joincount: lenguajeMY.eToken(),
      emerald: lenguajeMY.eEsmeralda(),
      stamina: lenguajeMY.eEnergia(),
      role: '💪 Rango | Role',
      premium: '🎟️ Premium',
      pointxp: '📧 Puntos Exp : Point Xp',
      gold: lenguajeMY.eOro(),
      
      trash: lenguajeMY.eBasura(),
      crystal: '🔮 Cristal : Crystal',
      intelligence: '🧠 Inteligencia : Intelligence',
      string: lenguajeMY.eCuerda(),
      keygold: '🔑 Llave de Oro : Key Gold',
      keyiron: '🗝️ Llave de Hierro : Key Iron',
      emas: lenguajeMY.ePinata(),
      fishingrod: '🎣 Caña de Pescar : Fishing Rod',
      gems: '🍀 Gemas : Gemas',
      magicwand: '⚕️ Varita Mágica : Magic Wand',
      mana: '🪄 Hechizo : Spell',
      agility: '🤸‍♂️ Agilidad : Agility',
      darkcrystal: '♠️ Cristal Oscuro : Dark Glass',
      iron: lenguajeMY.eHierro(),
      rock: lenguajeMY.eRoca(),
      potion: lenguajeMY.ePocion(),
      superior: '💼 Superior : Superior',
      robo: '🚔 Robo : Robo',
      upgrader: '🧰 Aumentar Mejora : Upgrade',
      wood: lenguajeMY.eMadera(),
      
      strength: '🦹‍ ♀️ Fuerza : Strength',
      arc: '🏹 Arco : Arc',
      armor: '🥼 Armadura : Armor',
      bow: '🏹 Super Arco : Super Bow',
      pickaxe: '⛏️ Pico : Peak',
      sword: lenguajeMY.eEspada(),
      
      common: lenguajeMY.eCComun(),
      uncoommon: lenguajeMY.ePComun(),
      mythic: lenguajeMY.eCMistica(),
      legendary: lenguajeMY.eClegendaria(),
      petFood: lenguajeMY.eAMascots(), //?
      pet: lenguajeMY.eCMascota(),//?
      
      bibitanggur: lenguajeMY.eSUva(), bibitapel: lenguajeMY.eSManzana(), bibitjeruk: lenguajeMY.eSNaranja(), bibitmangga: lenguajeMY.eSMango(), bibitpisang: lenguajeMY.eSPlatano(),
      
      ayam: '🐓 Pollo : Chicken',
      babi: '🐖 Puerco : Pig',
      Jabali: '🐗 Jabalí : Wild Boar',
      bull: '🐃 Toro : Bull',    
      buaya: '🐊 Cocodrilo : Alligator',    
      cat: lenguajeMY.eGato(),    
      centaur: lenguajeMY.eCentauro(),
      chicken: '🐓 Pollo : Chicken',
      cow: '🐄 Vaca : Cow', 
      dog: lenguajeMY.ePerro(),
      dragon: lenguajeMY.eDragon(),
      elephant: '🐘 Elefante : Elephant',
      fox: lenguajeMY.eZorro(),
      giraffe: '🦒 Jirafa : Giraffe',
      griffin: lenguajeMY.eAve(), //Mascota : Griffin',
      horse: lenguajeMY.eCaballo(),
      kambing: '🐐 Cabra : Goat',
      kerbau: '🐃 Búfalo : Buffalo',
      lion: '🦁 León : Lion',
      money: lenguajeMY.eMylingCoins(),
      monyet: '🐒 Mono : Monkey',
      panda: '🐼 Panda',
      snake: '🐍 Serpiente : Snake',
      phonix: '🕊️ Fénix : Phoenix',
      rhinoceros: '🦏 Rinoceronte : Rhinoceros',
      wolf: lenguajeMY.eLobo(),
      tiger: '🐅 Tigre : Tiger',
      cumi: '🦑 Calamar : Squid',
      udang: '🦐 Camarón : Shrimp',
      ikan: '🐟 Pez : Fish',
      
      fideos: '🍝 Fideos : Noodles',
      ramuan: '🧪 Ingrediente NOVA : Ingredients',
      knife: '🔪 Cuchillo : Knife'
    };
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
};

global.rpgg = { //Solo emojis 
  emoticon(string) {
    string = string.toLowerCase();
    let emott = {
      level: '🧬', limit: '💎', exp: '⚡', bank: '🏦',
      diamond: '💎+', health: '❤️', kyubi: '🌀', joincount: '🪙',
      emerald: '💚', stamina: '✨', role: '💪', premium: '🎟️',
      pointxp: '📧', gold: '👑',
      
      trash: '🗑', crystal: '🔮', intelligence: '🧠', string: '🕸️', keygold: '🔑',
      keyiron: '🗝️', emas: '🪅', fishingrod: '🎣', gems: '🍀', magicwand: '⚕️',
      mana: '🪄', agility: '🤸‍♂️', darkcrystal: '♠️', iron: '⛓️', rock: '🪨',
      potion: '🥤', superior: '💼', robo: '🚔', upgrader: '🧰', wood: '🪵',
      
      strength: '🦹‍ ♀️', arc: '🏹', armor: '🥼', bow: '🏹', pickaxe: '⛏️', sword: '⚔️',
      
      common: '📦', uncoommon: '🥡', mythic: '🗳️', legendary: '🎁', petFood: '🍖', pet: '🍱',
      
      bibitanggur: '🍇', bibitapel: '🍎', bibitjeruk: '🍊', bibitmangga: '🥭', bibitpisang: '🍌',
      
      ayam: '🐓', babi: '🐖', Jabali: '🐗', bull: '🐃', buaya: '🐊', cat: '🐈',      
      centaur: '🐐', chicken: '🐓', cow: '🐄', dog: '🐕', dragon: '🐉', elephant: '🐘',
      fox: '🦊', giraffe: '🦒', griffin: '🦅', //Mascota : Griffin',
      horse: '🐎', kambing: '🐐', kerbau: '🐃', lion: '🦁', money: '💵', monyet: '🐒', panda: '🐼',
      snake: '🐍', phonix: '🕊️', rhinoceros: '🦏',
      wolf: '🐺', tiger: '🐅', cumi: '🦑', udang: '🦐', ikan: '🐟',
      
      fideos: '🍝', ramuan: '🧪', knife: '🔪'
    };
    let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emott[results[0][0]];
  }
};


global.rpgshop = { //Tienda
  emoticon(string) {
    string = string.toLowerCase();
    let emottt = {
      exp: lenguajeMY.eExp(), limit: lenguajeMY.eDiamante(), diamond: lenguajeMY.eDiamantePlus(), joincount: lenguajeMY.eToken(),
      emerald: lenguajeMY.eEsmeralda(), berlian: lenguajeMY.eJoya(), kyubi: lenguajeMY.eMagia(), gold: lenguajeMY.eOro(),
      money: lenguajeMY.eMylingCoins(), tiketcoin: lenguajeMY.eMylingTickets(), stamina: lenguajeMY.eEnergia(),
            
      potion: lenguajeMY.ePocion(), aqua: lenguajeMY.eAgua(), trash: lenguajeMY.eBasura(), wood: lenguajeMY.eMadera(),
      rock: lenguajeMY.eRoca(), batu: lenguajeMY.ePiedra(), string: lenguajeMY.eCuerda(), iron: lenguajeMY.eHierro(),
      coal: lenguajeMY.eCarbon(), botol: lenguajeMY.eBotella(), kaleng: lenguajeMY.eLata(), kardus: lenguajeMY.eCarton(),
      
      eleksirb: lenguajeMY.eEletric(), emasbatang: lenguajeMY.eBarraOro(), emasbiasa: lenguajeMY.eOroComun(), rubah: lenguajeMY.eZorroG(),
      sampah: lenguajeMY.eBasuraG(), serigala: lenguajeMY.eLoboG(), kayu: lenguajeMY.eMaderaG(), sword: lenguajeMY.eEspada(),
      umpan: lenguajeMY.eCarnada(), healtmonster: lenguajeMY.eBillete(), emas: lenguajeMY.ePinata(), pancingan: lenguajeMY.eGancho(),
      pancing: lenguajeMY.eCanaPescar(),
       
      common: lenguajeMY.eCComun(), uncoommon: lenguajeMY.ePComun(), mythic: lenguajeMY.eCMistica(),
      pet: lenguajeMY.eCMascota(),//?
      gardenboxs: lenguajeMY.eCJardineria(),//?
      legendary: lenguajeMY.eClegendaria(),
      
      anggur: lenguajeMY.eUva(), apel: lenguajeMY.eManzana(), jeruk: lenguajeMY.eNaranja(), mangga: lenguajeMY.eMango(), pisang: lenguajeMY.ePlatano(),
      
      bibitanggur: lenguajeMY.eSUva(), bibitapel: lenguajeMY.eSManzana(), bibitjeruk: lenguajeMY.eSNaranja(), bibitmangga: lenguajeMY.eSMango(), bibitpisang: lenguajeMY.eSPlatano(),
      
      centaur: lenguajeMY.eCentauro(), griffin: lenguajeMY.eAve(), kucing: lenguajeMY.eGato(), naga: lenguajeMY.eDragon(),
      fox: lenguajeMY.eZorro(), kuda: lenguajeMY.eCaballo(), phonix: lenguajeMY.eFenix(), wolf: lenguajeMY.eLobo(),
      anjing: lenguajeMY.ePerro(),
 
      petFood: lenguajeMY.eAMascots(), //?
      makanancentaur: lenguajeMY.eCCentauro(), makanangriffin: lenguajeMY.eCAve(),
      makanankyubi: lenguajeMY.eCMagica(), makanannaga: lenguajeMY.eCDragon(), makananpet: lenguajeMY.eACaballo(), makananphonix: lenguajeMY.eCFenix()
    }
    let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emottt[results[0][0]];
  }
};

global.rpgshopp = { //Tienda
  emoticon(string) {
    string = string.toLowerCase();
    let emotttt = {
      exp: '⚡', limit: '💎', diamond: '💎+', joincount: '🪙',
      emerald: '💚', berlian: '♦️', kyubi: '🌀', gold: '👑',
      money: '💵', tiketcoin: '🎫', stamina: '✨',
            
      potion: '🥤', aqua: '💧', trash: '🗑', wood: '🪵',
      rock: '🪨', batu: '🥌', string: '🕸️', iron: '⛓️',
      coal: '⚱️', botol: '🍶', kaleng: '🥫', kardus: '🪧',
      
      eleksirb: '💡', emasbatang: '〽️', emasbiasa: '🧭', rubah: '🦊🌫️',
      sampah: '🗑🌫️', serigala: '🐺🌫️', kayu: '🛷', sword: '⚔️',
      umpan: '🪱', healtmonster: '💔', emas: '🪅', pancingan: '🪝',
      pancing: '🎣',
       
      common: '📦', uncoommon: '🥡', mythic: '🗳️',
      pet: '📫',//?
      gardenboxs: '💐',//?
      legendary: '🎁',
      
      anggur: '🍇', apel: '🍎', jeruk: '🍊', mangga: '🥭', pisang: '🍌',
      
      bibitanggur: '🌾🍇', bibitapel: '🌾🍎', bibitjeruk: '🌾🍊', bibitmangga: '🌾🥭', bibitpisang: '🌾🍌',
      
      centaur: '🐐', griffin: '🦅', kucing: '🐈', naga: '🐉', fox: '🦊', kuda: '🐎', phonix: '🕊️', wolf: '🐺', anjing: '🐶',
       
      petFood: '🍖', //?
      makanancentaur: '🐐🥩', makanangriffin: '🦅🥩', makanankyubi: '🌀🥩', makanannaga: '🐉🥩',
      makananpet: '🍱🥩', makananphonix: '🕊️🥩'  
    }
    let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emotttt[results[0][0]];
  }
};

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  import(`${file}?update=${Date.now()}`);
});
