import React, {FunctionComponent} from "react";


type Test = {
    name: string
    age: number
}

type AccordionPropsType = {
    titleValue: string
    obj: Test
    onClick: () => void
}

function Accordion(props: AccordionPropsType) {
    console.log(props)
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle title={props.titleValue} age={12}/>
        <AccordionBody title={props.titleValue}/>
    </div>
}

type AccordionTitlePropsType = {
    title: string
    age: number
}

function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3>Меню</h3>
    )
}


type AccordionBodyType = {
    title: string
}
const AccordionBody:FunctionComponent<AccordionBodyType> = ({ title }) => {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
export default Accordion;

const a = {
    name: 'aaa',
    age:121212,
    subject: 'adsdasd'
}

const {name,} = a
