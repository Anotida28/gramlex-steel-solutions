import { Helmet } from "react-helmet-async";

const Seo = ({ title, description }) => (
  <Helmet>
    <title>{title ? `${title} | Gramlex Steel Solutions` : "Gramlex Steel Solutions"}</title>
    {description && <meta name="description" content={description} />}
  </Helmet>
);

export default Seo;
