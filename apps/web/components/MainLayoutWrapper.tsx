"use client";

import { usePathname } from "next/navigation";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import { Navbar } from "./Navbar";

export function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdmin = pathname.startsWith("/admin");

    if (isAdmin) {
        // Admin routes get no navbar, no footer, no background
        return <>{children}</>;
    }

    // Regular routes get full layout
    return (
        <>
            <div className="fixed inset-0 z-[-1]">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Global Background"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
            </div>
            <Navbar />
            {children}
            <footer className="bg-[#2d4930] text-[#f7f9e4] py-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="w-64 relative h-20">
                        <Image src="/icons/logo.svg" alt="Global Trade Housing" fill className="object-contain" />
                    </div>
                    <div className="text-sm opacity-80">
                        © {new Date().getFullYear()}. All Rights Reserved.
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                    </div>
                </div>
            </footer>
        </>
    );
}
