import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";
import Image from "next/image";
import Link from "next/link";
import { Twitter, Linkedin, Mail } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DocMeet - Doctors Appointment App",
  description: "Connect with doctors anytime, anywhere",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} bg-background text-gray-50`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header />

            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            {/* footer with emerald styling */}
            <footer className="bg-emerald-800/10 text-emerald-200">
              <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo & About */}
                <div className="space-y-4">
                  <Image
                    src="/logo1.png"
                    alt="DocMeet logo"
                    width={150}
                    height={50}
                    className="object-contain filter brightness-125"
                  />
                  <p className="text-sm leading-relaxed text-emerald-100">
                    DocMeet is your on-demand telehealth platform—connect with board-certified doctors anytime, anywhere.
                  </p>
                  <div className="flex space-x-4 text-emerald-300">
                    <Link href="https://twitter.com/yourhandle" target="_blank" aria-label="Twitter">
                      <Twitter className="h-6 w-6 hover:text-white transition-colors" />
                    </Link>
                    <Link href="https://linkedin.com/company/yourpage" target="_blank" aria-label="LinkedIn">
                      <Linkedin className="h-6 w-6 hover:text-white transition-colors" />
                    </Link>
                    <Link href="mailto:support@docmeet.com" aria-label="Email">
                      <Mail className="h-6 w-6 hover:text-white transition-colors" />
                    </Link>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="font-semibold text-emerald-100 mb-4 uppercase tracking-wide">Quick Links</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/dashboard" className="hover:text-emerald-50 transition">Dashboard</Link></li>
                    <li><Link href="/doctors" className="hover:text-emerald-50 transition">Find Doctors</Link></li>
                    <li><Link href="/pricing" className="hover:text-emerald-50 transition">Pricing</Link></li>
                    <li><Link href="/settings" className="hover:text-emerald-50 transition">Settings</Link></li>
                  </ul>
                </div>

                {/* Legal & Support */}
                <div>
                  <h4 className="font-semibold text-emerald-100 mb-4 uppercase tracking-wide">Legal & Support</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/privacy-policy" className="hover:text-emerald-50 transition">Privacy Policy</Link></li>
                    <li><Link href="/terms-of-service" className="hover:text-emerald-50 transition">Terms of Service</Link></li>
                    <li><Link href="/contact" className="hover:text-emerald-50 transition">Contact Support</Link></li>
                    <li><Link href="/faq" className="hover:text-emerald-50 transition">FAQ</Link></li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-emerald-700 pt-6">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between text-sm text-emerald-300">
                  <span>© {new Date().getFullYear()} DocMeet. All rights reserved.</span>
                  <div className="flex space-x-6 mt-4 md:mt-0">
                    <Link href="/status" className="hover:text-emerald-100 transition">System Status</Link>
                    <Link href="/security" className="hover:text-emerald-100 transition">Security</Link>
                    <Link href="/blog" className="hover:text-emerald-100 transition">Blog</Link>
                  </div>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
