import { useEffect, useState } from "react";
import "./App1.css";
import Axios from 'axios';
import Youtubeplayer from "./Youtubeplayer";
import Leaderboard from "./CurrentGameLeaderboard";
import Selectiontemp from "./Selectiontemp";
import ImageselectionUser from "./ImageSelectionUser";
import TriviaMain from "./TriviaMain";
import NavbarDB from "../components/NavbarDB";
import { useNavigate } from 'react-router-dom';

function Selection(){

    const [game,setGame] = useState(<Selectiontemp/>);
    const [score,SetScore] = useState(<p>Score Is {localStorage.getItem('score')}</p>);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!(localStorage.getItem('username')?.length)){
            navigate('/login');
        }
        SetScore(<button type="button" style={{border:'2px solid black',padding:'20px 35px',fontSize:23,background:'maroon',color:'white',borderRadius:10,marginTop:20,marginBottom:60}}> <b>Your Score : {localStorage.getItem('score')}</b></button>);
    },[score]);

    return (
        <div className="temp">
            <div style={{display:'flex',justifyContent:"space-around",flexWrap:'wrap'}}>
                    <Youtubeplayer/>
                    <Leaderboard/>
            </div>
            <div style={{margin:25,marginBottom:75}}>
                <button type="button" style={{fontSize:20,padding:20,margin:25,marginTop:40,width:"450px",backgroundColor:'orange',borderColor:'black',borderRadius:10,fontFamily:'Vazir'}} onClick={()=>{if(localStorage.getItem("optionSelected")!=="true"){setGame(<Selectiontemp/>)}}}><b> Score Game </b> </button>
                <button type="button" style={{fontSize:20,padding:20,margin:25,marginTop:40,width:"450px",backgroundColor:'yellowgreen',borderColor:'black',borderRadius:10,fontFamily:'Vazir'}} onClick={()=>{if(localStorage.getItem("optionSelected")!=="true"){setGame(<ImageselectionUser/>)}}}><b> Map Game </b> </button>
                <button type="button" style={{fontSize:20,padding:20,margin:25,marginTop:40,width:"450px",backgroundColor:'orchid',borderColor:'black',borderRadius:10,fontFamily:'Vazir'}} onClick={()=>{if(localStorage.getItem("optionSelected")!=="true"){setGame(<TriviaMain/>)}}}><b> Trivia Game </b></button>
            </div>
            <div >
                {score}
            </div>
            {game}
        </div>
    );
}

export default Selection;