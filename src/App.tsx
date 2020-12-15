import React, { useEffect, useState } from 'react';
import './App.css';
import Sort from './modules/sort/sort';
import Table from './modules/table/table';
import Prev from './modules/prev/prev';
import { setDataIn } from './store/dataSet/actions';
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
}

const App: React.FC<appProps> = (props) => {
  const [btStat, setBtStat] = useState<boolean>(false);
  const [sortInd, setSortInd] = useState<boolean>(false);
  const [actData, setActData] = useState<Array<IDataSet>>([]);

  useEffect(() => {
    //data.map( row => props.setDataIn(row));
    props.setDataIn(data);
    setActData(data.slice(0, 10));
  }, [])

  const testClick = () => {
    console.log( props.dataRedux);
  }

  const sortTable = (val: string) => {
    if (val === 'id'){
      if (sortInd){
        let arr = props.dataRedux.sort((a, b) => a.id > b.id ? 1: -1).slice();
        props.setDataIn(arr);
        setActData(arr.slice(0, actData.length))
      }else{
        let arr = props.dataRedux.sort((a, b) => a.id > b.id ? -1: 1).slice();
        props.setDataIn(arr);
        setActData(arr.slice(0, actData.length))
      }
    }else if (val === 'name'){
      if (sortInd){
        let arr = props.dataRedux.sort((a, b) => a.name > b.name ? 1: -1).slice();
        props.setDataIn(arr);
        setActData(arr.slice(0, actData.length))
      }else{
        let arr = props.dataRedux.sort((a, b) => a.name > b.name ? -1: 1).slice();
        props.setDataIn(arr);
        setActData(arr.slice(0, actData.length))
      }
    }else if (val === 'age'){
      if (sortInd){
        let arr = props.dataRedux.sort((a, b) => a.age > b.age ? 1: -1).slice();
        props.setDataIn(arr);
        setActData(arr.slice(0, actData.length))
      }else{
        let arr = props.dataRedux.sort((a, b) => a.age > b.age ? -1: 1).slice();
        props.setDataIn(arr);
        setActData(arr.slice(0, actData.length))
      }
    }
    
  }

  const changeSort = (val: boolean) => {
    setSortInd(val);
  }

  return (
    <div className="App">
      <div className='dfr jcc wd1'>
        <Sort sortInd={sortInd} 
              changeSort={changeSort}
              sortTable={sortTable} 
        />
        <div className='dfr'>
          <button className='button' onClick={() => setBtStat(false)}>TABLE</button>
          <button className='button' onClick={() => setBtStat(true)}>PREV</button>
          <button onClick={testClick}>TEST</button>
        </div>
      </div>
      {btStat && <Prev dataSet={props.dataRedux} actData={actData} setActData={setActData}/>}
      {!btStat && <Table dataSet={props.dataRedux} actData={actData} setActData={setActData}/>}
    </div>
  );
}

//export default App;

const pushStateToProps = (state: any) => {
  return{
      dataRedux: state.dataSet.dataSet
  };
};

const pushDispatchToProps = {
  setDataIn
};

export default connect(pushStateToProps, pushDispatchToProps)(App);