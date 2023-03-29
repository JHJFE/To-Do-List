import React from "react";
import styled from "styled-components";
import Toggle from "./toggle";
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import CalendarPage from '../../pages/calendar'
import Favorite from "../../pages/favorite";
import { useSelector } from "react-redux";

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
transition: all 1s;
&.darkgray{
background-color: var(--day);
}
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
    let mode = useSelector((state)=>state.mode)
    console.log(mode)
    return (
        <>
            <NavContainer className = {mode ?null:'darkgray'}>
                <NavMenuContainer>
                    <NavMenu>
                        <Link to='/calendar'>Calendar</Link>
                    </NavMenu>
                    <NavMenu>
                        <Link to='/favorite'>Favorite</Link>
                    </NavMenu>
                </NavMenuContainer>
                <Toggle />
            </NavContainer>
            <div className="main">
                <Routes >
                    <Route path='/' element={<Navigate replace to='/calendar' />} />
                    <Route path='/calendar' element={<CalendarPage />} />
                    <Route path='/favorite' element={<Favorite />} />
                </Routes>
            </div>
        </>
    )
}

export default Nav