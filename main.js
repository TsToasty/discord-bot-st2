const {Client} = require('discord.js');

const client = new Client();

const prefix = '+-';





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
//Give role when say magic word
  if(command === 'agree' && !message.member.roles.cache.has('711701131558125660')){
    message.author.send('PVT Role has been assigned!');
    message.member.roles.add('711701131558125660');
    message.channel.bulkDelete(1);
  }
//You have rank? You can promot, cool right?
//This code takes a while to execute, some coffee might help
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
      message.channel.send('<@!' + message.author+ '>' +' just promoted '+ '<@!' + user +'>');
    }
      else{
        message.channel.send('Command Denied');
      }
    }

    if(command = 'bandages'){
      message.channel.send('Bring at least ' + Math.floor(Math.random() * 100000) + 1; + '\n You can never have enough')

    }
    //Kills messages. Americans hate words right?
    if(command === 'clear'){
      const args = message.content.split(' ').slice(1);
      const amount = args.join(' ');
      if (!amount) return message.reply('You haven\'t given an amount of messages which should be deleted!');
      if (isNaN(amount)) return message.reply('The amount parameter isn`t a number!');
      if (amount > 100) return message.reply('You can`t delete more than 100 messages at once!');
      if (amount < 1) return message.reply('You have to delete at least 1 message!');
      message.channel.messages.fetch({ limit: amount }).then(messages => {
        message.channel.bulkDelete(messages);
      });

    }
});

//Does shit when people join server, please no ask, thank!
client.on('guildMemberAdd', newMember => {
  newMember.send('Welcome to the ST2 Server. \n Please read the message in the Landing-Zone Channel to proceed. \n Make sure to download the mods, you will find the preset in announcements & server info. \n \n Operations are on Monday, Wednesday, Friday and Sunday at 1600 CET+1 \n Write +-agree in the landing zone channel to be promoted to PVT \n Thank you!');

});

//Last Line pls thank
client.login(process.env.token);
