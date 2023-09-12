/* eslint-disable react/prop-types */
import * as IoIcons from "react-icons/io";

const styles = {
  background: {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: '#7F7F7Fd7',
    zIndex: '1000',
  },
  container: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#f7f7f7',
    borderRadius: '15px',
    width: '70%',
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    JustifyContent: 'center'
  },
  close_button: {
    position: 'absolute',
    top: '0px',
    right: '5px',
    color: '#f7f7f7',
    height: '40px',
    width: '40px'
  },
  header: {
    width: '100%',
    height: '40px',
    backgroundColor: '#232323',
    borderTopRightRadius: '10px',
    borderTopLeftRadius: '10px',
  }
}

const Modal = ({ isOpen, player, setOpenModal, children })=>{

  if(isOpen){
    return(
      <div style={styles.background}>
        <div style={styles.container}>
          <div style={styles.header}>
            <IoIcons.IoIosClose style={styles.close_button} onClick={()=>{
              setOpenModal(false);
              player.destroy();
              console.log('aborted')
            }}/>
          </div>
          {children}
        </div>
      </div>
    )
  }else{
    return null
  }

}

export default Modal