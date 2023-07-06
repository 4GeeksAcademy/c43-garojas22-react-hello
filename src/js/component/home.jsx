import React, {useState} from "react";

export function Home()
{
const [ selectedColor, setSelectedColor ] = useState("");

return (

	<div className="p-5">
        <div className="trafic-light">
                <div className="py-1">
                	    <div onClick={() => setSelectedColor("red")} className={"light red" + (selectedColor === "red" ? " glow-red" : "")}></div>
                </div>
                <div className="py-1">
                	    <div onClick={() => setSelectedColor("yellow")} className= {"light yellow" + (selectedColor === "yellow" ? " glow-yellow" : "")}></div>
                </div>
                <div className="py-1">	
                	    <div onClick={() => setSelectedColor("green")} className= {"light green" + (selectedColor === "green" ? " glow-green" : "")}></div>
                </div>
		</div>         
	</div>

);	
};

export default Home;

