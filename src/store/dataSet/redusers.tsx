import { IDataSet } from "../../App";

/*const dataSet: dataSet = {
    id: 0,
    favourite: false,
    name: 'def',
    age: 10,
    phone: '000',
    image: 'def',
    phrase: 'def',
    video: 'def',
};*/


const defaultState = {
    dataSet: [],
    test: ''
}

export const dataReducer = (state = defaultState, action: any) => {
    switch (action.type){
        case 'ADD_DATA_IN_DATASET':     {
            //console.log(data2.dataSet)
            return {...state, dataSet: action.payload}
        };
        /*case 'RELATION_CHANGE_AT':          return {...state, at: action.payload};
        case 'RELATION_CHANGE_RT':          return {...state, rt: action.payload};
        case 'AUTH_CHANGE_STATUS':          return {...state, isAuthorize: action.payload};
        case 'AUTH_CHANGE_USER_NAME':          return {...state, userName: action.payload};
        case 'AUTH_CHANGE_USER_ROLE':          return {...state, role: action.payload};
        case 'AUTH_CHANGE_USER_DOLSN':          return {...state, dolsn: action.payload};*/
        default: return state;
    }
};