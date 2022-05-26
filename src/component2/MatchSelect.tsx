import { useEffect, useState } from "react";
import Axios from 'axios';
import MatchLeaderboard from "./MatchLeaderboard";
import "./App1.css";
import { Navigate, useNavigate } from "react-router-dom";

function MatchSelect(){

    const [data,setData] = useState([""]);
    const [leaderboard,setLeaderboard] = useState(<div></div>);
    let server_url = localStorage.getItem('server');

    const navigate = useNavigate();

    useEffect(() => {
        Axios.get(`${server_url}/getAllMatches`).then(res=>{setData(res.data)});
    }, []);

    const options = data.map((data1,index)=>{
        return(
            <option onClick={()=>{setLeaderboard(<MatchLeaderboard match={data1}/>)}}>{data1}</option>
        );
    })

    return(
        <div className="centered">
            <div>
                <h1 style={{color:'whiteSmoke'}}><u>Match-Wise User Stats</u></h1>
                <select style={{padding:10,backgroundColor:'wheat',border:'none',fontSize:25,margin:25}}>
                    {options}
                </select>
                {leaderboard}
            </div>
            <div>
                <button style={{marginTop:50,padding:20,fontSize:20,border:'1px solid black'}} onClick={()=>{navigate('/userdashboard')}}> {"< "} HomePage </button>
            </div>
        </div>
    );
}

export default MatchSelect;