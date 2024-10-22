import React from 'react';

import { ErrorMessageProps } from '@/app/utils/interfaces';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  if (!error) return null;

  return (
    <div className="bg-red-100 text-red-700 p-4 rounded-md">
      <strong>Error:</strong> {error.message}
    </div>
  );
};

export default ErrorMessage;