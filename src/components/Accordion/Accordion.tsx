import React, {FunctionComponent} from "react";

type Test = {
    name: string
}

type AccordionPropsType = {
    obj?: Test
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

export function Accordion(props: AccordionPropsType) {
    console.log(props)
    console.log("Accordion rendering")

        return <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody title={props.titleValue}/>}
        </div>
    // if (props.collapsed) {
    //     return <div>
    //         <AccordionTitle title={props.titleValue} age={12}/>
    //     </div>
    // } else {
    //     return <div>
    //         <AccordionTitle title={props.titleValue} age={12}/>
    //         <AccordionBody />
    //     </div>
    // }
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
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

