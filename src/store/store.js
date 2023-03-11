import { configureStore, createSlice } from '@reduxjs/toolkit'

const getParsedDate = (createdAt) => {
    if (createdAt === 'now') {
        return new Date().toLocaleDateString('ko-KR');
    }

    return new Date(createdAt).toLocaleDateString('ko-KR'); // 날짜를 한글 형식으로 표현해줌
}

let favorites = createSlice({
    name: 'favorites',
    initialState: [ // 필요한 데이터있으면 그때 그때 추가할것
        {
            id: 0,
            createdAt: getParsedDate('2022-02-24T16:17:47.000Z'), // 트워터에서 사용한 날짜 형식 사용
            text: 'commit 하기',
            type: 'day'
        },
        {
            id: 1,
            createdAt: getParsedDate('2022-12-02T16:17:47.000Z'), // 트워터에서 사용한 날짜 형식 사용
            text: '월말 정산',
            type: 'day'
        },
        {
            id: 2,
            createdAt: getParsedDate('2022-03-21T16:17:47.000Z'), // 트워터에서 사용한 날짜 형식 사용
            text: '대충 2주에 한번 정보하는 계획',
            type: 'day'
        },
        {
            id: 3,
            createdAt: getParsedDate('2023-03-24T16:17:47.000Z'), // 트워터에서 사용한 날짜 형식 사용
            text: '자주 쓰는 어떤 일정',
            type: 'day'
        }],
    reducers: {
        remove(state, action) {
            return state.filter((list) => {
                return list.id !== action.payload
            })
        },
        add(state, action){
            console.log(action.payload)
            return [...state,action.payload]
        },
        update(state,action){
            console.log(action.payload)
            let id = action.payload.id
            let newData = action.payload
            
             return (state.map(el=>{
                return el.id === id ? newData: el
            })) // 상태도 콘솔 찍어보면 프로미스로 담겨있는거 같음
         
           
        }
    }

})

let CU_state = createSlice({
    name: 'CU_state',
    initialState: {
        isCreate:false,isUpdate:false
    },
    reducers: {
        IsCreate(state){
            return {...state,isCreate:!state.isCreate}
        }, IsUpdate(state){
            return {...state,isUpdate:!state.isUpdate}
        },
       
    }

})

export let { remove, add, update } = favorites.actions
export let {IsCreate,IsUpdate} = CU_state.actions

export default configureStore({
    reducer: {
        favorites: favorites.reducer,
        CU_state:CU_state.reducer
    }
})