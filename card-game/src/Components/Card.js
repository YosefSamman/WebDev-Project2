import './Card.css';

export default function Card(card, completed, flipped, disabled, choicehandler) {
    if(completed() === true){
        window.alert("You have completed");
    }

    const handleClick = () => {
        if(!disabled){
            choicehandler(card)
        }
    }

    return (
        <div className = "card">
            <div className = {flipped ? "flipped" : ""}>
                <img className = "back" src='cardback.png' onClick={handleClick} alt="back card"/>
                <img className="front" src={card.img} alt="card front" />
            </div>
        </div>
    )
}