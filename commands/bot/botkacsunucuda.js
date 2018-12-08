const {Command} = require('discord.js-commando'),
  {stripIndents} = require('common-tags');
const { RichEmbed } = require('discord.js');

module.exports = class CheckGuildsCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'sunucusayı',
      aliases: ['sunucusayı'],
      memberName: 'sunucusayı',
      group: 'bot',
      description: 'Botun bulunduğu sunucuların sayısını gösterir.',
    });
  }

  run (message) {

    const embed = new RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(this.client.user.avatarURL)
    .setAuthor(`VoidBot | Sunucular`, this.client.user.avatarURL)    
    .setDescription(`\n    **VoidBot Kaç Sunucuda Komudu**

    Şu Anda Bulunduğunuz ${message.guild.name} Adlı Sunucuda Dahil;
    Bot ${this.client.guilds.size} adet  sunucuda bulunuyor. \nEğer O Sunucuları Merak Ediyorsan vb!sunucular ile bakabilirsin! \n Hadi Bro Sende Eklede Şura Artsın  :sweat_smile:
        `)


    return message.embed(embed)
  }
};