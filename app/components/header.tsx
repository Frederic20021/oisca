import Link from "next/link";

const navigation = [
    { name: "ホーム", href: "/" },
    { name: "外国人技能実習事業", href: "/program" },
    { name: "お問い合わせ/アクセス", href: "/contact" },
];

export default function Header() {
    return (
        <header className="border-b border-slate-200 bg-white" style={{fontFamily: "yu gothic"}}>
            <div className="mx-auto flex w-full max-w-6xl flex-col items-start md:gap-40 px-6 py-6 sm:flex-row sm:items-center sm:justify-between md:justify-center">
                <div className="space-y-1 ">
                    <p className="text-xs text-slate-700 sm:text-sm">公益財団法人</p>
                    <h1 className="text-xl font-semibold text-slate-900 sm:text-2xl">大和教育財団</h1>
                </div>

                <nav className="flex items-center gap-4 text-[10px] text-slate-700 sm:gap-6 sm:text-sm md:gap-12">
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
            </div>
        </header>
    )
}