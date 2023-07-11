import UpperSection from "../../../common/UpperSection/UpperSection";
import { useState, useEffect } from "react";
import TokenSaleDateCard from "./TokenSaleDateCard/TokenSaleDateCard";
import Button from "../../../common/Button/Button";
const TokenSale = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="py-5">
      <div className="container py-5">
        <UpperSection title="Token Sale" subTitle="Token Sale Countdown" />
        <TokenSaleDateCard date={date} />
        <div className="py-5 d-flex justify-content-center">
          <Button
            buttonText="Buy Token"
            padding="1rem 1.4rem"
            classname="bg-info border-0"
          />
        </div>
        <div className="d-flex gap-lg-5 gap-1 flex-wrap justify-content-center">
          <img
            src="https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/payment-1.png"
            alt=""
            className="img-fluid m-1"
            width='50px'
          />
          <img
            src="https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/payment-2.png"
            alt=""
            className="img-fluid m-1"
            width='50px'
          />
          <img
            src="https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/payment-3.png"
            alt=""
            className="img-fluid m-1"
            width='50px'
          />
          <img
            src="https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/payment-4.png"
            alt=""
            className="img-fluid m-1"
            width='50px'
          />
        </div>
      </div>
    </div>
  );
};

export default TokenSale;
