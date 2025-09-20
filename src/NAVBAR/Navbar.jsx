import React, { useState, useEffect } from "react";
import './Navbar.css';


// Responsive Navbar (no CSS)
// - Simple links + toggle for mobile
// - No Tailwind or external styles applied


const navItems = [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/programs" },
    { label: "Coaching", href: "/coaching" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/blog" },
    { label: "Contact", href: "/contact" },
];


export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    return (
        <>
            <header className={scrolled ? "scrolled" : ''}>
                <nav>
                    {/* Brand */}
                    <a href="/">
                        <strong>Paul Perez Training</strong>
                    </a>


                    {/* Desktop nav */}
                    <ul className={open ? "mobile-menu-open" : ""}>
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>


                    {/* CTA */}
                    <a href="/contact">Book Session</a>


                    {/* Mobile menu button */}
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setOpen((v) => !v)}>
                        {open ? "Close" : "Menu"}
                    </button>
                </nav>
            </header>
            <div style={{ height: '80px' }}></div> {/* Spacer div */}
        </>
    );
}