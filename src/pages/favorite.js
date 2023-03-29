import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import List from "../components/list/list";
import { Daymark, Weekmark, Monthmark } from "../components/marks";
import ModalList from "../components/modal-list";
import AddClick from "../components/addButton";

const Ul = styled.ul`
display: flex;
flex-direction: column;
padding: 0 20px;
`
const MarkContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 30px;
position: relative;
`

function Favorite() {
    let favoritesData = useSelector((state) => { return state.data.favorites })
    let stateData = useSelector(state=>state.CU_state)
    let isCreate = stateData.isCreate

    return (
        <main>
            <Ul>
                {favoritesData.map((el) => {
                    return (
                        <section key = {el.id} style={{ marginTop: '17px'}}>
                            <List listData = {el} />
                            <MarkContainer>
                                <Daymark />
                                <Weekmark />
                                <Monthmark />
                            </MarkContainer>
                        </section>
                    )
                })}
            </Ul>
            <AddClick/>
            {isCreate? <ModalList about = 'favorites'/>:null}
           
        </main>
    )
}
export default Favorite