import React, { useState } from "react";
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import { remove,update} from "../../store/store";


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

function List({ listData}) {
    let CU_state = useSelector(state=>state.CU_state)
    let isUpdateInitial = CU_state.isUpdate;
    
  
    let dispatch = useDispatch()

    let [updateText, setUpdateText] = useState(listData.text)
    let [isUpdate,setIsUpdate] = useState(isUpdateInitial)

    const removeHandler = (data) => {
       
        dispatch(remove(data))
    }
    const updateHandler = (e)=>{
        setUpdateText(e.target.value)
    }
    const  handleKey = async (e) =>{
        if(e.key === 'Enter'){
            let upDateInfo = {
                ...listData, // 바꾸려는 리스트 정보
                text:updateText //입력한 텍스트만 바꾸서 객체화
            }
            dispatch(update(upDateInfo))
            dispatch(setIsUpdate(!isUpdate)) 
            // 원인 추정 :  dispatch를 연속적으로 호출해서 문제가 발생함
            // Actions must be plain objects. Instead, the actual type was: 'undefined'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions
            // 대략적인 리엑스가 말해주는 해결책
            // => 비동기적인 dispatch 호출을 동기적으로 사용하기 위해서는 redux-thunk라는 것을 사용하는 것을 추천? 
        } 
    }


    return (
        <ListContainer onKeyUp={handleKey}>
            <Dot />
            {isUpdate ? <InputCom name  = {listData.id} value={updateText}
            onChange = {updateHandler} />:<ListCom>{listData.text}</ListCom>}

            {/* <input onChange={updateHandler} value={listData.text}/> */}
            <UpdateButton onClick={()=>{setIsUpdate(!isUpdate)}} >수정</UpdateButton>
            <DeleteButton onClick={()=>{removeHandler({id: listData.id, type: listData.type})}}/>
        </ListContainer>
    )
}
export default List 