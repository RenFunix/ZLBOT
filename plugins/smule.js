let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  global.API('xteam', '/dl/smule', {
    url: args[0]
  }, '0adfb77799407f68')
  conn.sendFile(m.chat, undefined, '', '', m)
}
handler.help = [].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^\x00s$/i

module.exports = handler
