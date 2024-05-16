import axios from 'axios'
var handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, '𝘐𝘕𝘎𝘙𝘌𝘚𝘌 𝘌𝘓 𝘕𝘖𝘔𝘉𝘙𝘌 𝘋𝘌𝘓 𝘜𝘚𝘜𝘈𝘙𝘐𝘖/𝘈 𝘘𝘜𝘌 𝘋𝘌𝘚𝘌𝘈 𝘉𝘜𝘚𝘊𝘈𝘙', m)

  await m.reply('𝘽𝙐𝙎𝘾𝘼𝙉𝘿𝙊 𝙐𝙎𝙐𝘼𝙍𝙄𝙊')
  let request = await githubstalk(text) 
    let { username, following, followers, type, bio, company, blog, location, email, public_repo, public_gists, profile_pic } = request
    let thumb = await (profile_pic)
    let hasil = `*⪨━◐ 𝑮𝑰𝑻𝑯𝑼𝑩 𝑺𝑻𝑨𝑳𝑲 ◑━⪩*
❑ *NOMBRE*: ${username}
❑ *BIO*: ${bio}
❑ *COMPAÑIA*: ${company}
❑ *EMAIL:* ${email}
❑ *REPOSITORIOS:* ${public_repo}
❑ *GITS PÚBLICOS:* ${public_gists}
❑ *SEGUIDORES:* ${followers}
❑ *SIGUIENDO:* ${following}
❑ *LUGAR:* ${location}
❑ *ESTADO:* ${type}
`

    conn.sendFile(m.chat, logogit, 'githubstalk.jpg', hasil, m)
}
handler.help = ['githubstalk'].map(v => v + ' <query>')
handler.tags = ['internet']
handler.command = /^(githubstalk)$/i

export default handler

async function githubstalk(user) {
    return new Promise((resolve, reject) => {
        axios.get('https://api.github.com/users/'+user)
        .then(({ data }) => {
            let hasil = {
                username: data.login,
                nickname: data.name,
                bio: data.bio,
                id: data.id,
                nodeId: data.node_id,
                profile_pic: data.avatar_url,
                url: data.html_url,
                type: data.type,
                admin: data.site_admin,
                company: data.company,
                blog: data.blog,
                location: data.location,
                email: data.email,
                public_repo: data.public_repos,
                public_gists: data.public_gists,
                followers: data.followers,
                following: data.following,
                ceated_at: data.created_at,
                updated_at: data.updated_at
            }
            resolve(hasil)
        })
    })
}

