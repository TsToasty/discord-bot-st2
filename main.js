const {Client} = require('discord.js');

const client = new Client();

const prefix = '+-';





client.once('ready', () =>  {
  console.log('Egg');
});

client.on('message', message => {
  message.react('🥚');


});

//Last Line pls thank
client.login(process.env.token);
