import React, { useEffect, useState } from 'react';
import { IDataSet } from '../../App';
import './table.scss';
import TableLine from './tableLine';
import { v4 as uuid} from 'uuid';
import { act } from 'react-dom/test-utils';

interface ITableProps {
    dataSet: Array<IDataSet>;
    actData: Array<IDataSet>;
    setActData: (arr: Array<IDataSet>) => void;
}

let yPos: number = 0;

const Table: React.FC<ITableProps> = (props) => {

    const [actData, setActData] = useState<Array<IDataSet>>([]);
    const [num, setNum] = useState<number>(10);

    useEffect( () => {
        if (props.actData.length > 0){
            setActData(props.actData)
        }
        document.addEventListener('wheel', scrollEvent, false); 
        document.addEventListener('scroll', scrollEvent, false); 
        return (() => {
            document.removeEventListener('wheel', scrollEvent, false);
            document.removeEventListener('scroll', scrollEvent, false);
        });
        // eslint-disable-next-line
    },[props.actData]);

    const scrollEvent = () => {
        let newPos = window.pageYOffset;
        let len = props.actData.length;
        //yPos = window.pageYOffset;
        if ((newPos - yPos) > 200){
            //console.log('true' + len)
            yPos = newPos;
            addStrs(len);
        }/*else if ((newPos - yPos) < -200){
            console.log('false' + len)
            yPos = newPos;
            removeStrs(len);
        }*/
    }

    const addStrs = (val: number) => {
        let i = props.actData.length;
        if (val > 0){
            props.setActData( props.dataSet.slice(0, (val + 10)));
            setNum(num + 10);
        }
    }

    const removeStrs = (val: number) => {
        let i = props.actData.length;
        if (val > 10){
            props.setActData( props.dataSet.slice(0, (val - 10)))
        }  
    }
    
    return(
        <div className='dfc jcc wd1'>
            <div className='dfr jcc wd1'>
                <table className='wd1 table_body'>
                    <tbody>
                        <tr className='table_tr'>
                            <td className='table_td1'>
                                <div>LOGO</div>
                            </td>
                            <td>
                                <div>NAME</div>
                            </td>
                            <td>
                                <div>AGE</div>
                            </td>
                            <td>
                                <div>NUM</div>
                            </td>
                            <td className='table_td1'>
                                <div>STAR</div>
                            </td>
                        </tr>
                        {props.dataSet.map( (row, indx )=> <TableLine key={uuid()} row={row} indx={indx} num={num}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;