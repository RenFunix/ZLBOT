let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│  • Telkomsel [082148864989]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay : [082148864989]
│ • DANA : [082148864989]
╰────

╭──
│ • Terima Kasih Sudah Men-support ZLBOT😅🙏
╰── 
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler