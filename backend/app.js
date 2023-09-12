const Stream = require('node-rtsp-stream-jsmpeg')

const options = {
  name: 'streamName',
  url: 'rtsp://admin:12345@192.168.15.20:554/Streaming/Channels/101',
  wsPort: 9998
}

const stream = new Stream(options)

stream.start()