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
    setEditFavorite: (val: number) => void;
}

let Table: React.FC<ITableProps> = (props) => {
    let kol: number = 0;
    //console.log('render OSN');

    useEffect( () => {
        document.addEventListener('wheel', scrollEvent, false);
        document.addEventListener('scroll', scrollEvent, false);
        return( () => {
            document.removeEventListener('wheel', scrollEvent, false);
            document.removeEventListener('scroll', scrollEvent, false);
        }) 
        // eslint-disable-next-line
    },[]);

    useEffect( () => {
        kol = 0;
        showLine();
    },[props.dataSet])

    const scrollEvent = () => {
        if (((document.documentElement.scrollHeight - document.documentElement.scrollTop) - 100) <= document.documentElement.clientHeight){
            showLine();
        }
    }

    const showLine = async() => {
        for (let i = kol; i < (kol + 10); i++){
            let element= document.getElementById('tr_' + i);
            if (element){
                await sleep(100)
                //element.style.display = 'table-row';
                element.classList.add("table_block_active")
            }
        } 
        kol += 10;
    }

    const hideLine = async() => {
        console.log(kol)
        for (let i = 0; i <= kol; i++){
            
            let element= document.getElementById('tr_' + i);
            if (element){
                await sleep(50)
                //element.style.display = 'table-row';
                element.classList.add("table_block_deact")
            }
        } 
        kol += 10;
    }

    const sleep = (ms:number) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    return(
        <div className='dfc jcc wd1'>
            <div className='dfc jcc wd1'>
                {/*<table className='wd1 table_body'>
                    <tbody>
                        <tr className='table_tr2'>
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
                        {props.dataSet.map( (row, indx )=> <TableLine key={uuid()} row={row} indx={indx} str={uuid()}/>)}
                    </tbody>
                </table>*/}
                {/*<div className='table_block_active dfr jcc wd1 border_l'>
                    <div className='tb_cell1'>LOGO</div>
                    <div className='tb_cell2'>NAME</div>
                    <div className='tb_cell3'>AGE</div>
                    <div className='tb_cell4'>NUM</div>
                    <div className='tb_cell5'>STAR</div>
            </div>*/}
                {props.dataSet.map( (row, indx )=> <TableLine key={uuid()} row={row} indx={indx} str={uuid()} setEditFavorite={props.setEditFavorite}/>)}
            </div>
        </div>
    )
}

export default Table //= React.memo(Table);