const aoijs = require("aoi.js")

const express = require('express')

const app = express();

const port = 3000

app.get('/', (req, res) => res.send('Uraraka Is online'))

app.listen(port, () =>

console.log(`Your app is listening to a https://localhost:${port}`)

);

const bot = new aoijs.Bot({

token: "ODgyMTE2MDgyOTAxNTk4MjY5.YS2snw.foitAYZTDxayAjNrOM8Ir8WbCeM", //Discord Bot Token

prefix: "u" //Discord Bot Prefix

})

bot.onMessage() //Allows to execute Commands

bot.command({

name: "ping", //Trigger name (command name)

code: `Pong! $pingms` //Code

})

bot.loadCommands('./commands')

bot.readyCommand({

    channel: "", //You can use this or not

    code: `$log[Ready on $userTag[$clientID]]` //Example Ready on Client

})

bot.command({

name: "embed", //Trigger name (command name)

code: `

$author[$splitText[1];$userAvatar]

$title[$splitText[2]]

$description[$splitText[3]]

$color[$splitText[4]]

$footer[$splitText[5]]

$thumbnail[$userAvatar]

$image[$splitText[6]] 

$textSplit[$message;/]

$suppressErrors[Correct usage: [prefix]embed author/titel/description/color/footer/thumbnail/image]`

})






bot.variables({

  warn: ""

})

bot.variables({

  reason: ""

})



  

