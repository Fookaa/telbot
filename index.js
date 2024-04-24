const TelegramBot = require('node-telegram-bot-api');

const token = '6909692960:AAF8bQSsshcz_kA6ufvwPXYfnjrkXNQRwCY';
const bot = new TelegramBot(token, {polling: true});

bot.onText('//start/', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Hello`);
})

bot.on('polling_error', (error) => {
    console.log(error);
})
