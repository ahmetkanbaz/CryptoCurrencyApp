import UpperSection from "../../../common/UpperSection/UpperSection";
import SingleCardWhyUs from "./SingleCardWhyUs/SingleCardWhyUs";

const WhyUs = () => {
  const whyUsDatas = [
    {
      image:
        "https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/icon-7.png",
      cardTitle: "Easy To Start",
    },
    {
      image:
        "https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/icon-6.png",
      cardTitle: "Safe & Secure",
    },
    {
      image:
        "https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/icon-5.png",
      cardTitle: "Affordable Plans",
    },
    {
      image:
        "https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/icon-4.png",
      cardTitle: "Secure Storage",
    },
    {
      image:
        "https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/icon-3.png",
      cardTitle: "Protected By Insurance",
    },
    {
      image:
        "https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/icon-8.png",
      cardTitle: "24/7 Support",
    },
  ];
  return (
    <div className="py-5">
      <div className="container pb-5">
        <UpperSection
          title="Why Us?"
          subTitle="The Best In The crypto Industry"
        />
        <div className="row g-5">
          {whyUsDatas.map((singleWhyUs, index) => (
            <SingleCardWhyUs key={index} singleWhyUs={singleWhyUs} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
