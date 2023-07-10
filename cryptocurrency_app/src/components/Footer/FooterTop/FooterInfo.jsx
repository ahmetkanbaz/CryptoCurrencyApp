import cryptoLogo from "../../../assets/logo/cryptoLogo.png";
const FooterInfo = () => {
  return (
    <div className="col-md-6 col-12">
      <div className="d-flex align-items-center">
        <img src={cryptoLogo} alt="footerLogo" className="img-fluid w-25" />
        <h3>CryptoCurrency</h3>
      </div>
      <p className="pt-3 opacity-50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae
        pariatur ducimus ea libero placeat excepturi molestias sint iure
        officiis repudiandae repellat voluptatibus necessitatibus rerum esse
        praesentium temporibus, aspernatur fugiat.
      </p>
    </div>
  );
};

export default FooterInfo;
