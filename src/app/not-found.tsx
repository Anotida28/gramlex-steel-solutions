import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-muted/20 py-20">
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-bold text-primary">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="text-sm font-medium text-primary transition-colors hover:text-primary/80 hover:underline"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
