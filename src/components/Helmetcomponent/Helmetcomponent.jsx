import { Helmet } from "react-helmet";

const Helmetcomponent = ({ title }) => {
  return (
    <Helmet>
    <title>{title}</title>
    <meta name="keywords" content="IJCFI, International Journal of Corporate Finance and Investment , corporate finance, investment research, financial markets, financial management, capital investment, peer-reviewed journal, open access finance journal, financial analysis, economic policy, asset management, international finance, portfolio management, investment strategies, financial planning, academic finance journal, financial modeling, finance and investment trends, scholarly finance publication, journal of corporate finance." />
    <meta name="description" content="IJCFI publishes high-quality research in corporate finance and investment with global visibility, open access, and expert peer review." />
    <meta name="author" content="IJCFI Editorial Team" />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="International Journal of Corporate Finance and Investment  " />
    <meta property="og:description" content="IJCFI publishes high-quality research in corporate finance and investment with global visibility, open access, and expert peer review." />
    <meta property="og:url" content="https://www.ijcfi.com/" />
    <meta property="og:image" content="http://www.ijcfi.com/assets/IJCFI.png" />

    <link rel="canonical" href="https://www.ijcfi.com/" />
    <link rel="icon" type="image/svg+xml" href="/assets/Fav.jpg" />
  </Helmet>
  );
};

export default Helmetcomponent;