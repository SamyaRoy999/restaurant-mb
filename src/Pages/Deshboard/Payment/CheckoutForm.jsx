import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const hendelSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {

            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const {error, paymentMethod}= await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log( console.log('[PaymentError]', error));
        }else(
            console.log('[PaymentMethod]', paymentMethod)
        )

    }
    return (
        <form onSubmit={hendelSubmit} className="w-full text-center my-7">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className="btn btn-outline btn-sm w-4/12 " disabled={!stripe}>
                Pay
            </button>
        </form>
    )
}

export default CheckoutForm