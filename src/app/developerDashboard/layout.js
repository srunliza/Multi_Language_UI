
import "../globals.css";
import { Inter } from "next/font/google";
import SidebarComponent from "@/components/SidebarComponent";
import Link from "next/link";
import DashboardDeveloperComponent from "@/components/DashboardDeveloperComponent";
import NavbarDashbaord from "@/components/NavbarDashbaord";
import MemberComponent from "@/components/MemberComponent";
const inter = Inter({ subsets: ["latin"] });
export default function Root({ children })
{
          return (
                    <html lang="en">
                      <body className={inter.className}>                
                             {children}
                              </body>
                    </html>
                  );
}