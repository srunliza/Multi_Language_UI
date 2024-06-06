import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./Provider";
const poppins = Poppins({ subsets: ["latin"], weight: ['100', '400', '600', '800']});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

