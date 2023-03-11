import React, { useState } from "react";
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import { update} from "../store/store";


const Dot = styled.div`
margin-top:3px;
width: 5px;
height: 5px;
border-radius: 50%;
background-color: black;
`

const ListContainer = styled.div`
display: flex;
justify-content: start ;

`
const ListCom = styled.div`
width: 315px;
margin-left: 2%;
margin-right: 2%;
font-size: 12px;
`
const InputCom = styled.input`
width: 315px;
margin-left: 2%;
margin-right: 2%;
font-size: 12px;
border: none;
`

const DeleteButton = styled.div`
margin-top:7px;//ㅋㅋㅋ 나중에 반응형 리팩할때 calc를 쓰던 %를 쓰던 해야할듯
height: 2.5px;
width: 17.5px;
background-color: var(--brown);
`
const UpdateButton = styled.div`
margin-top:3px;//ㅋㅋㅋ 나중에 반응형 리팩할때 calc를 쓰던 %를 쓰던 해야할듯
width: 30px;
font-size: 12px;
color: var(--brown);
`

function List({ listData, remove }) {
    let CU_state = useSelector(state=>state.CU_state)
    let isUpdateInitial = CU_state.isUpdate;
    
  
    let dispatch = useDispatch()

    let [updateText, setUpdateText] = useState(listData.text)
    let [isUpdate,setIsUpdate] = useState(isUpdateInitial)

    const removeHandler = (id) => {
        dispatch(remove(id))
    }
    const updateHandler = (e)=>{
        setUpdateText(e.target.value)
    }
    const handleKey = (e) =>{
        if(e.key === 'Enter'){
            let upDateInfo = {
                ...listData,
                text:updateText
            }
            dispatch(update(upDateInfo))
            dispatch(setIsUpdate(!isUpdate))
        } 
    }


    return (
        <ListContainer onKeyUp={handleKey}>
            <Dot />
            {isUpdate ? <InputCom name  = {listData.id} value={updateText}
            onChange = {updateHandler} />:<ListCom>{listData.text}</ListCom>}

            {/* <input onChange={updateHandler} value={listData.text}/> */}
            <UpdateButton onClick={()=>{setIsUpdate(!isUpdate)}} >수정</UpdateButton>
            <DeleteButton onClick={()=>{removeHandler(listData.id)}}/>
        </ListContainer>
    )
}
export default List 