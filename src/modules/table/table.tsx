import React, { useEffect, useState } from 'react';
import { IDataSet } from '../../App';
import './table.scss';
import TableLine from './tableLine';
import { v4 as uuid} from 'uuid';
import { act } from 'react-dom/test-utils';

interface tableProps {
    dataSet: Array<IDataSet>
}

let yPos: number = 0;

const Table: React.FC<tableProps> = (props) => {

    const [actData, setActData] = useState<Array<IDataSet>>([]);

    useEffect(() => {
        //console.log('asd')
        setActData(props.dataSet.slice(0, 10))
    },[props.dataSet]);

    useEffect( () => {
        //let arr = props.dataSet.slice(0, 10);
        //setActData(arr);
        document.addEventListener('wheel', scrollEvent, false); 
        document.addEventListener('scroll', scrollEvent, false); 
        return (() => {
            document.removeEventListener('wheel', scrollEvent, false);
            document.removeEventListener('scroll', scrollEvent, false);
        });
        // eslint-disable-next-line
    },[]);

    const scrollEvent = () => {
        let newPos = window.pageYOffset;
        let len = newPos - yPos;
        //yPos = window.pageYOffset;
        if ((newPos - 100) > yPos){
            yPos = newPos;
            addStrs();
        }else if ((newPos + 100) < yPos){
            yPos = newPos;
            removeStrs();
        }
        //console.log(yPos)
    }

    const addStrs = () => {
        let i = actData.length;
        console.log(actData)
        //setActData( props.dataSet.slice(0, (i + 10)));
    }

    const removeStrs = () => {
        let i = actData.length;
        console.log(actData)
        //setActData( props.dataSet.slice(0, (i - 10)));
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
                        {actData.map( row => <TableLine key={uuid()} row={row} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;