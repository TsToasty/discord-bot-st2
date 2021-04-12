const {Client} = require('discord.js');

const client = new Client();

const prefix = '+-';





client.once('ready', () =>  {
  console.log('ST2Bot reporting for duty!');
});
client.on('message', message => {
  if(message.author.id === "263612707037511680" || message.author.id === "104757384102068224"){
    message.react('🥚');

  }
});
//Does shit when people join server, please no ask, thank!
client.on('guildMemberAdd', newMember => {
  newMember.send('Welcome to the ST2 Server. \n Make sure to download the mods, you will find the preset in announcements & server info. \n \n Operations are on Monday, Wednesday, Friday and Sunday at 1900 CET \n I hope you enjoy your stay');
  let myRole = client.guild.roles.cache.get('711701131558125660');
  newMember.roles.add(myRole);
});

//Last Line pls thank
client.login(process.env.token);
