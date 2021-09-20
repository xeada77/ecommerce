import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const KEY =
  "pk_test_51JbivvKtCNdHT56GtYdOeAhJpoBV7fWVL4xeAZEZeziuOvjx7DOZSB2T6UfJO3RhZWpWG3kIB1cT4FR9eCmLQgil00Zii5xmds";

axios.defaults.headers.common = {
  "Content-Type": "application/json",
};

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5001/api/v1/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 7500,
            currency: "EUR",
          }
        );
        history.push("/success");
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, history]);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeToken ? (
        <span>Procesando ....</span>
      ) : (
        <StripeCheckout
          name="XDA Shop"
          billingAddress
          shippingAddress
          description="El total es 100 Euros"
          currency="EUR"
          amount={10000}
          token={onToken}
          stripeKey={KEY}
        >
          <button
            style={{
              border: "none",
              width: 120,
              borderRadius: 5,
              padding: "20px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Pagar
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
