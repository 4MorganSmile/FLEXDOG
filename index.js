const discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTYzOTkzMDA1NDQwNzcwMDY4.GQNnd2.2IewQgcDaYwTGTIN9KAO3Ijd5yluXSWVvUAoZI"

const client = new discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
}) 

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("hello world!")
    }
})

client.login(process.env.TOKEN)