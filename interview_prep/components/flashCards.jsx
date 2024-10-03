
import { flashcards } from "../data/data"
import { useState } from 'react'
import './flashCards.css'

function FlashCards() {
    const [currentCard, setCurrentCard] = useState(0)
    const [isFlipped, setIsFlipped] = useState(false)

    const handleFlip = () => {
        setIsFlipped(!isFlipped)
    }

    const handleNext = () => {
        setCurrentCard((currentCard + 1) % flashcards.length)
        setIsFlipped(false)
    }

    const handlePrevious = () => {
        setCurrentCard((currentCard - 1 + flashcards.length) % flashcards.length)
        setIsFlipped(false)
    }   





    return (
        <div className="container">
            <h2>Flash Cards</h2>
            <div className={`flashcard ${isFlipped ? 'flipped': ''}`}>
                <div className="front" onClick={handleFlip}>{flashcards[currentCard].question}</div>
                <div className="back" onClick={handleFlip}>{flashcards[currentCard].answer}</div>
            </div>

            <button onClick={handleFlip}>Flip</button>
            <div>
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
            

        </div>
    )
}

export default FlashCards
