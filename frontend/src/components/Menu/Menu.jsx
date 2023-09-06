import { styled } from "styled-components";

const MenuStyle = styled.div`
  height: 100%;
  width: 50%;
  background-color: #121212;
`

const Menu = (active)=>{
  return(
    <>
      {active&&
        <MenuStyle>
          
        </MenuStyle>
      }
    </>
  )
}

export default Menu