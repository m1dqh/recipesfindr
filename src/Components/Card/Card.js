import './card.css'

export default function Card(props) {
    const modal = document.querySelector('.modal')
    return (
        <a
        href="#extended-info"
        className="card"
        style={{backgroundImage: `url(${props.img})`}}
        role="button"
        tabIndex="0"
        onClick={props.getInfo}
        open
        >
            <div className="card--info">
                <span className="info--tag">Ready In: {props.readyInMinutes} Minutes</span>
                <span className="info--servings">{props.servings} Servings </span>
            </div>
            <h4 className="card--title">{props.title}</h4>
        </a>
    )
}
