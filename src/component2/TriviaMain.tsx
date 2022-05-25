import { useEffect, useState } from "react";
import Axios from 'axios';
import Trivia from "./Trivia";

function TriviaMain(){

    let server_url = localStorage.getItem('server');
    const [data,setData] = useState(<h1>Screen Will Be Visible While ADS</h1>);

    var status = true;

    function getData(){
        Axios.get(`${server_url}/getTriviaStatus`).then(res=>{
            console.log(res);
            if(res.data){
                // if(!status){
                //     localStorage.setItem("answergiven","false");
                // }
                // if(localStorage.getItem("answergiven")==="true" && status){
                //     setData(<h1>You Have Given The Answer</h1>);
                // }
                // else{
                    setData(<Trivia/>);
                    status = true;
                // }
            }
            else{
                // if(status){
                    setData(<h1>Screen Will Be Visible While ADS</h1>);
                    status = false;
                // }
            }
        });
    }

    useEffect(() => {
        const interval = setInterval(getData,2000);
        return () => clearInterval(interval);
    }, []);

    return(
    <div>
        {data}
    </div>);
}

export default TriviaMain;