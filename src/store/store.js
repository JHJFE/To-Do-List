import { configureStore, createSlice } from '@reduxjs/toolkit'

const getParsedDate = (createdAt) => {
    if (createdAt === 'now') {
        return new Date().toLocaleDateString('ko-KR');
    }

    return new Date(createdAt).toLocaleDateString('ko-KR'); // 날짜를 한글 형식으로 표현해줌
}

let data = createSlice({
    name: 'data',
    initialState: { // 필요한 데이터있으면 그때 그때 추가할것
        favorites: [{
            id: 0,
            createdAt: getParsedDate('2022-02-24T16:17:47.000Z'), // 트워터에서 사용한 날짜 형식 사용
            text: 'commit 하기',
            type: 'favorites'
        },
        {
            id: 1,
            createdAt: getParsedDate('2022-12-02T16:17:47.000Z'), // 트워터에서 사용한 날짜 형식 사용
            text: '월말 정산',
            type: 'favorites'
        },
        {
            id: 2,
            createdAt: getParsedDate('2022-03-21T16:17:47.000Z'), // 트워터에서 사용한 날짜 형식 사용
            text: '대충 2주에 한번 정보하는 계획',
            type: 'favorites'

        },
        {
            id: 3,
            createdAt: getParsedDate('2023-03-24T16:17:47.000Z'), // 트워터에서 사용한 날짜 형식 사용
            text: '자주 쓰는 어떤 일정',
            type: 'favorites'
        }],
        day: [
            {
                id: 0,
                text: '코플릿 도전',
                type: 'day'
            },
            {
                id: 1,
                text: '운동 1시간',
                type: 'day'
            },
            {
                id: 2,
                text: 'commit 하기',
                type: 'day'
            },
        ],
        week: [
            {
                id: 0,
                text: '주간 회의',
                type: 'week'
            },
            {
                id: 1,
                text: '힐링',
                type: 'week'
            },
        ],
        month: [
            {
                id: 0,
                text: '월간 회의',
                type: 'month'
            },
            {
                id: 1,
                text: '토이 프로젝트 같은거라도 ㅠㅠ',
                type: 'month'
            },
        ]
    },
    reducers: {
        remove(state, action) {
            console.log('remove에 전달되는 action',action.payload)
            let result = [] 
            switch (action.payload.type) {
                case 'favorites'
                    : result = state.favorites.filter((list) => list.id !== action.payload.id)
                    // console.log('갱신',newFavorites)
                    return { ...state, favorites: [...result] }

                case 'day'
                    : result = state.day.filter((list) => list.id !== action.payload.id)
                    console.log('day')
                    return { ...state, day: [...result] }
                case 'week'
                    : result = state.week.filter((list) => list.id !== action.payload.id)
                    return { ...state, week: [...result] }
                case 'month'
                    : result = state.month.filter((list) => list.id !== action.payload.id)
                    return { ...state, month: [...result] }
                default:
                    return
            }
        },
        add(state, action) {
            let result = []
            switch (action.payload.type) {
                case 'favorites'
                    : result = [...state.favorites, action.payload]
                    return { ...state, favorites: [...result] }
                case 'day'
                    : result = [...state.day, action.payload]
                    return { ...state, day: [...result] }
                case 'week'
                    : result = [...state.week, action.payload]
                    return { ...state, week: [...result] }
                case 'month'
                    : result = [...state.month, action.payload]
                    return { ...state, month: [...result] }
                default:
                    return
            }
        },
        update(state, action) {
            //console.log(action.payload)
            let id = action.payload.id
            let newData = action.payload
            console.log(state)
            const newFavorites = (state.favorites.map(el => {
                return el.id === id ? newData : el
            })) // 상태도 콘솔 찍어보면 프로미스로 담겨있는거 같음
            return { ...state, favorites: [...newFavorites] }
        }
    }

})

let CU_state = createSlice({
    name: 'CU_state',
    initialState: {
        isCreate: false, isUpdate: false
    },
    reducers: {
        IsCreate(state) {
            return { ...state, isCreate: !state.isCreate }
        }, IsUpdate(state) {
            return { ...state, isUpdate: !state.isUpdate }
        },
    }
})


export let { remove, add, update } = data.actions
export let { IsCreate, IsUpdate } = CU_state.actions


export default configureStore({
    reducer: {
        data: data.reducer,
        CU_state: CU_state.reducer
    }
})