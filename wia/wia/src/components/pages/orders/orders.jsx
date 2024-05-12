import './orders.css';
import { useStore } from '../../../javascript/storejs';

function Orders() {
    const { cart } = useStore();

    if (cart.length === 0) {
        return (
            <div className='empty-wrapper'>
                <p className='empty-text'>Din varukorg är tom</p> 
            </div>
        );
    }

}

export default Orders;
