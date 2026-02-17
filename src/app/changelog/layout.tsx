import React from 'react';

interface ChangelogLayoutProps {
  children: React.ReactNode;
}

export default function ChangelogLayout({ children }: ChangelogLayoutProps) {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="prose prose-lg dark:prose-invert mx-auto">
        {children}
      </div>
    </div>
  );
}