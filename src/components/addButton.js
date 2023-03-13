import React from "react"
import { useDispatch } from "react-redux";
import { IsCreate } from "../store/store";
function AddClick() {
    let dispatch = useDispatch();
    return (
        <div onClick={()=>{dispatch(IsCreate())}} className="add-button">+</div>
    )
}

export default AddClick