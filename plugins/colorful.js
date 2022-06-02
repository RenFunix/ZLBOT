const uploadImage = require('../lib/uploadImage')
let handler = async (m, { conn, text }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  await conn.sendFile(m.chat, global.API('xteam', '/videomaker/colorful', { text: teks }, '0adfb77799407f68'), 'colorful.mp4', "gay", m)
}
handler.help = ['colorful'].map((v) => v + " <text>")
handler.tags = ['videomaker']

handler.command = /^colorful$/i

module.exports = handler
