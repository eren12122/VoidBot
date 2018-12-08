const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class channelinfoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'ayarlar',
			group: 'ayarlar',
			memberName: 'ayarlar',
			description: 'Sunucudaki ayarları gösterir.',
			guildOnly: true,
		});
	}

	hasPermission(msg) {
        if(!msg.guild) return this.client.isOwner(msg.author);
        return this.client.isOwner(msg.author) || msg.member.hasPermission('MANAGE_GUILD');
    }

	async run(message) {

		const modlog = message.guild.channels.get(message.guild.settings.get('modLog'))
		const logsChannel = message.guild.channels.get(message.guild.settings.get('logsChannel'))
		const girisCikis = message.guild.channels.get(message.guild.settings.get('girisCikis'))
		const girisRol = message.guild.roles.get(message.guild.settings.get('girisRol'))
		const linkEngel = message.guild.settings.get('linkEngel')

		const embed = new RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`${message.guild.name} Adlı Sunucunun Ayarları`)
		.setThumbnail(message.guild.iconURL)
		.addField('❯ Mod-Log Kanalı', modlog ? modlog  : `Bu Kanal Ayarlanmamış :x:`, true)
		.addField('❯ Log Kanalı', logsChannel ? logsChannel : `Bu Kanal Ayarlanmamış :x:`, true)
		.addField(`❯ Giriş Çıkış Kanalı📤`, girisCikis ? girisCikis : `Bu Kanal Ayarlanmamış :x:`, true)
		.addField(`❯ Otomatik Rol/Giriş Rolü`, girisRol ? girisRol : `Oto-Rol Ayarlanmamış :x:`, true)
		.addField(`❯ Link Engelleme Sistemi`, this.client.provider.get(message.guild.id, 'linkEngel', []) ? `✅` : `:x:`, true)
		return message.embed(embed)

	}
}
