import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Card from './Components/Card/Card'
import Modal from './Components/Modal/Modal'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
    const [dishes, setDishes] = useState([{}])
    const [desiredDish, setDesiredDish] = useState()
    const [selectedDish, setSelectedDish] = useState('')
    const tabTitle = document.getElementById('tab-title')

    function getDish(event) {
        const inputValue = document.querySelector('.input').value
        if (event.code === 'Enter') {
            setDesiredDish(inputValue)
        } else if (event.type === 'click'){
            setDesiredDish(inputValue)
        }
    }

    function getInfo(event) {
        const { currentTarget } = event
        setSelectedDish(dishes.filter(dish => {
            if (currentTarget.textContent.includes(`${dish.title}`)) {
                tabTitle.textContent = `RecipesFindr || ${dish.title}`
                return dish
            }
        }))
    }

    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=cca35db509904a859d111970ddff4302&number=12&sort=random&addRecipeInformation=true&instructionsRequired=true&query=${desiredDish || ''}`)
            .then(res => res.json())
            .then(data => setDishes(data.results))
    }, [desiredDish])

    const cardElements = dishes.map(dish => {
        return <Card
            key={dish.id || 0}
            id={dish.id}
            readyInMinutes={dish.readyInMinutes}
            servings={dish.servings}
            title={dish.title}
            img={dish.image}
            getInfo={getInfo}
             />
    })

  return (
    <div>
        <Header />
        <Hero getData={getDish} />
        <div className="recipes">
            <div className="recipes--cards">
                { cardElements }
            </div>
            {selectedDish.length > 0 &&
                    <Modal
                    name={selectedDish[0].title}
                    img={selectedDish[0].image}
                    summaryText={selectedDish[0].summary}
                    link={selectedDish[0].sourceUrl}
                    credits={selectedDish[0].sourceName}
                    steps={selectedDish[0].analyzedInstructions}
                    />}
            </div>
    </div>
    )
}

export default App;
