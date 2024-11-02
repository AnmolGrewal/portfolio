import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const QRCodeGenerator = dynamic(() => import('../../components/QRCodeGenerator'), {
  ssr: false,
});

export default function QRPage() {
  return (
    <main className="flex min-h-screen items-center justify-center mt-[-150px]">
      <Suspense fallback={<div>Loading...</div>}>
        <QRCodeGenerator />
      </Suspense>
    </main>
  );
}