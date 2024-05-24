import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

export function App() {
    console.log("App rendering")
    return (
        <div>
            <Accordion titleValue={"Menu"} collapsed={false} />
            <UncontrolledAccordion titleValue={"Menu"}  />
            <UncontrolledAccordion titleValue={"Users"} />

            <Rating value={0} />
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />

            <UncontrolledRating />

            <OnOff />
            <OnOff />
            <OnOff />

        </div>
    );
}



