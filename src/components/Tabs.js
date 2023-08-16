import React, {useState} from "react";

const Tabs = ({tabs})=>{
    const[tabClicked, setTabClicked] = useState("");

    function handleClick(value){
        setTabClicked(value);
    }
    return(
        <div>
            <ul>{
            tabs.map((value)=>
            <li onClick={()=>handleClick(value)}>{value.title}</li>
            )
            }
            </ul>
            {
                tabClicked && <p>Content for {tabClicked.content}.</p>
            }
        </div>
    )
}
const Tabs1 = ({tabs})=>{
    const[tabClicked, setTabClicked] = useState("");

    function handleClick(value){
        setTabClicked(value);
    }
    return(
        <div>
            <ul>{
            tabs.map((value)=>
            <li onClick={()=>handleClick(value)}>{value.title}</li>
            )
            }
            </ul>
            {
                tabClicked && <p>Content for {tabClicked.content}.</p>
            }
        </div>
    )
}
export default Tabs1;