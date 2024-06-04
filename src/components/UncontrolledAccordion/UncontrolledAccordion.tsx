import React, {FunctionComponent, useState} from "react";

type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
    onClick?: () => {}
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false);

    console.log(props)
    console.log("UncontrolledAccordion rendering")
        return <div>
            <AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}} />
            {!collapsed && <AccordionBody title={props.titleValue} />}
        </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: (value: boolean) => void
}

function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3>{props.title}</h3>
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

