import styled from 'styled-components'
import imgUrl from '../../assets/images/CAlogo.png'
import Menu from '../Menu/Menu'
import { useEffect } from "react"

const HeaderStyle = styled.div`
  width: 100%;
  height: 10vh;
  background-color: var(--black);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const Header = ()=>{
  useEffect(()=>{
    document.getElementById('logo').src = imgUrl
  },[])

  return(
    <HeaderStyle>
      <img id="logo" height={30}/>
      <Menu active={false}>

      </Menu>
    </HeaderStyle>
  )
}

export default Header