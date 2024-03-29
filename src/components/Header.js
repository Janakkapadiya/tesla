import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';


function Header() {

    const [burgerStatus,setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car,index)=>(
                      <a key={index} href='#'>{car}</a>
                ))}
               
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CostomMenu onClick={()=>setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrap>
                    <Close onClick={()=>setBurgerStatus(false)}/>
                </CloseWrap>
                {cars && cars.map((car,index)=>(
                      <li key={index} href='#'>{car}</li>
                ))}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">CuberTruck</a></li>
                <li><a href="#">Roadaster</a></li>
               </BurgerNav>

        </Container>
    )
}

export default Header

const Container = styled.div`
 min-height:50px; 
 position: fixed;
 display: flex;
 align-items: center;
 justify-content:space-between; 
 padding:0 20px;
 left: 0;
 right:0;
 top: 0;
 z-index: 1;
`

const Menu = styled.div`
display: flex;
align-items: center;
flex: 1;
justify-content: center;

a{
font-weight: 600;
text-transform: uppercase;
padding: 0 10px;
flex-wrap: nowrap;
}

@media(max-width:760px) {
display: none;

}

`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
a{
    font-weight: 700;
    text-transform: uppercase;
    margin-right: 10px;
    }
`

const CostomMenu = styled(MenuIcon)`
   cursor: pointer;

`
const BurgerNav = styled.div`
position: fixed;
top:0;
bottom:0;
right:0;
background: white;
width: 300px;
list-style:none;
padding:20px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props => props.show ?  'translateX(0)' : 'translateX(100%)'};
transition: transform 0.3s ease-in;
li{
    padding:15px 0;
    border-bottom: 1px solid lightblue;

    a{
        font-weight: 600;
    }
}
`
const Close = styled(CloseIcon)`
text-align: end;
cursor: pointer;

`
const CloseWrap = styled.div`
display:flex;
justify-content: flex-end;

`