import React from 'react'
import { IDataSet } from '../../App';
import './prev.scss'
import PrevLine from './prevLine';
import { v4 as uudi} from 'uuid'

interface IPrevProps {
    dataSet: Array<IDataSet>
}

const Prev: React.FC<IPrevProps> = (props) => {
    return(
        <div className='dfr wd1 prev_main'>
            { props.dataSet.map( row => <PrevLine key={uudi()} row={row} />)}

        </div>
    )
}

export default Prev;