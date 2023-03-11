import React from "react";
import styled from "styled-components";
import { useState } from "react";
const ToggleContainer = styled.div`
  position: relative;

  > .toggle-container {
    width: 50px;
    height: 26px;
    border-radius: 30px;
    background-color: var(--beige);
  

  }


  > .toggle-circle {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: var(--brown);
    transition: all 1s;
 

    &.toggle--checked{
      -webkit-transform:  translateX(24px);
      
    }
  }
`;

const Desc = styled.div`
  color:black;
  display: flex;
  text-align: center;
`;

function Toggle() {
    const [isOn, setisOn] = useState(false);
    const toggleHandler = () => {
        setisOn(!isOn)
    };

    return (
        <>
            <ToggleContainer onClick={toggleHandler} >
                <div className= 'toggle-container' />
                <div className={isOn ? 'toggle-circle toggle--checked' : 'toggle-circle'} />
            </ToggleContainer>
        </>
    );
};

export default Toggle