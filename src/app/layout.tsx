import { Header } from '@/widgets/header/ui/header';
import type { FC, PropsWithChildren } from 'react';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-16">
        {children}
      </main>
    </div>
  );
};
