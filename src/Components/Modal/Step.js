import './step.css'
import { useState } from 'react'
export default function Step(props) {


    return (
        <div
        className="preparation"
        role="button"
        tabIndex="0">
                <h4 className="preparation--title">{props.number} </h4>
                <p className="preparation--paragraph">{props.steps ? props.steps : 'No Steps Available'}</p>
        </div>
    )
}
