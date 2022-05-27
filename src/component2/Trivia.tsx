import { useEffect, useState } from "react";
import Axios from 'axios';
import "./App1.css";
import logo from "../shot.png";
import logo2 from "../bowl.png";

function Trivia(){

    const [selectedData,setSelectedData] = useState(<p></p>);
    const [data,setData] = useState({"id": 0, "question": "","options":"LOADING QUESTION","answer": "","answerdescription": ""});
    const [resultData,setResultData] = useState(<p></p>);
    const [resultDataDes,setResultDataDes] = useState(<p></p>);
    const [btnDisableStatus,setBtnDisableStatus] = useState(localStorage.getItem('answergiven')==="true");
    
    let server_url = localStorage.getItem('server');

    useEffect(() => {
        Axios.get(`${server_url}/Trivia`).then(res=>{setData(res.data)});
    }, []);

    const question = data.question;
    const options = data.options.split(",").map((data1,index) => {
        return (
            <button type="button" disabled={btnDisableStatus} className="normbutton" onClick={
                (event)=>{event.preventDefault(); 
                setSelectedData(<p>Selected Data : {data1}</p>);
                if(data1===data.answer){
                    Axios.post(`${server_url}/increment/${localStorage.getItem('username')}`);
                    setResultData(<h2 style={{color:'yellowgreen'}}>Correct Answer</h2>);
                    setResultDataDes(<h3>{data.answerdescription}</h3>);
                }
                else{
                    Axios.post(`${server_url}/decrement/${localStorage.getItem('username')}`);
                    setResultData(<h2 style={{color:'red'}}>Wrong Answer</h2>);
                    setResultDataDes(<p></p>);
                }
                setBtnDisableStatus(true);
                localStorage.setItem('answergiven',"true");
            }} >{data1}</button>
        )
    })


    return(
        <div style={{display:'flex',justifyContent:'space-around'}}>
            <div>
                <img src={logo2} width={400} height={400}></img>
            </div>
            <div>
                <h1>{question}</h1> 
                {options} <br/>
                {selectedData} <br/>
                {resultData} 
                {resultDataDes}
            </div>
            <div>
            <img src={logo} width={350} height={350}></img>
            </div>
        </div>
    );
}

export default Trivia;