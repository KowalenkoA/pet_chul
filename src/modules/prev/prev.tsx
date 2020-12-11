import React, { useEffect, useState } from 'react'
import { IDataSet } from '../../App';
import './prev.scss'
import PrevLine from './prevLine';
import { v4 as uudi} from 'uuid'

interface IPrevProps {
    dataSet: Array<IDataSet>
}

interface IV {
    key: string;
    y: number;
}

let vArr: Array<IV> = [];
let lenPage: number = 0;
let actV: IV = {key: 'null', y: 0}

const Prev: React.FC<IPrevProps> = (props) => {
    const [dataSet, setData] = useState<Array<IDataSet>>([]);
    //const [vArr, setVArr] = useState<Array<IV>>([]);

    

    useEffect(() => {
        setData(props.dataSet.slice(0, 10))
        document.addEventListener('wheel', testF, false); 
        document.addEventListener('scroll', testF, false); 
        lenPage = window.innerHeight;
        return (() => {
            document.removeEventListener('wheel', testF, false);
            document.removeEventListener('scroll', testF, false);
        });
        // eslint-disable-next-line
    },[]);
    
    const testF = () => {
        //console.log(window.pageYOffset);
        //console.log(vArr)
        if (lenPage < window.pageYOffset){
            if ((window.pageYOffset - lenPage) > 200){
                lenPage = window.pageYOffset;
                let arr: Array<IDataSet> = dataSet;
                props.dataSet.slice(0, (arr.length + 10)).forEach( row => {
                    arr.push(row)
                })
                //props.dataSet
                setData(arr)
            }
        }
        let y = window.pageYOffset;
        let check = false;
        //console.log(vArr)

        for( let i = 0; i < vArr.length; i++) {
            let row: IV = vArr[i];
            //console.log('y: ' + y);
            if ((row.y + 100) > y && (row.y - 100) < y){
                if (actV.key === 'null'){
                    let video: any = document.getElementById(row.key);
                    if (video){
                        video.play();
                    }
                    //video.play();
                    actV = row;
                    i = vArr.length + 1;
                }
                check = true;
            }
        }
        //console.log('----')
        if (!check && actV.key !== 'null'){
            let video: any = document.getElementById(actV.key);
            //video.pause();
            if (video){
                video.pause();
            }
            actV = {key: 'null', y: 0};
        }
        
        
        //setWinH(window.pageYOffset)
    }

    const addV = (key: string, y: number) => {
        let obj: IV = { key: key, y: y}
        console.log(vArr)
        vArr.push(obj)
    }

    const addBlock = () => {
        let arr = dataSet.slice();
        let arr2 = (props.dataSet.slice(dataSet.length, (dataSet.length + 10)));
        console.log(arr2)
    }
    return(
        <div className='dfr wd1 prev_main'>
            <label onClick={testF}>TEST</label>
            { dataSet.map( row => <PrevLine key={uudi()} row={row} idName={uudi()} addV={addV} />)}

        </div>
    )
}

export default Prev;