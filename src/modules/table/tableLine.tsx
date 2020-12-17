import React, { useEffect, useRef, useState } from 'react'
import { IDataSet } from '../../App';
import './table.scss'

interface tableLineProps {
    row: IDataSet;
    indx: number;
    str: string;
    setEditFavorite: (val: number) => void
}

let TableLine: React.FC<tableLineProps> = (props) => {

    const [fav, setFav] = useState<boolean>(props.row.favourite);

    const changeFavourite = () => {
        setFav(!fav);
        props.setEditFavorite(props.indx);
    }

    return(
        <div className='table_block dfr jcc wd1' id={'tr_' + props.indx}>
            <div className='tb_cell1 dfc jcc'><img className='table_img' src={"/images/"+props.row.image+".svg"} /></div>
            <label className='tb_cell2'>{props.row.name}</label>
            <label className='tb_cell3'>{props.row.age} age</label>
            <label className='tb_cell4'>{props.row.phone}</label>
            <label className='tb_cell5' onClick={changeFavourite}>{fav ? 'TRUE' : 'FALSE'}</label>
        </div>
    )
}

export default TableLine = React.memo(TableLine);