import { Calendar } from 'react-calendar';
import List from '../components/list/list';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import AddClick from '../components/addButton';
import ModalList from '../components/modal-list';
import styled from 'styled-components';
import Modal from '../components/modal';



const CalendarContainer = styled.div` // 캘린더 컨테이너
max-width: 393px; // 가로 폭
.react-canlelndar__navigation{
    display: flex; // 내부 요소 flex
   
}
.react-calendar__month-view__weekdays{
    text-align: center;
}
button{
    background-color: rgba( 255, 255, 255, 0 );
    border: none;
    border-radius: 15px;
    height:30px;
  
    &:focus{
        background-color: var(--hover);
        
        color:white;
    }
    /* &:active{
        background-color: var(--hover);
        opacity: 90%;
        color:white;
    } */
   
}
`

const Ul = styled.ul`
display: flex;
flex-direction: column;
padding: 0 20px;
`

const ListTitle = styled.div`
display: flex;
align-items : center;
background-color: var(--beige);
width: 393px;
height: 52px;
margin-top: 62px; 
padding: 20px;
margin-bottom: 20px;
&.dark{
transition: all 1s;
  background-color: var(--label);
  
}
`
const Title = styled.div`
color: var(--brown);
font-size: 12px;
font-weight: bolder;
&.dark{
    color: var(--beige);
}

`
const CalendarPage = () => {
    const [now, setNow] = useState(new Date())
    const [isToDo, setIsToDO] = useState(false)
    let planedDates = []// 중복해서 들어가는걸 방지하는게 나을까 그냥 한 라인이라도 줄이는게 나을까..
    let mode = useSelector((state) => state.mode)
    let [clickedDate, setClickedDate] = useState('')
    const data = useSelector((state) => { return state.data })

    const dayData = data.day
    const weekData = data.week
    const monthData = data.month
    const markDay = dayData.map(el => el.createdAt)
    const markWeek = weekData.map(el => el.createdAt)
    const markMonth = monthData.map(el => el.createdAt)
    const moment = require('moment')

    //const [mark,setMark] = useState(markDay)

    let isCreate = useSelector(state => state.CU_state).isCreate

    const dayClickHandler = (date) =>{
        planedDates.includes(date) ? setIsToDO(true):setIsToDO(false) // 일정있으면 isToDO true로
        setClickedDate(date)
        //console.log(planedDates.includes(date))
        //console.log(isToDo)
    }

    
    return (
        <div>
            <CalendarContainer>
                <Calendar locale='en' onClickDay={(date)=>{ dayClickHandler(moment(date).format("YYYY-MM-DD"))}} onChange={setNow} value={now} defaultValue={new Date()}
                    tileContent={({ date, view }) => {
                        const check = [false, false, false]
                        const formedDate = moment(date).format("YYYY-MM-DD")
                        if (markDay.find((x) => x === formedDate)) {
                            check[0] = true
                            planedDates.push(formedDate)
                        }
                        if (markWeek.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                            check[1] = true
                            planedDates.push(formedDate)
                        }
                        if (markMonth.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                            check[2] = true
                            planedDates.push(formedDate)
                        }
                        return (
                            <div className='row-center'>
                                {check[0] ? <div className="dot day-dot"></div> : null}
                                {check[1] ? <div className="dot week-dot"></div> : null}
                                {check[2] ? <div className="dot month-dot"></div> : null}
                            </div>
                        )
                    }} />
            </CalendarContainer>
            {isToDo ? <Modal date = {clickedDate}/> : null}
            <ListTitle className={mode ? null : 'dark'} >
                <Title className={mode ? null : 'dark'}> Today</Title>
            </ListTitle >
            <Ul>
                {dayData.map((el) => {
                    return <List key={el.id} listData={el} />
                })}
            </Ul>


            <ListTitle className={mode ? null : 'dark'}>
                <Title className={mode ? null : 'dark'}> Week</Title>
            </ListTitle>
            <Ul>
                {weekData.map((el) => {
                    return <List key={el.id} listData={el} />
                })}
            </Ul>


            <ListTitle className={mode ? null : 'dark'}>
                <Title className={mode ? null : 'dark'}> Month</Title>
            </ListTitle>
            <Ul>
                {monthData.map((el) => {
                    return <List key={el.id} listData={el} />
                })}
            </Ul>

            <AddClick />
            {isCreate ? <ModalList about='favorites' /> : null}
        </div>
    )
}
export default CalendarPage