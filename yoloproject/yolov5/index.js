const express = require('express')
const { spawn } = require('child_process')
const app = express()
const port = 3002

app.get('/', (req, res) => {
  let dataToSend
  let largeDataSet = []
  // spawn new child process to call the python script
  const python = spawn('python', ['detect.py'])
  console.log("1",largeDataSet)
  // collect data from script
  python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...')
    //dataToSend =  '';
    largeDataSet.push(data)
    
  })

  // in close event we are sure that stream is from child process is closed
  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`)
    // send data to browser
    console.log(largeDataSet)
    const ddd = largeDataSet.join('') 
    console.log(ddd.split('\r\n'))
    const jhj = ddd.map((item) => {
      if (item[0])
        return item[0]
    })
    console.log(jhj)

    res.json(largeDataSet)
    
  })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})
