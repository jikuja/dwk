//Full requirement:
// "Log output" application currently outputs a timestamp and a random string to the logs.

// Add an endpoint to request the current status (timestamp and string) and an ingress so that you can access it with a browser.

// You can just store the string and timestamp to the memory.

////////////////////////////////////////////
// log output
////////////////////////////////////////////
// too lazy to write own random functions to generate e.g. random uuid. Re-using existing libraries
const uuidv4 = require('uuid').v4

// requirement: Add an endpoint to request the current status (timestamp and string) .. ou can just store the string and timestamp to the memory.
// save randomString and "current timestamp globally"
let randomString
let ts

const outputString = () => {
    randomString = uuidv4()
    // req:  outputs it every 5 seconds with a timestamp
    ts = (new Date).toISOString()
    console.log(`${ts}: ${randomString}`)

    // req: outputs it every 5 seconds
    setTimeout(outputString, 5000)
}

// start the "loop"
outputString()


////////////////////////////////////////////
//  HTTP server part
////////////////////////////////////////////

const PORT = process.env.PORT || 3000

const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send({time: ts, random: randomString})
})

console.log(`Server started in port ${PORT}`)
app.listen(PORT)