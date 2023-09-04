const express = require('express');
const Stream = require('node-rtsp-stream')
const app = express();
const port = 3000;

const stream = new Stream({
  name: 'name',
  streamUrl: 'rtsp://admin:12345@192.168.15.22:55401/Streaming/Channels/101',
  wsPort: 9999,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', 
    '-r': 30
  }
})

// app.get('/', (req, res) => {

// });