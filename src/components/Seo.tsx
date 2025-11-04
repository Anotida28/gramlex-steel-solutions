import { Helmet } from "react-helmet-async";

type SeoProps = {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
};

const DEFAULT_TITLE = "Gramlex Investments | Steel Reinforcement & Logistics Specialists";
const DEFAULT_DESCRIPTION =
  "Gramlex Investments delivers premium steel reinforcement, cutting, bending, and logistics services for construction, civil engineering, and mining projects across Zimbabwe.";
const Seo = ({ title, description, canonical, ogImage }: SeoProps) => {
  const resolvedTitle = title ? `${title} | Gramlex Investments` : DEFAULT_TITLE;
  const resolvedDescription = description ?? DEFAULT_DESCRIPTION;

  return (
    <Helmet>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={resolvedTitle} />
      <meta property="twitter:description" content={resolvedDescription} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

export default Seo;
