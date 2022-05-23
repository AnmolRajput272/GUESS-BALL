import { useEffect, useState } from "react";
import { setInterval } from "timers/promises";

function Test(){

    // const [num,setNum] = useState(0);

    // let s : ReturnType<typeof setInterval>;

    // function increment(){
    //     setNum(num+1);
    // }

    // function decrement(){
    //     setNum(num-1);
    // }

    // useEffect(()=>{
    //         s = setInterval(increment,500);
    //     },[]
    // );
    

    // function stopit(){
    //     clearInterval(s);
    // }

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = window.setInterval(task, 1000);
        return () => window.clearInterval(interval);
    }, []);

    function task(){
        setSeconds(seconds => seconds + 1);
    }

    return(
        <div> 
            {/* <button type="button" onClick={()=>stopit()}>Stop It</button> */}
            {seconds}
        </div>
    );
}

export default Test;