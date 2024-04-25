const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = process.env.PORT || 4000;

const token = '6909692960:AAF8bQSsshcz_kA6ufvwPXYfnjrkXNQRwCY';
const bot = new TelegramBot(token, {polling: true});

bot.onText('/start/', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Hello`);
})

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const username = msg.from.username;
    const message = msg.text;
    console.log(message);
});

bot.on('polling_error', (error) => {
    console.log(error);
})





// ...
app.get('/', (req ,res) => {
    res.send('Hello reza')
})
app.listen(port, () => console.log('serveris running'))


// const webhookUrl = 'https://https://api.render.com/deploy/srv-col0c0md3nmc739mvmhg?key=YqUnMKFx9Is/api/telegram-bot';

// bot.setWebHook(webhookUrl);

