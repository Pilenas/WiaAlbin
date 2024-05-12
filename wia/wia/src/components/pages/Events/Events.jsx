import './events.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('https://santosnr6.github.io/Data/events.json')
            .then(res => {
                setEvents(res.data.events);
            }).catch(error => {
                console.log(error);
            });
    }, []);

    const months = { 
        "Mars": "Mar",
        "April": "Apr",
        "Juli": "Jul",
        "November": "Nov",
        "December": "Dec"
    };

    return (
        <div className='events-wrapper'> 
            <div className='events-center'>
                <h1 className='events-title'>Events</h1>
                <form className='events-form'>
                    <input type="text" className='events-input' placeholder="Sök Efter Event" />
                </form>
                <div className='events-list-container'> 
                    {events.length > 0 && events.map((event, index) => {
                        const { when, id, name, where, price } = event;
                        const [date, month] = when.date.split(" ");

                        return (
                            <div className='events-item' key={index}>
                                <div className='events-date-container'> 
                                    <p className='events-info-date'>{date}</p>
                                    <span className='events-info-mon'>{months[month]}</span>
                                </div>

                                <Link to={`/event/${id}`} className='events-info-link'>
                                    <div
                                        onClick={() => handleEventClick(events)} 
                                        className='events-info'>
                                        <h2 className='events-info-title'>{name}</h2>
                                        <p className='events-info-location'>{where}</p> 
                                        <div className='event-details'> 
                                            <p className='events-info-time'>{when.from} - {when.to}</p>
                                            <span className='events-info-price'>{price} SEK</span>
                                        </div>
                                    </div>
                                </Link>
                            
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Events;

