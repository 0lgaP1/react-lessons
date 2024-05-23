import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

export function App() {
    console.log("App rendering")
    return (
        <div>
            <Accordion titleValue={"Menu"} collapsed={true} />
            <Accordion titleValue={"Users"} collapsed={false}/>

            <Rating value={0} />
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />

            <OnOff />
            <OnOff />
            <OnOff />

        </div>
    );
}



