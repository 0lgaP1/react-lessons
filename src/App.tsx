import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {RatingValueType, UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

export function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)

    return (
        <div>
            <Accordion titleValue={"Menu"} collapsed={false} />
            <UncontrolledAccordion titleValue={"Menu"}  />
            <UncontrolledAccordion titleValue={"Users"} />

            <UncontrolledRating onClick={setRatingValue} value={ratingValue}/>

            <OnOff />

        </div>
    );
}



