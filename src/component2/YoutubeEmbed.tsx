import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player/youtube";

type item = {
    embedId : string;
}

function YoutubeEmbed({ embedId }:item){

    const [sound,setSound] = useState(true);
    const [button,setButton] = useState(<button type="button" onClick={()=>{setSound(false);setButton(<p></p>)}} style={{color:'green',margin:20,padding:10}}>UN-MUTE VIDEO</button>);

    function changetomute(){
        
    }

    return(
        <div>
            <div className="video-responsive" style={{paddingTop:40}}>
                <ReactPlayer width={1280} height={720} style={{ pointerEvents: 'none'}} playing={true} muted={sound} url='https://www.youtube.com/watch?v=Mvs1JXYfd6Q' ></ReactPlayer>
                {/* <iframe
                width="853"
                height="1000"
                src={`https://www.youtube.com/embed/KE18M9TufSU`}
                frameBorder="0"
                allow='autoplay; encrypted-media'
                allowFullScreen
                title="Embedded youtube"
                /> */}
            </div>
            <div>
                {button}
            </div>
    </div>
    );
}

export default YoutubeEmbed;