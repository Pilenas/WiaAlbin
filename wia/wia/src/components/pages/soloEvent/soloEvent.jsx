import './soloEvent.css';
import { useParams } from 'react-router-dom';
import { useStore } from '../../../javascript/storejs';

function SoloEvent({ events }) {
    const { eventId } = useParams();
    const event = events && events.find(event => event.id === eventId);
    
    const { counts, setCounts } = useStore();
    const totalPrice = (counts[eventId] || 0) * (event?.price || 0);

    const handleAdd = () => {
        setCounts({ ...counts, [eventId]: (counts[eventId] || 0) + 1 });
    };

    const handleRemove = () => {
        if (counts[eventId] > 0) {
            setCounts({ ...counts, [eventId]: (counts[eventId] || 0) - 1 });
        }
    };


    return (
        <div className='event-wrapper'>
            <div className='event-center'>
                    <h1 className='event-title'>Event</h1>
                    <p className='event-text'>You are about to score <br/> some tickets to</p>
                <div className='event-price-container'>
                    <p className='event-total-price'>{totalPrice} SEK</p>
                    <div className='event-btn-container'>
                        <button className='remove-button' onClick={handleRemove}>-</button>
                        <span className='counter'>{counts[eventId] || 0}</span>
                        <button className='add-button' onClick={handleAdd}>+</button>
                    </div>
                </div>
                <button className='event-btn'>Add to cart</button>
            </div>
        </div>
    );
}

export default SoloEvent;
