import { Link } from "react-router-dom";
import Seo from "@/components/Seo.jsx";

const NotFound = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-background px-6 text-center">
      <Seo title="Page Not Found" description="The page you are looking for could not be located." />
      <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        404
      </span>
      <h1 className="mt-6 text-4xl font-bold text-steel-dark md:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
        The page you requested has moved or no longer exists. Use the navigation to continue exploring Gramlex Steel
        Solutions.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-primary transition hover:shadow-lg focus-visible:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
