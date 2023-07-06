import homeHeroBanner from '../../../../assets/banner/homeHeroBanner.png'
const HeroBanner = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            Info
          </div>
          <div className="col-lg-6 col-12">
            <img src={homeHeroBanner} alt="heroBanner" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner