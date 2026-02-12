import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                    <p className="text-xs text-slate-700 sm:text-sm">公益財団法人</p>
                    <h1 className="text-xl font-semibold text-slate-900 sm:text-2xl">大和教育財団</h1>
                </div>

                <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-700 sm:gap-10 sm:text-base">
                    <Link className="transition-colors hover:text-slate-900" href="/home">ホーム</Link>
                    <Link className="transition-colors hover:text-slate-900" href="/program">外国人技能実習事業</Link>
                    <Link
                        className="border-b-2 border-blue-600 pb-1 text-blue-600 transition-colors hover:text-blue-700"
                        href="/contact"
                    >
                        お問い合わせ/アクセス
                    </Link>
                </nav>
            </div>
        </header>
    )
}