const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_EMOJIS_AND_STICKERS", "GUILD_VOICE_STATES"] });

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.login('ODg5MTYwNjkzMjU1OTIxNjY0.YUdNbQ.XN45cW2kmROaawGyHSTpxAy1IAA');