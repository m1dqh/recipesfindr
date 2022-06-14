import './Hero.css'
import searchIcon from '../../assets/search-icon.svg'
import { useState, useEffect } from 'react'

export default function Hero(props) {
    return (
        <main className="hero">
            <h1 className="hero--title">Cook n' Enjoy</h1>
            <div className="hero--input">
                <input className="input" onKeyPress={props.getData} placeholder="Find something to Cook"/>
                <button className="search-icon" onClick={props.getData} />
            </div>
        </main>
    )
}
