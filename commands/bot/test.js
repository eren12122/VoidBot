const commando = require('discord.js-commando');
var cleverbot = require("cleverbot.io"),

 TalkCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'talk',
      group: 'bot',
      memberName: 'talk',
      description: "Shows information about Mitro",
      aliases: ['t']
    });
  }
  async run(message, args) {
    cleverb = new cleverbot("private", "private");
    cleverb.setNick("Nitro");
    bot.create(function (err, session) {
      bot.ask("Just a small town girl", function (err, response) {
        console.log(response); // Will likely be: "Living in a lonely world"
      });
});
  }
}

module.exports = TalkCommand;