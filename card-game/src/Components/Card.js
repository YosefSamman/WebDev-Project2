import './Card.css';

export default function Card(card, completed, flipped, disabled, handler) {
    if(completed() === true){
        window.alert("You have completed");
    }
}