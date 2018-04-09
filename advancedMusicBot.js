const Discord = require('discord.js');
const Music = require('discord.js-musicbot-addon');
const client = new Discord.Client(); //replace client with what you want your Discord Client to be.
const settings = require('./tokens.json'); //Load the token, prefix, and other info from a JSON file.

client.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
    client.user.setGame(`with ${client.guilds.size} servers`)
});

client.on('message', message => {
  //Code to run with commands, other message events, etc, for your bot.
  if (!message.content.startsWith(settings.prefix)) return;
  let command = message.content.split(' ')[0].slice(settings.prefix.length);
  if (command === 'ping') { //old basic ping command.
    message.channel.send('Pinging...').then(msg => {
      msg.edit(`Response took: \`(${msg.createdTimestamp - message.createdTimestamp}ms)\``);
    });
  };
});

const music = new Music(client, {
  prefix: settings.prefix, // Prefix for the commands.
  global: true,            // Non-server-specific queues.
  maxQueueSize: 50,        // Maximum queue size of 25.
  clearInvoker: true,      // If permissions applicable, allow the bot to delete the messages that invoke it.
  helpCmd: 'mhelp',        // Sets the name for the help command.
  playCmd: 'play',        // Sets the name for the 'play' command.
  volumeCmd: 'volume',     // Sets the name for the 'volume' command.
  leaveCmd: 'leave',      // Sets the name for the 'leave' command.
  disableLoop: false,        // Disable the loop command.
  youtubeKey: 'AIzaSyBdbdwyMNrnGrzMCmJ9heZH-c5c635_6C4',
  enableQueueStat: true
});
client.login(settings.token);
