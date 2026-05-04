const { Client, GatewayIntentBits } = require('discord.js'); // 修正1
const { token } = require('./config.json');

const bot = new Client({ // 修正2
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.login(token);