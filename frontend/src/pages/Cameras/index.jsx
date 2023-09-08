import './styles.css'
import CameraCard from '../../components/CameraCard'

const Cameras = ()=>{
  return(
    <div className="Cameras">
      <CameraCard cameraId={'9999'}/>
      {/* <CameraCard cameraId={'9998'}/> */}
    </div>
  )
}

export default Cameras