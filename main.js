const {Client} = require('discord.js');

const client = new Client();

const prefix = '--';




client.once('ready', () =>  {
  console.log('ST2Bot reporting for duty!');
});
client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  const user = message.mentions.members.first();
  const id1 = '188401709721190400';
  const id2 = '130425663160188928';

  if(command === 'agree' && !message.member.roles.cache.has('711701131558125660')){
    message.author.send('PVT Role has been assigned!');
    message.member.roles.add('711701131558125660');
  }

  if(command === 'promote' && message.author.id == 'id1' || message.author.id == 'id2'){
  if(user.roles.cache.some(role => role.name === 'PVT')){
    user.roles.add('712839907189456986');
    users.roles.remove('711701131558125660');
  }
  if(user.roles.cache.some(role => role.name === 'PFC')){
    user.roles.add('711701218904506438');
    users.roles.remove('712839907189456986');
  }
  message.channel.send('Command Approved');
  }
  if (command === 'promote' && !message.author.id == 'id1' || !message.author.id == 'id2'){
    message.channel.send('Command Denied');
  }


});

client.on('guildMemberAdd', newMember => {
  newMember.send('Welcome to the ST2 Server. Please read the message in the Landing-Zone Channel to proceed. Thank you!');

});

//Last Line pls thank
client.login(process.env.token);
