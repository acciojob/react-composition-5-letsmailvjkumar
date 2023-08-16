
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";
import Tabs1 from "./Tabs";

const tabs = [{title:"Tab 1",content:"Tab 1"},
{title:"Tab 2",content:"Tab 2"},
{title:"Tab 3",content:"Tab 3"},  
{title:"Tab A", content:"Tab A"},
{title:"Tab B", content:"Tab B"},
{title:"Tab C", content:"Tab C"}]

const App = () => {
  return (
    <div>
     < Tabs tabs={tabs.slice(0,3)} />
     < Tabs1 tabs={tabs.slice(3)} />
     </div>
  )
}

export default App
