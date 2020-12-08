import react from 'react'
import './sort.scss'

interface ISortProps {
    idSort: () => void;
    sortInd: boolean
}

const Sort: React.FC<ISortProps> = (props) => {
    return (
        <div className='dfc jcc sort_buttons'>
            {console.log(props.sortInd)}
            <div className='dfr jcc wd1'>
                <div className='button sort_buttons_fl' onClick={props.idSort}>ID</div>
                <div className='button sort_buttons_fl'>Name</div>
                <div className='button sort_buttons_fl'>Age</div>
            </div>
            <div className='dfr jcc wd1'>
                <div className={('button sort_buttons_sl ' + (props.sortInd ? 'button_green': ''))}>По возрастанию</div>
                <div className={('button sort_buttons_sl ' + (props.sortInd ? '' : 'button_green'))}>По убыванию</div>
            </div>
        </div>
    )
}

export default Sort;