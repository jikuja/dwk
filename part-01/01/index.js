//Full requirement: Create an application that generates a random string on startup, stores this string into memory, and outputs it every 5 seconds with a timestamp. e.g.

// too lazy to write own random functions to generate e.g. random uuid. Re-using existing libraries
const uuidv4 = require('uuid').v4

// req: generates a random string on startup, stores this string into memory
// the example output display repeating random value => save it globally and re-use
const randomString = uuidv4()

const outputString = () => {
    // req:  outputs it every 5 seconds with a timestamp
    ts = (new Date).toISOString()
    console.log(`${ts}: ${randomString}`)

    // req: outputs it every 5 seconds
    setTimeout(outputString, 5000)
}

// start the "loop"
outputString()