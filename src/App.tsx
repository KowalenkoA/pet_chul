import React, { useEffect, useState } from 'react';
import './App.css';
import Sort from './modules/sort/sort';
import Table from './modules/table/table';
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

  useEffect(() => {
    //data.map( row => props.setDataIn(row));
    props.setDataIn(data)
  }, [])

  const testClick = () => {
    console.log( props.dataRedux);
  }

  const idSort = () => {
    console.log(props.dataRedux[0])
    if (props.dataRedux[0].id > 1){
      console.log(true)
      let arr = props.dataRedux.sort((a, b) => a.id > b.id ? 1: -1).slice();
      props.setDataIn(arr);
      setSortInd(false);
    }else{
      console.log(false)
      let arr = props.dataRedux.sort((a, b) => a.id > b.id ? -1: 1).slice();
      props.setDataIn(arr);
      setSortInd(true);
    }
  }

  const changeSortInd = (val: boolean) => {
    setSortInd(val);
  }

  return (
    <div className="App">
      {console.log('render')}
      <div className='dfr jcc wd1'>
        <Sort sortInd={sortInd} idSort={idSort} />
        <div className='dfr'>
          <button className='button' onClick={() => setBtStat(false)}>TABLE</button>
          <button className='button' onClick={() => setBtStat(true)}>PREV</button>
          <button onClick={testClick}>TEST</button>
        </div>
      </div>

      {!btStat && <Table dataSet={props.dataRedux}/>}
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