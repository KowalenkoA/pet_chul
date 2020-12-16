import React, { useEffect, useRef, useState } from 'react';
import { IDataSet } from '../../App';

interface IPrevLineProps {
    row: IDataSet;
    idName: string;
    addV: (key: string, y: number) => void;
    indx: number;
    num?: number;
}


let y = 0;

let PrevLine: React.FC<IPrevLineProps> = (props) => {
    const [update, setUpdate] = useState<string>('');
    const [check, setCheck] = useState<boolean>(false);
    //const [y, setY] = useState<number>(0);
    let element: any;
    //const [play, setPlay] = useState<boolean>(false)

    //const parentRef = useRef<HTMLDivElement>(null);
    

    /*useEffect(() => {
        //element = document.getElementById(props.idName)
        /*element= document.getElementById(props.idName);
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
        }*/
       
        //console.log(targetPosition);
        /*document.addEventListener('wheel', scrollEvent, false); 
        document.addEventListener('scroll', scrollEvent, false);
        {console.log('render')}
        return (() => {
            document.removeEventListener('wheel', scrollEvent, false);
            document.removeEventListener('scroll', scrollEvent, false);
        });
    },[]);*/

    /*useEffect(() => {
        element= document.getElementById(props.idName);
        let targetPosition;
        let windowPosition;
        if (element) {
            targetPosition = {
                top: window.pageYOffset + element.getBoundingClientRect().top,
                left: window.pageXOffset + element.getBoundingClientRect().left,
                right: window.pageXOffset + element.getBoundingClientRect().right,
                bottom: window.pageYOffset + element.getBoundingClientRect().bottom
            };
            console.log('TOP: ' + targetPosition.top)
            //setY(targetPosition.top);
        }
    }, [])*/

    const scrollEvent = () => {
        let SH = document.body.scrollHeight;
        let CH = window.innerHeight;
        let CW = window.innerWidth;
        element= document.getElementById(props.idName);
        let targetPosition;
        let windowPosition;
        if (element) {
            targetPosition = {
                top: window.pageYOffset + element.getBoundingClientRect().top,
                left: window.pageXOffset + element.getBoundingClientRect().left,
                right: window.pageXOffset + element.getBoundingClientRect().right,
                bottom: window.pageYOffset + element.getBoundingClientRect().bottom
            };
            windowPosition = {
                top: window.pageYOffset,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };
            /*console.log()
            console.log('WHEIGHT: ' + window.innerHeight)
            //console.log(element.getBoundingClientRect())
            console.log(targetPosition);
            console.log(windowPosition)
            console.log('----')*/
           
            if ((windowPosition.bottom - y) >= 550){
                //setY(windowPosition.bottom);
                y = windowPosition.bottom;
                console.log('Y: ' + y);
                console.log('BOTTOM : ' + windowPosition.bottom);
                console.log('TARGET : ' +targetPosition.top);
                if (targetPosition.top < windowPosition.bottom){
                   
                    console.log(windowPosition.bottom);
                    console.log(y);
                    console.log('---' + props.idName)
                    setCheck(true)
                }
            }
            
        }
    }

    /*useEffect(() => {
        console.log('UPDATE')
        setUpdate('update')
    },[check])*/

    /*useEffect( () => {
        if (props.actData.length > 0){
            setActData(props.actData)
        }
        document.addEventListener('wheel', scrollEvent, false); 
        document.addEventListener('scroll', scrollEvent, false); 
        return (() => {
            document.removeEventListener('wheel', scrollEvent, false);
            document.removeEventListener('scroll', scrollEvent, false);
        });
        // eslint-disable-next-line
    },[props.actData]);*/

    

    const clickFunc = () => {
        //console.log('click ' + props.idName);
        let SH = document.body.scrollHeight;
        let CH = window.innerHeight;
        let CW = window.innerWidth;
        element= document.getElementById(props.idName);
        let targetPosition;
        let windowPosition;
        if (element) {
            targetPosition = {
                top: window.pageYOffset + element.getBoundingClientRect().top,
                left: window.pageXOffset + element.getBoundingClientRect().left,
                right: window.pageXOffset + element.getBoundingClientRect().right,
                bottom: window.pageYOffset + element.getBoundingClientRect().bottom
            };
            windowPosition = {
                top: window.pageYOffset,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };
            console.log()
            console.log('WHEIGHT: ' + window.innerHeight)
            //console.log(element.getBoundingClientRect())
            console.log(targetPosition);
            console.log(windowPosition)
            console.log('----')
            if ((windowPosition.bottom + 100) > targetPosition.top){
                setCheck(true)
            }
        }
        
    }

    return(
        <>
             <div className={'dfr prev_block border_l' + (!((props.indx < 10) || check) && ' prev_line_hide' )} >
                <div  className='dfc prev_bio' id={props.idName}>
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
                    <video  src={"/videos/"+props.row.video+".mp4"} controls  ></video>
                </div>}
                
            </div>
        </>
        
    )
}

const areEqual = (prevProps: any, nextProps: any) => true;

export default PrevLine = PrevLine;