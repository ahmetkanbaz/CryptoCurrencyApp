import Button from "../../../../../common/Button/Button";
const HeroBannerInfo = () => {
  return (
    <div className="col-lg-6 col-12 px-4">
      <h1 className="fw-bold text-capitalize">
        The world’s most popular way to buy and sell crypto
      </h1>
      <p className="py-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod
        est nec justo pulvinar, et efficitur massa aliquam. Donec quis nunc eget
        nunc aliquet ultrices. Donec euismod, nisl eget aliquam ultricies, nunc
        nisl ultricies nunc, eget aliquam nisl nunc eget nunc.
      </p>
      <Button
        buttonText="Get Started"
        padding=".7rem 1.4rem"
        border="none"
        color="#FEBB2D"
        fontSize="1rem"
        backgroundcolor="#648CE1"
      />
    </div>
  );
};

export default HeroBannerInfo;
