import { Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Providers } from "./Provider";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "600", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>LangNet</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/Images/image.svg"
          sizes="32x32"
        />
      </head>
      <body className={poppins.className}>
        <Providers>
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          />
          {children}
        </Providers>
      </body>
    </html>
  );
}
