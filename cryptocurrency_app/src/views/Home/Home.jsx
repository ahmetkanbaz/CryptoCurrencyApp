import HeroBanner from "../../components/Banners/HomeBanners/HeroBanner/HeroBanner"
import AboutCrypto from "../../components/HomePageSections/AboutCrypto/AboutCrypto"
import Statistics from "../../components/HomePageSections/Statistics/Statistics"

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <AboutCrypto />
      <Statistics />
    </div>
  )
}

export default Home