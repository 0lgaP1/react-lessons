import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import AppTitle from "./AppTitle";

export function App() {
    console.log("App rendering")
    return (
        <div>
            <Accordion titleValue='' obj={{name: '', age: 1}} onClick={() => alert(1)}/>
            {/*<PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}>
            Article 1
            <Accordion titleValue={Menu} />
            <Accordion titleValue={Users} />*/}
            <Rating value={0} />
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />
        </div>
    );
}



