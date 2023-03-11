//import React from "react";
import styled from "styled-components";

const Mark = styled.div`
width: 8px;
height: 8px;
border-radius: 50%;
background-color: var(--day);
`
export const Daymark =() => {
    return (
        <Mark/>
    )
}

export const Weekmark =() => {

    return (
        <Mark style={{background:'var(--week)'}}/>
    )
}
export const Monthmark =() => {

    return (
        <Mark style={{background:'var(--month)'}}/>
    )
}