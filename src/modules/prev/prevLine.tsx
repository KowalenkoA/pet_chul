import React from 'react';
import { IDataSet } from '../../App';

interface IPrevLineProps {
    row: IDataSet
}

const PrevLine: React.FC<IPrevLineProps> = (props) => {
    return(
        <div className='dfr prev_block'>
            <div className='dfc prev_bio'>
                <table className='wd1'>
                    <tbody>
                        <tr>
                            <td className='table_td1'>
                                LOGO
                            </td>
                            <td>
                                {props.row.name}
                            </td>
                            <td className='table_td5'>
                                <div>{props.row.favourite ? 'TRUE' : 'FALSE'}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <label>{props.row.age}</label>
                <label>{props.row.phone}</label>
                <label>{props.row.phrase}</label>
            </div>
            {(props.row.video) && <div className='prev_video'>
                <video src={"/videos/"+props.row.video+".mp4"} controls ></video>
            </div>}
            
        </div>
    )
}

export default PrevLine;