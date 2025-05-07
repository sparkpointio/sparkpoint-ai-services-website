import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from './BootstrapClient';
import {Footer} from '@/components/layout/footer';
import "./globals.css";
import type { Metadata } from "next";
import { Rubik, Roboto } from "next/font/google";
import Script from "next/script";

const rubik = Rubik({
  weight: '400',
  variable: '--font-rubik',
  subsets: ['latin']
});

const roboto = Roboto({
  weight: '400',
  variable: '--font-roboto',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Deploy AI That’s Tailored to Your Needs',
  description: 'SparkPoint’s AI Deployment Services make it easy to integrate practical, cost-efficient automation into your business without the tech overwhelm.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="favicon.ico?v=2"/>

      {/* Other favicon sizes */}
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>

      {/* Apple Touch Icon */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>

      {/* Android Chrome Icons */}
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png"/>
      <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png"/>

      {/* Socmed metadata */}
      <meta name="description"
            content="SparkPoint’s AI Deployment Services make it easy to integrate practical, cost-efficient automation into your business without the tech overwhelm."/>
      <meta property="og:title" content="Deploy AI That’s Tailored to Your Needs"/>
      <meta property="og:description"
            content="SparkPoint’s AI Deployment Services make it easy to integrate practical, cost-efficient automation into your business without the tech overwhelm."/>
      <meta property="og:image" content="/og-image.jpg"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://services.sparkpoint.io"/>

      {/* Cookiebot CMP */}
      <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="879d6476-b92b-4f45-aca8-b3299186cd06"
          data-blockingmode="auto"
          strategy="afterInteractive"
      />

      {/* Google Analytics */}
      <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CN79RFQG3G"
          data-cookieconsent="ignore"
      />
      <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CN79RFQG3G', {
                'anonymize_ip': true
              });
            `,
          }}
      />
    </head>
    <body
        className={`${rubik.variable} ${roboto.variable} antialiased`}
    >
    <BootstrapClient />
    {children}
    <Footer />
    </body>
    </html>
  );
}
