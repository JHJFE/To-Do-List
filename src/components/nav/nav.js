import React from "react";
import styled from "styled-components";
import Toggle from "./toggle";

const NavContainer = styled.nav`
display: flex;
padding: 0 20px;
align-items: center;
justify-content: space-between;

background-color: var(--brown);
width: 393px;
height: 52px;
margin-top: 62px; // calc((62px/852px)*100%); 이거 어떻게 사용하는지 아름님한테 내일 물어보자
//border: 1px solid blue;
`

const NavMenuContainer = styled.section`

height: 37px;
display: flex;
justify-content: space-between;
align-items: center;
width:160px ;// 피그마랑 같이 하면 다른 느낌인데..
//border: 1px solid red;
`
const NavMenu = styled.div`
color: var(--beige);
font-size: 12px;
font-weight: bolder;
`
//height: calc(700px / 100vh * 100%) ; calc 사용 예시!
function Nav() {
    return (
        <>
            <NavContainer>
                <NavMenuContainer>
                    <NavMenu>Calendar</NavMenu>
                    <NavMenu>Favorites</NavMenu>
                </NavMenuContainer>
                <Toggle />
            </NavContainer>
           
        </>
    )
}

export default Nav