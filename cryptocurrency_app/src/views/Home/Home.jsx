import HeroBanner from "../../components/Banners/HomeBanners/HeroBanner/HeroBanner"
import AboutCrypto from "../../components/HomePageSections/AboutCrypto/AboutCrypto"
import Statistics from "../../components/HomePageSections/Statistics/Statistics"
import WhyUs from "../../components/HomePageSections/WhyUs/WhyUs"

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <AboutCrypto />
      <Statistics />
      <WhyUs />
    </div>
  )
}

export default Home