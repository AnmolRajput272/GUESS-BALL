
import ReactPlayer from "react-player/youtube";
import './App1.css';
import YoutubeEmbed from "./YoutubeEmbed";

function Youtubeplayer(){

    // return(<div><ReactPlayer width={'1400px'} height={'500px'} style={{marginTop:50,marginLeft:225}} playing={true} muted={true} 
    // controls url='https://www.youtube.com/watch?v=dd3O6qOoQjM' /></div>);
    return(
        <YoutubeEmbed embedId="aIen6gdnQCU" />
    );
}

export default Youtubeplayer;