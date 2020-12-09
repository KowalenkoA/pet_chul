import React, { useEffect, useState } from 'react';
import { IDataSet } from '../../App';
import './table.scss';
import TableLine from './tableLine';
import { v4 as uuid} from 'uuid';

interface tableProps {
    dataSet: Array<IDataSet>
}

const Table: React.FC<tableProps> = (props) => {
    
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
                        {props.dataSet.map( row => <TableLine key={uuid()} row={row} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;