import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, Star} from "./components/Rating/Rating";
import AppTitle from "./AppTitle";

function App(props: any) {
    console.log("App rendering")
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}>
            Article 1
            <Accordion titleVaue={Menu}/>
            <Accordion titleVaue={Users}/>
            <Rating value={0} />
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />
        </div>
    );
}
export default App;


