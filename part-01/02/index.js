// Full requirement: 
// Create a web server that outputs "Server started in port NNNN" when it is started 
// and deploy it into your Kubernetes cluster.
//
// Please make it so that an environment variable PORT can be used to choose that port. 
// You will not have access to the port when it is running in Kuberetes yet. 
// We will configure the access when we get to networking.

const PORT = process.env.PORT || 3000

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Not sure what to configure and return!')
})

console.log(`Server started in port ${PORT}`)
app.listen(PORT)