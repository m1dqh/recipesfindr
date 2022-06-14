import './modal.css'
import Step from './Step'
import parse from 'html-react-parser'
import { useState } from 'react'
export default function Modal(props) {

    const steps = props.steps.map(each => {
        return each.steps
    })
    let arr = []
    steps.forEach(element => {
        for (let i = 0; i < element.length; i++) {
            arr.push(element[i])
        }
    })


    const elements = arr.map(each => {
        return <Step key={each.step} steps={each.step} number={each.number}/>
    })

    return (
        <div className="extended-info" id="extended-info">
            <div className="modal" >
                <img src={props.img} className="modal--image"/>
                <h4 className="modal--title">{props.name}</h4>
                <p className="modal--paragraph">{parse(props.summaryText)}</p>
                <a href={props.link} className="modal--link">{props.credits} ⧉</a>
            </div>
            <aside className="aside">
                { elements }
            </aside>
        </div>
    )
}
