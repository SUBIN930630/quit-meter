import type { Metadata } from 'next';
import Script from 'next/script';
import KakaoScript from '@/components/KakaoScript';
import './globals.css';

export const metadata: Metadata = {
  title: '퇴사각 측정기 | 나 지금 버틸 만해...?',
  description: '직장인 번아웃 자가진단 테스트. 10문항으로 나의 퇴사각을 측정해보세요.',
  keywords: ['퇴사', '번아웃', '직장인', '테스트', '자가진단', '퇴사각'],
  openGraph: {
    title: '🔥 퇴사각 측정기',
    description: '나 지금 버틸 만해...? 10문항으로 측정해보세요!',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://quit-meter-app.vercel.app',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '퇴사각 측정기',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="ko">
      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-screen">
        <KakaoScript />
        <main className="min-h-screen flex items-center justify-center p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
