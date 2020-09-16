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
  const id1 = '188401709721190400'; //Chris
  const id2 = '130425663160188928'; //Andrew
  const id3 = '104757384102068224'; //Toasty
//Promote Users who type in --agree without the PVT Role
  if(command === 'agree' && !message.member.roles.cache.has('711701131558125660')){
    message.author.send('PVT Role has been assigned!');
    message.member.roles.add('711701131558125660');
  }
//Basic Promotion Command executable by Andrew and Chris
  if(command === 'promote'){
    if(message.author.id === id1 || message.author.id === id2 || message.author.id === id3){
      if(user.roles.cache.some(role => role.name === 'PVT')){
        user.roles.add('712839907189456986');
        user.roles.remove('711701131558125660');
      }
      if(user.roles.cache.some(role => role.name === 'PFC')){
        user.roles.add('711701218904506438');
        user.roles.remove('712839907189456986');
      }
      message.channel.send('Command Approved, Unit has been promoted!');
    }
      else{
        message.channel.send('Command Denied');
      }
    }
});


client.on('guildMemberAdd', newMember => {
  newMember.send('Welcome to the ST2 Server. \n Please read the message in the Landing-Zone Channel to proceed. \n Make sure to download the mods, you will find the preset in announcements. Make sure to add GRAD Trenches. \n Operations are on Monday, Wednesday, Friday and Sunday at 1600 CET+1 \n Thank you!');

});

//Last Line pls thank
client.login(process.env.token);
