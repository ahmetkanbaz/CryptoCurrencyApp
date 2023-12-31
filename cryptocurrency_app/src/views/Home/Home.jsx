import HeroBanner from "../../components/Banners/HomeBanners/HeroBanner/HeroBanner"
import AboutCrypto from "../../components/HomePageSections/AboutCrypto/AboutCrypto"
import Faqs from "../../components/HomePageSections/Faqs/Faqs"
import Services from "../../components/HomePageSections/Services/Services"
import Statistics from "../../components/HomePageSections/Statistics/Statistics"
import TokenSale from "../../components/HomePageSections/TokenSale/TokenSale"
import WhyUs from "../../components/HomePageSections/WhyUs/WhyUs"

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <AboutCrypto />
      <Statistics />
      <WhyUs />
      <Services />
      <TokenSale />
      <Faqs />
    </div>
  )
}

export default Home