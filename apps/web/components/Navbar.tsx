"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Navbar() {
    const pathname = usePathname();
    const scrollRef = useRef<HTMLDivElement>(null);

    const links = [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/contact", label: "Contact" },
    ];

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 150;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    // Center active link on mount/change for mobile
    useEffect(() => {
        if (scrollRef.current) {
            const activeLink = scrollRef.current.querySelector('[data-active="true"]');
            if (activeLink) {
                activeLink.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }, [pathname]);

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-6 md:py-8 mt-4 text-white">
            {/* Logo - Centered on mobile, Left on desktop */}
            <div className="relative w-64 h-24 mb-4 md:mb-0">
                <Image
                    src="/icons/logo.svg"
                    alt="Global Trade Housing"
                    fill
                    className="object-contain object-center md:object-left"
                    priority
                />
            </div>

            <div className="relative w-full md:w-auto flex items-center justify-center md:justify-end">
                {/* Mobile Navigation Links - Centered & Scrollable */}
                <div
                    ref={scrollRef}
                    className="flex gap-12 text-lg font-light tracking-[0.2em] font-display items-center h-16 md:h-32 overflow-x-auto snap-x snap-mandatory px-[calc(50%-30px)] md:px-0 w-full md:w-auto no-scrollbar scroll-smooth"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            data-active={pathname === link.href}
                            className={`transition-all hover:text-white relative py-2 whitespace-nowrap snap-center uppercase ${pathname === link.href ? "font-medium text-white" : "text-white/60 hover:text-white/90"
                                }`}
                        >
                            {link.label}
                            {pathname === link.href && (
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white shadow-[0_0_15px_rgba(255,255,255,1)]" />
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
