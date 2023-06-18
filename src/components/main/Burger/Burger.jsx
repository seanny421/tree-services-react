import styled from 'styled-components';
import { StateContext } from '../../../App';
import React, { useContext } from 'react';

function Burger(){
  const {mobileNavOpen, setmobileNavOpen} = useContext(StateContext)
  return (
    <StyledBurger open={mobileNavOpen} onClick={() => setmobileNavOpen(!mobileNavOpen)} color="#FFF">
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

const StyledBurger = styled.button`
  position: fixed;
  position: relative;
  top: 15%;
  right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    // box-shadow: ${({ open }) => open ? '' : '2px 2px #00E0FF'};
    width: 2rem;
    height: 0.25rem;
    background: ${(props) => props.color};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }

  }

`;

export default Burger;
