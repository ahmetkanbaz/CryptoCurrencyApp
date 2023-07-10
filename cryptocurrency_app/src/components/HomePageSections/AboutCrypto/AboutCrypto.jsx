import ImageWrapper from '../../../common/ImageWrapper/ImageWrapper'
import homeAboutSection from '../../../assets/section/homeAboutSection.png'
import AboutCryptoInfo from './AboutCryptoInfo/AboutCryptoInfo'
const AboutCrypto = () => {
  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <ImageWrapper image={homeAboutSection}/>
          <AboutCryptoInfo />
        </div>
      </div>
    </section>
  )
}

export default AboutCrypto