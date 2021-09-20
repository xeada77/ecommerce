import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const KEY =
  "pk_test_51JbivvKtCNdHT56GtYdOeAhJpoBV7fWVL4xeAZEZeziuOvjx7DOZSB2T6UfJO3RhZWpWG3kIB1cT4FR9eCmLQgil00Zii5xmds";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

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
            amount: 10000,
          }
        );
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="XDA Shop"
        billingAddress
        shippingAddress
        description="El total es 100 Euros"
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
    </div>
  );
};

export default Pay;
