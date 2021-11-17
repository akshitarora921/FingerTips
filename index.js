// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
require('dotenv').config();

// Create a new client instance
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready!');
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong!');
  } else if (commandName === 'server') {
    await interaction.reply(
      `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`
    );
  } else if (commandName === 'user') {
    await interaction.reply('User info.');
  } else if (commandName === 'm') {
    await interaction.reply(
      'Hi is anyone around to help me for 30 minutes?' + '@here'
    );
  } else if (commandName === 'l') {
    await interaction.reply(
      'I am here in the lounge if anyone needs help. @here'
    );
  } else if (commandName === 'p') {
    interaction.channel.send(
      'Available priorities:\n1. Critical\n2. High \n3. Medium\n4. Low'
    );
    const filter = (interaction) => {
      return !interaction.member.user.bot;
    };
    const collector = interaction.channel.createMessageCollector({
      filter,
      max: 5,
      time: 5000,
    });
    collector.on('collect', (m) => {
      if (m.content === '1') {
        return interaction.channel.send(`Priority is **Critical** @here`);
      }
      if (m.content === '2') {
        return interaction.channel.send(`Priority is **high** @here`);
      }
      if (m.content === '3') {
        return interaction.channel.send(`Priority is **Medium** @here`);
      }
      if (m.content === '4') {
        return interaction.channel.send(`Priority is **Low** @here`);
      } else {
        return interaction.channel.send(`invalid option selected :C`);
      }
    });
    collector.on('end', (collected) =>
      console.log(`Collected ${collected.size} items`)
    );

    await interaction.reply(`This list of Priorities is as follows:`);
  } else if (commandName === 'r') {
    await interaction.reply(
      `Hi! <@${interaction.user.id}> received your message and is available to talk now. Click on the Lounge voice channel on the left to speak now.`
    );

    // interaction.user.voice.setChannel(process.env.LOUNGE_VC_ID);
  }
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
