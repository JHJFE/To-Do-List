import styled from "styled-components"
import { useSelector } from "react-redux"
import { useState } from "react"
const ModalContainer = styled.section`// position 어떻게 줄지 생각해봐야할듯
width:149xp;
height:182px ;
background-color: var(--modal);
padding: 10px;
margin: 10px;
`
const ShortList = styled.li`
margin: 10px;
color:white;
&.day{
    color: var(--day)
}
&.week{
    color: var(--week)
}
&.month{
    color: var(--month)
}
`
const Modal = ({ date }) => { // data 안에는 일,주,월 계획인지 분류가능하게 와야할듯
    const plan = []
    const data = useSelector((state) => state.data) //전체 데이터

    for (let key in data) {
        // console.log(data[key])
        if (key !== 'favorites') {
            const show = data[key].find((el) => el.createdAt === date)
            if (show) {
                const mData = {
                    type: key,
                    text: show.text
                }
                plan.push(mData)
            }
        }
    }

    return (
        <ModalContainer>
            {plan.map((el) => {
                return (
                    <ShortList className = {el.type}>{el.text}</ShortList>
                )
            })}
        </ModalContainer>
    )
}
export default Modal