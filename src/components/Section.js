import React from 'react'
import styled from 'styled-components'


function Section(props) {
    return (
        <Wrap bgImage={props.backgroundImage}>
          
            <ItemText>
                <h1>
                    {props.tital}
                </h1>
                <p>
                    {props.description}
                </p>
            </ItemText>
           
            <ButtonGroup>
                <LeftButton>
                    {props.leftBtnText}
                </LeftButton>
                {props.rightBtnText && <RightButton>
                    {props.rightBtnText}
                </RightButton>}

            </ButtonGroup>
            <DownArrow src="images/down-arrow.svg" />
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-size: cover; 
background-position: center;
background-repet:no-repeat;
background-image: url('images/model-s.jpg');
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image:${props => `url("/images/${props.bgImage}")`}

`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
`

const ButtonGroup = styled.div`
   margin: revert;
   display: flex;
   @media (max-width:700px){
    flex-direction: column;
    }
`

const LeftButton = styled.div`
     background-color:rgba(23,26,32,0.8);
     height:40px;
     width:250px;
     color:white;
     display:flex;
     margin: 20px;
     justify-content: center;
     align-items: center;
     border-radius:100px;
     opacity:0.85;
     text-transform:uppercase;
     font-size:12px;
     cursor:pointer;
     margin-bottom:-10px;

`
const RightButton = styled(LeftButton)`
      background: white;
      opacity: 0.50;
      color: black;
      
`
const DownArrow = styled.img`
margin-top: -280px;
height: 40px;
overflow-x: hidden;
margin-bottom: 50px;
animation: animateDown infinite 1.5s;

`

