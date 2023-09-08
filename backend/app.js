const https =  require('https');
const fs = require('fs')
const express = require('express');
const Stream = require('node-rtsp-stream')
const app = express();

const server = https.createServer({
    key: fs.readFileSync('./config/ca.key'),
    cert: fs.readFileSync('./config/ca.crt')
  }, app
)

const stream = new Stream({
  name: 'name',
  streamUrl: 'rtsp://admin:12345@192.168.15.25:554/Streaming/Channels/101',
  wsPort: 9999,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', 
    '-r': 30
  }
})

// app.get('/', (req, res) => {

// });