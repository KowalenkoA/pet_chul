import { IDataSet } from "../../App";

export const ADD_DATA_IN_DATASET = 'ADD_DATA_IN_DATASET';

export const setDataIn = (val: Array<IDataSet>) => ({
    type: 'ADD_DATA_IN_DATASET',
    payload: val
});
