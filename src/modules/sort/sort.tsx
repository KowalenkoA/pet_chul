import react from 'react'
import './sort.scss'

interface ISortProps {
    sortInd: boolean;
    changeSort: (val: boolean) => void;
    sortTable: (val: string) => void;
}

const Sort: React.FC<ISortProps> = (props) => {
    return (
        <div className='dfc sort_buttons'>
            <label>Сортировка</label>
            <div className='dfr jcc wd1'>
                <div className='button sort_buttons_fl' onClick={() => props.sortTable('id')}>ID</div>
                <div className='button sort_buttons_fl' onClick={() => props.sortTable('name')}>Name</div>
                <div className='button sort_buttons_fl' onClick={() => props.sortTable('age')}>Age</div>
            </div>
            <div className='dfr jcc wd1'>
                {/*<div className={('button sort_buttons_sl ' + (props.sortInd ? 'button_green': ''))}>По возрастанию</div>
                <div className={('button sort_buttons_sl ' + (props.sortInd ? '' : 'button_green'))}>По убыванию</div>*/}
                <div className={('button sort_buttons_sl ' + (props.sortInd ? '': 'button_green'))} onClick={() => props.changeSort(false)}>По возрастанию</div>
                <div className={('button sort_buttons_sl ' + (props.sortInd ? 'button_green' : ''))} onClick={() => props.changeSort(true)}>По убыванию</div>
            </div>
        </div>
    )
}

export default Sort;