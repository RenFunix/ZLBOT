let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, '0adfb77799407f68'), '', 'dark jokes', m)
}
handler.help = ['darkjokes']
handler.tags = ['internet']
handler.command = /^(dragjokes|darkjokes)$/i

module.exports = handler
