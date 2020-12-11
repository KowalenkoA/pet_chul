import React, { useEffect, useRef, useState } from 'react';
import { IDataSet } from '../../App';

interface IPrevLineProps {
    row: IDataSet;
    idName: string;
    addV: (key: string, y: number) => void
}

let element: any;

let PrevLine: React.FC<IPrevLineProps> = (props) => {

    const [play, setPlay] = useState<boolean>(false)

    const parentRef = useRef<HTMLDivElement>(null);
    

    useEffect(() => {
        //element = document.getElementById(props.idName)
        element= document.getElementById(props.idName);
        let targetPosition;
        if (element) {
            targetPosition = {
                top: window.pageYOffset + element.getBoundingClientRect().top,
                left: window.pageXOffset + element.getBoundingClientRect().left,
                right: window.pageXOffset + element.getBoundingClientRect().right,
                bottom: window.pageYOffset + element.getBoundingClientRect().bottom
            };
        }
        if (props.row.video) {
            props.addV(props.idName, targetPosition?.top);
            //console.log(targetPosition?.top)
        }
        
    },[]);

    

    const clickFunc = () => {
        let SH = document.body.scrollHeight;
        let CH = window.innerHeight;
        let CW = window.innerWidth;
        let targetPosition = {
            top: window.pageYOffset + element.getBoundingClientRect().top,
            left: window.pageXOffset + element.getBoundingClientRect().left,
            right: window.pageXOffset + element.getBoundingClientRect().right,
            bottom: window.pageYOffset + element.getBoundingClientRect().bottom
          },
          // Получаем позиции окна
          windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
          };
        console.log( window.innerHeight)
        console.log(element.getBoundingClientRect())
        console.log(targetPosition)
        console.log('----')
    }

    return(
        <div className='dfr prev_block border_l' ref={parentRef}>
            <div  className='dfc prev_bio'>
                <table className='wd1'>
                    <tbody>
                        <tr>
                            <td className='table_td1'>
                                LOGO
                            </td>
                            <td onClick={clickFunc}>
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
            {(props.row.video) && <div className='prev_video border_l'>
                <video id={props.idName} autoPlay={play} src={"/videos/"+props.row.video+".mp4"} controls  ></video>
            </div>}
            
        </div>
    )
}

export default PrevLine = React.memo(PrevLine);