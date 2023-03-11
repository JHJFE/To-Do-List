import React from "react";
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import { remove, IsCreate } from "../../store/store";
import List from "../list";
import { Daymark, Weekmark, Monthmark } from "../marks";
import ModalList from "../modal-list";

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

function FavoriteList() {
    let favoritesData = useSelector((state) => { return state.favorites })
    let stateData = useSelector(state=>state.CU_state)
    let isCreate = stateData.isCreate
    console.log(stateData)
    let dispatch = useDispatch();
    // favorites 데이터 담김
    return (
        <main>
            <Ul>
                {favoritesData.map((el) => {
                    return (
                        <section key = {el.id} style={{ marginTop: '17px'}}>
                            <List remove={remove} listData = {el} />
                            <MarkContainer>
                                <Daymark />
                                <Weekmark />
                                <Monthmark />
                            </MarkContainer>
                        </section>
                    )
                })}
            </Ul>
            <div onClick={()=>{dispatch(IsCreate())}} className="add-button">+</div>
            {isCreate? <ModalList/>:null}
           
        </main>
    )
}
export default FavoriteList