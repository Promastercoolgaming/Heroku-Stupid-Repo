const discord = require("discord.js")
const bot = new discord.Client()

bot.on('ready', () => {
    bot.user.setActivity("Something....")
    console.log("Logged in successfully :D")
})

bot.on('message', message => {
    if(message.content === "!ping") {
        message.channel.send("pong!")
    }
})

bot.login("ODMyMTIyNTQ4MDY1MDA5Njc0.YHfMgw.fhBbBF1oUnxN2PEAU5LQ76Y5XYc") //Your own token
