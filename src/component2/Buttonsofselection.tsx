import "./App1.css";

type item = {
    name : string
}

function Buttonsofselection({name}:item){
    return(
        <div>
        <button type="button" className={name}> 6 </button>
        <button type="button" className={name}> 4 </button>
        <button type="button" className={name}> 2 </button>
        <button type="button" className={name}> 1 </button>
        </div>
    )
}

export default Buttonsofselection;