import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add,IsCreate } from "../store/store";


const ModalContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 5px;
    background-color: var(--modal);
    margin-left: 20px;
    height: 170px;
    width: 351px;
    color:var(--beige);
    border-radius: 13px;
    
    position: absolute; // Main의 30% 위치 대충 핸드폰 정중앙에 항상 모달 뜨도록 함
    top:30%;
	transform:translateY(-30%);
   
`   


function ModalList({about}) {
    let data = useSelector((state) => state.data)
    let id
    id = about === 'favorites' ? data.favorites.length:null
    let dispatch = useDispatch();

    let [text, setText] = useState('');
    let [type, setType] = useState('');

    const textContent = (e) => {
        setText(e.target.value)
    }
    const typeContent = (e) => {
        setType(e.target.value)
    }
    const Addhandler = () => {
        console.log('핸들러')
        dispatch(add({ text, type, id, createAt: 'now' }))
        dispatch(IsCreate());
    }

    return (
        <ModalContainer>
            내용:
            <textarea placeholder="내용 입력" className="modal-input" rows="4" cols="50" onChange={textContent} />
            Type:
            <textarea placeholder="favorites, Day, Week, Month 중 하나 입력" className="modal-input" onChange={typeContent} />
            <div className="container-center">
                <button className="button" onClick={Addhandler}>ADD</button>
            </div>
        </ModalContainer>
    )
}

export default ModalList