"use client"
import { useRef, useEffect } from 'react'

export const StreamPlayer = () => {
    
    const streamRef = useRef(null)

    useEffect(() => {
        const { JSMpeg } = require('./jsmpeg.min.js')
        const player = new JSMpeg.Player('ws://localhost:9999', {
            canvas: streamRef.current
        })
    }, [])

  return <canvas ref={streamRef} id="stream-canvas"></canvas>
}