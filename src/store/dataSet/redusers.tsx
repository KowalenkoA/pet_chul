import { IDataSet } from "../../App";


const defaultState = {
    dataSet: [{
        id: 0,
        favourite: false,
        name: 'string',
        age: 0,
        phone: 0,
        image: 'string',
        phrase: 'string',
        video: null,
    }]
}

export const dataReducer = (state = defaultState, action: any) => {
    switch (action.type){
        case 'ADD_DATA_IN_DATASET':     {
            return {...state, dataSet: action.payload}
        };
        case 'EDIT_FAVORITE': {
            state.dataSet[action.payload].favourite = !state.dataSet[action.payload].favourite
            return (state)
        };
        default: return state;
    }
};