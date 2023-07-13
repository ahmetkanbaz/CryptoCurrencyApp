const FooterBottom = () => {
  return (
    <div className="footerBottom">
      <div className="d-flex justify-content-between align-items-center pb-4">
        <div>
          <a
            href="https://www.coingecko.com/tr"
            className="fw-bold text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            Coin Gecko
          </a>
          <span> was used while developing the project.</span>
        </div>
        <div>
          <span>Designed By </span>
          <a
            href="https://htmlcodex.com/"
            className="text-decoration-none fw-bold"
            target="_blank"
            rel="noreferrer"
          >
            HTML Codex
          </a>
        </div>
      </div>
      <div className="py-4 d-flex justify-content-center">
        © 2023 Copyright by
        <a
          href="https://github.com/ahmetkanbaz"
          target="_blank"
          className="text-decoration-none ms-lg-1 fw-bold"
          rel="noreferrer"
        >
          Ahmet Kanbaz
        </a>
        . All rights reserved.
      </div>
    </div>
  );
};

export default FooterBottom;
