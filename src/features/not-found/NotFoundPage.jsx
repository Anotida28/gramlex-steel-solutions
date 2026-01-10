import { Link } from "react-router-dom";
import Seo from "@/components/Seo.jsx";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-background px-6 text-center">
      <Seo title="Page Not Found" description="The page you are looking for could not be located." />
      <span className="eyebrow">404</span>
      <h1 className="mt-6 text-4xl font-bold text-steel-dark md:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
        The page you requested has moved or no longer exists. Use the navigation to continue exploring Gramlex Steel Solutions.
      </p>
      <Link to="/" className="mt-8 btn btn-primary btn-lg" data-focus="strong">
        Back to home
      </Link>
    </div>
  );
};

export default NotFoundPage;
