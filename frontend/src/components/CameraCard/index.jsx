/* eslint-disable react/prop-types */
import { useState } from 'react'
import StreamPlayer from '../StreamPlayer/index'
import * as IoIcons from "react-icons/io";
import './styles.css'

const CameraCard = ({cameraId})=>{
  const [modalView, setModalView] = useState(false)

  return(
    <div className='stream'>
      {modalView&&
        <StreamPlayer cameraId={cameraId}/>
      }
      <div className="preview">
        <IoIcons.IoMdPlay size={60} color='#f7f7f7' onClick={()=>{setModalView(!modalView)}}/>
      </div>
      <div className="footer">
        <span>Camera {cameraId}</span>
      </div>
    </div>
  )
}

export default CameraCard