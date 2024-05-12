import './tickets.css';
import { useStore } from '../../../javascript/storejs';



function Tickets() {
    const { tickets } = useStore();

    if (tickets.length === 0) {
        return (
            <div className='no-tickets'>
                <p className='no-tickets__title'>Du har inga biljetter.</p>
            </div>
        );
    }
}

export default Tickets;