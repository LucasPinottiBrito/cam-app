/* eslint-disable react/prop-types */
import { useRef, useEffect } from 'react'
import { JSMpeg } from './jsmpeg.min.js'

const StreamPlayer = ({cameraId}) => {
    
    const streamRef = useRef(null)

    useEffect(() => {
        new JSMpeg.Player('ws://192.168.15.10:'+cameraId, {
            canvas: document.getElementById('canvas'+cameraId) // Canvas should be a canvas DOM element
        })	
    }, [])

  return <canvas ref={streamRef} id={"canvas"+cameraId}></canvas>
}

export default StreamPlayer