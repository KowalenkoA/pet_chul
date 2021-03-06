import React, { useEffect, useState } from 'react';
import './App.css';
import Sort from './modules/sort/sort';
import Table from './modules/table/table';
import Filter from './modules/filter/filter';
import Prev from './modules/prev/prev';
import { setDataIn, setEditFavorite, setFilterDataset } from './store/dataSet/actions';
import {connect} from 'react-redux';
let data: Array<IDataSet> = require('./data.json');

export interface IDataSet {
    id: number;
    favourite: boolean;
    name: string;
    age: number;
    phone: string;
    image: string;
    phrase: string;
    video: string;
}

interface appProps {
  setDataIn: (arr: Array<IDataSet>) => void;
  dataRedux: Array<IDataSet>;
  arhDataSet: Array<IDataSet>;
  setEditFavorite: (val: number) => void;
  setFilterDataset: (arr: Array<IDataSet>) => void;
}

const App: React.FC<appProps> = (props) => {
  const [btStat, setBtStat] = useState<boolean>(false);

  useEffect(() => {
    //data.map( row => props.setDataIn(row));
    props.setDataIn(data);
    //setActData(data.slice(0, 10));
  }, [])

  const testClick = () => {
    console.log( props.dataRedux);
  }

  return (
    <div className="App">
      <div className='dfr jcc wd1'>
        <Sort setDataIn={props.setDataIn}
              dataRedux={props.dataRedux} 
        />
        <div className='dfr'>
          <button className='button' onClick={() => setBtStat(false)}>TABLE</button>
          <button className='button' onClick={() => setBtStat(true)}>PREV</button>
          <button onClick={testClick}>TEST</button>
        </div>
      </div>
      <div className='dfc jcc wd1'>
        <Filter dataSet={props.dataRedux} arhDataSet={props.arhDataSet} setFilterDataset={props.setFilterDataset}/>
      </div>
      {btStat && <Prev dataSet={props.dataRedux} setEditFavorite={props.setEditFavorite}/>}
      {!btStat && <Table dataSet={props.dataRedux} setEditFavorite={props.setEditFavorite} setFilterDataset={props.setFilterDataset}/>}
    </div>
  );
}

//export default App;

const pushStateToProps = (state: any) => {
  return{
      dataRedux: state.dataSet.dataSet,
      arhDataSet: state.dataSet.arhDataSet
  };
};

const pushDispatchToProps = {
  setDataIn,
  setEditFavorite,
  setFilterDataset
};

export default connect(pushStateToProps, pushDispatchToProps)(App);