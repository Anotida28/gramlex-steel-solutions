import React from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging (consider sending to error tracking service)
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-background px-6">
          <div className="max-w-md text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
              <svg
                className="h-8 w-8 text-destructive"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-steel-dark">
              Something went wrong
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              We encountered an unexpected error. Please try refreshing the page
              or return to the homepage.
            </p>
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-4 rounded-lg border border-border bg-muted/30 p-3 text-left">
                <summary className="cursor-pointer text-xs font-medium text-muted-foreground">
                  Error details (dev only)
                </summary>
                <pre className="mt-2 overflow-auto text-xs text-destructive">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={this.handleReload}
                className="btn btn-primary"
                type="button"
              >
                Refresh page
              </button>
              <Link
                to="/"
                onClick={this.handleGoHome}
                className="btn btn-outline"
              >
                Go to homepage
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
