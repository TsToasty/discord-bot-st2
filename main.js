const {Client} = require('discord.js');

const client = new Client();

const prefix = '--';




client.once('ready', () =>  {
  console.log('Bot is online');
});
client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'agree' && message.member.roles.cache.has('755207591407124495')){
    message.author.send('You already have this role.')
  } else {
      message.author.send('PVT Role has been assigned!');
      message.member.roles.add('755207591407124495');

  }


});

client.on('guildMemberAdd', newMember => {
  newMember.send('Welcome to the ST2 Server. Please read the rules in the xxx channel and type the --agree command once you have done so to receive the PVT role');
  newMember.roles.add('755207591407124495');

});

//Last Line pls thank
client.login(process.env.token);
