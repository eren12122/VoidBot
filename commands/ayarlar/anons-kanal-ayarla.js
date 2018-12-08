const { Command } = require('discord.js-commando');

module.exports = class ModChannelCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'duyuru-kanal-ayarla',
            aliases: ['duyurukanal'],
            group: 'ayarlar',
            memberName: 'duyuru-kanal-ayarla',
            description: 'duyuru kanalı ayarlar.',
            guildOnly: true,
			throttling: {
                usages: 3,
                duration: 5
            },
            args: [
                {
                    key: 'channel',
                    prompt: 'Hangi kanal duyuru kanalı olarak kullanılsın? (#kanalismi şeklinde yazınız.)',
                    type: 'channel'
                }
            ]
        });
    }

    hasPermission(msg) {
        if(!msg.guild) return this.client.isOwner(msg.author);
        return this.client.isOwner(msg.author) || msg.member.hasPermission("MANAGE_GUILD");
    }

    async run(message, args) {

        const { channel } = args;
        message.guild.settings.set('duyuruKanal', channel.id);
        return message.channel.send(`Duyuru kanalı <#${channel.id}> kanalı olarak ayarlandı.`);
    }
};
