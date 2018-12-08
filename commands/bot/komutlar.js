const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');

module.exports = class NewsCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'yardim',
			group: 'bot',
			memberName: 'yardim',
			description: 'Bot ile ilgili yeni özellikleri gösterir.',
			guildOnly: false,
			throttling: {
				usages: 1,
				duration: 10
			}
		});
	}

	async run(message) {
		if (message.guild) {
			var embed = new RichEmbed()
			.setAuthor('VoidBot', this.client.user.avatarURL)
			.setDescription(`Komutların Başına Ayarladığın Prefixi Yazınız Eğer Ayarlamadıysanız **vb!** veya **<@519216364469223434> Koyunuz!`)
			.addField(`SENDE SUNUCUNA EKLE!`, stripIndents`
			
anons-kanal-ayarla
ayarlar
giriş-çıkış-ayarla
link-engelle
log-ayarla
mod-log-ayarla
oto-rol-ayarla
hakkında
sunucular
ascii
balık-tut
düello
espri
slot
afk
avatar
havadurumu
kullanıcı-bilgi
zaman
ban
kick
reklam-taraması
sustur
konuştur
temizle
uyar
sunucu-bilgi
sunucu-ikon
`)

			.setColor("RANDOM")
			.setFooter('©' + (new Date()).getFullYear() + 'VoidBot', this.client.user.avatarURL)
			.setTimestamp()
			message.channel.send({embed});
		}
	}
};