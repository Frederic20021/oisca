"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
    { name: "ホーム", href: "/" },
    { name: "ブログ", href: "/blog" },
    { name: "外国人技能実習事業", href: "/program" },
    { name: "お問い合わせ/アクセス", href: "/contact" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="border-b border-slate-200 bg-white" style={{fontFamily: "yu gothic"}}>
            <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 sm:py-6 md:flex justify-center gap-16">
                <div className="flex items-center justify-center gap-20">
                    <div className="space-y-1">
                        <p className="text-xs text-slate-700 sm:text-sm">公益財団法人</p>
                        <h1 className="text-lg font-semibold text-slate-900 sm:text-2xl">大和教育財団</h1>
                    </div>

                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-100 sm:hidden"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-site-menu"
                        aria-label="メニューを開く"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        メニュー
                    </button>
                </div>

                <nav className="mt-4 hidden items-center gap-4 text-[10px] text-slate-700 sm:mt-0 sm:flex sm:gap-6 sm:text-sm md:gap-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="transition-colors hover:text-blue-700 duration-500 hover:underline"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {isMenuOpen ? (
                    <nav id="mobile-site-menu" className="mt-4 space-y-2 rounded-lg border border-slate-200 bg-slate-50 p-3 sm:hidden">
                        {navigation.map((item) => (
                            <Link
                                key={`mobile-${item.name}`}
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-white hover:text-blue-700"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                ) : null}
            </div>
        </header>
    )
}