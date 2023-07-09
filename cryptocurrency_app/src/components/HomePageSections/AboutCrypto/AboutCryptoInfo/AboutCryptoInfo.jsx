import AboutCryptoInfoList from "./AboutCryptoInfoList/AboutCryptoInfoList";
import Button from "../../../../common/Button/Button";
const AboutCryptoInfo = () => {
  return (
    <div className="col-lg-6 col-12 ps-lg-5">
      <h2 className="fw-bold">About Crypto</h2>
      <p className="text-info pt-4 mb-2">
        Cryptocurrencies have gained significant popularity in recent years, and
        their widespread usage continues to grow rapidly.
      </p>
      <p className="opacity-75">
        Cryptocurrencies are digital assets that serve as virtual currencies.
        They operate on a decentralized structure and securely record
        transaction data using blockchain technology. Cryptocurrencies are often
        seen as an alternative to traditional financial systems and are commonly
        used for anonymous or privacy-focused transactions. Popular
        cryptocurrencies include Bitcoin, Ethereum, Ripple, and Litecoin.
      </p>
      <div>
        <AboutCryptoInfoList content="Cryptocurrencies: decentralized, blockchain, transparency, security, immutability, transaction records." />
        <AboutCryptoInfoList content="Fiat currencies: traditional, central authority, government, financial institution, control, funds." />
        <AboutCryptoInfoList content="Cross-border payments: fast, borderless transactions, intermediaries, transaction fees, useful, remittances." />
      </div>
      <div className="d-flex justify-content-end">
        <Button
          buttonText="Learn More"
          backgroundcolor="#72b0d9"
          padding=".5rem 1.4rem"
          color="#FFFFFF"
          border="none"
          fontSize=".9rem"
        />
      </div>
    </div>
  );
};

export default AboutCryptoInfo;
