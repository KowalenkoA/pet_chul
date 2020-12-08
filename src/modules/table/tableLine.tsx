import React from 'react'
import { IDataSet } from '../../App';
import './table.scss'

interface tableLineProps {
    row: IDataSet
}

const TableLine: React.FC<tableLineProps> = (props) => {
    return(
        <tr className='table_tr'>
            <td className='table_td1'>
                <img className='table_img' src={"/images/"+props.row.image+".svg"} />
            </td>
            <td>
                <div>{props.row.name}</div>
            </td>
            <td>
                <div>{props.row.age} </div>
            </td>
            <td>
                <div>{props.row.phone}</div>
            </td>
            <td className='table_td5'>
                <div>{props.row.favourite ? 'TRUE' : 'FALSE'}</div>
            </td>
        </tr>
    )
}

export default TableLine;