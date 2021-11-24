const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE ME",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")


    .setTitle(`Hello!`)


    .setDescription(`Server Moderator: **[Click Me](https://discord.com/api/oauth2/authorize?client_id=903630654976163851&permissions=8&scope=bot)**
    Server Helper: **[Click Me](https://discord.com/api/oauth2/authorize?client_id=903630654976163851&permissions=8&scope=bot)**`)


    .setColor("RANDOM")
    .setTimestamp(message.timestamp = Date.now())
     
    message.channel.send(embed)
   message.react('✅')
 }
};