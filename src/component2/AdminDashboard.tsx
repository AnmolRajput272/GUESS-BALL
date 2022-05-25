import { useState } from "react";
import "./App1.css";
import Axios from 'axios';
import Imageselection from "./Imageselection";

function Login(){

    const [inputData,setInputData] = useState("1");
    const [buttontype,setButtontype] = useState("buttonstyle");
    const [inputBox,setInputBox] = useState(<p></p>);

    let server_url = localStorage.getItem('server');

    let inputData_="1";

    const enableIt = (e:any) => {
        localStorage.setItem('buttonClass',"buttonstyle");
        Axios.post(`${server_url}/changeStatus/buttonstyle`).then(res=>console.log(res.data));
        setInputBox(<p></p>);
    }

    function insertScore(){
        let strr = inputData_;
        console.log(strr);
        Axios.post(`${server_url}/updateSection/${localStorage.getItem('section')}`);
        Axios.post(`${server_url}/updateBall/${strr}`);
    }

    function databox(){
        return(
            <div>
                <input style={{padding:15}} placeholder="Enter Runs" type="text" onChange={e=> {setInputData(e.target.value); inputData_=e.target.value;}}/>
                <button type="submit" className="adminbutton" onClick={()=>insertScore()}> Submit </button>
                <br></br>
                <Imageselection/>
            </div>
        );
    }

    const disableIt = (e:any) => {
        localStorage.setItem('buttonClass',"buttonstyle disabled");
        Axios.post(`${server_url}/changeStatus/buttonstyle disabled`).then(res=>console.log(res.data));
        setInputBox(databox());
    }

    const enableItTrivia = (e:any) => {
        localStorage.setItem("answergiven","false");
        Axios.post(`${server_url}/changeTriviaStatus/true`).then(res=>console.log(res.data));
    }

    const disableItTrivia = (e:any) => {
        Axios.post(`${server_url}/changeTriviaStatus/false`).then(res=>console.log(res.data));
    }

    return (
        <div>
            <h1>Welcome To Cricket Admin Panel</h1>
            {/* <input type="text" onChange={(e)=> setInputData(e.target.value)} /> */}
            <button onClick={enableIt} type="button" className="adminbutton"> Enable </button>
            <button onClick={disableIt} type="button" className="adminbutton"> Disable </button>
            <br></br>
            <button onClick={enableItTrivia} type="button" className="adminbutton"> Enable Trivia </button>
            <button onClick={disableItTrivia} type="button" className="adminbutton"> Disable Trivia</button>
            <br></br>
            {inputBox}
            {/* {databox()} */}
            {/* <br></br>
            <h1>This is the data {inputData}</h1> */}
        </div>
    );
}

export default Login;