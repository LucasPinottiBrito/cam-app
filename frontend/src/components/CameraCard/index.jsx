/* eslint-disable react/prop-types */
import { useState } from 'react'
import Modal from '../Modal';
import StreamPlayer from '../StreamPlayer/index'
import * as IoIcons from "react-icons/io";
import './styles.css'

const CameraCard = ({cameraId})=>{
  const [openModal, setOpenModal] = useState(false)
  const [player, setPlayer] = useState(null)
  const cameraNumber = 9999 - parseInt(cameraId)


  return(
    <div className='stream'>
      <Modal isOpen={openModal} player={player} setOpenModal={(state)=>{setOpenModal(state)}}>
        <StreamPlayer setPlayer={setPlayer} cameraId={cameraId}/>
      </Modal>
      <div className="preview">
        <IoIcons.IoMdPlay size={60} color='#f7f7f7' onClick={()=>{
          setOpenModal(true)
        }}/>
      </div>
      <div className="footer">
        <h4 className="footer_title">Camera {cameraNumber}</h4>
      </div>
    </div>
  )
}

export default CameraCard