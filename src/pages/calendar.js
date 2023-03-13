import { Calendar } from 'react-calendar';
import List from '../components/list/list';
import { useSelector } from 'react-redux';
import AddClick from '../components/addButton';
import ModalList from '../components/modal-list';
import styled from 'styled-components';

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
`
const Title = styled.div`
color: var(--brown);
font-size: 12px;
font-weight: bolder;
`
const CalendarPage = () => {
    const data = useSelector((state) => { return state.data })
    const dayData = data.day
    const weekData = data.week
    const monthData = data.month

    let isCreate = useSelector(state => state.CU_state).isCreate

    return (
        <div>
            <Calendar />

            <ListTitle>
                <Title> Today</Title>
            </ListTitle>
            <Ul>
                {dayData.map((el) => {
                    return <List listData={el} />
                })}
            </Ul>
  

            <ListTitle>
                <Title> Week</Title>
            </ListTitle>
            <Ul>
                {weekData.map((el) => {
                    return <List listData={el} />
                })}
            </Ul>
 

            <ListTitle>
                <Title> Month</Title>
            </ListTitle>
            <Ul>
                {monthData.map((el) => {
                    return <List listData={el} />
                })}
            </Ul>

            <AddClick />
            {isCreate ? <ModalList about='favorites' /> : null}
        </div>
    )
}
export default CalendarPage