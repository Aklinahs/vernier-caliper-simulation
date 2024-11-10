import React from "react";
import { ErrorConfig } from "../../utils/errorHandler";

interface ErrorDisplayProps {
  error: ErrorConfig;
  onDismiss?: () => void;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  error,
  onDismiss,
}) => {
  return (
    <div
      className={`rounded-md p-4 mb-4 ${
        error.severity === "error"
          ? "bg-red-50 text-red-800"
          : error.severity === "warning"
          ? "bg-yellow-50 text-yellow-800"
          : "bg-blue-50 text-blue-800"
      }`}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <p className="font-medium">{error.type}</p>
          <p className="mt-1">{error.message}</p>
          {error.code && (
            <p className="mt-1 text-sm opacity-75">Code: {error.code}</p>
          )}
        </div>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="ml-4 text-sm font-medium hover:opacity-75"
          >
            Dismiss
          </button>
        )}
      </div>
    </div>
  );
};
