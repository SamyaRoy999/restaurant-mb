import SectionHeading from '../../../Components/SectionHeading/SectionHeading'
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWEY);

const Payment = () => {
    return (
        <div>
            <SectionHeading heading='Payment' subHeading='----Please pay to eat'></SectionHeading>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    )
}

export default Payment