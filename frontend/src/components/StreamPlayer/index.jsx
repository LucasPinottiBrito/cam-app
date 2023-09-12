/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useRef, useEffect, useState } from 'react'
import JSMpeg from '@cycjimmy/jsmpeg-player'

const StreamPlayer = ({cameraId, setPlayer}) => {
    const [created, setCreated] = useState(false)
    const streamRef = useRef(null)

    var player = null

    useEffect(() => {
        if(!created){
            if(!player){
                player = new JSMpeg.Player('ws://192.168.15.27:'+cameraId, {
                    canvas: document.getElementById('canvas'+cameraId)
                })
                setPlayer(player)
            }
        }
    }, [])

  return <canvas style={{margin: '15px', width: '90%', maxWidth: '400px'}} ref={streamRef} id={"canvas"+cameraId}></canvas>
}

export default StreamPlayer