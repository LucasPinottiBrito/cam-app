import { useRef, useEffect } from 'react'
import { JSMpeg } from './jsmpeg.min.js'

const StreamPlayer = () => {
    
    const streamRef = useRef(null)

    useEffect(() => {
        new JSMpeg.Player('ws://192.168.15.30:9999', {
            canvas: streamRef.current
        })
    }, [])

  return <canvas ref={streamRef} id="stream-canvas"></canvas>
}

export default StreamPlayer