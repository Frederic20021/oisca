import Link from "next/link";

export default function NotFound() {
    return (
        <main className="mx-auto flex min-h-[70vh] w-full max-w-4xl flex-col items-center justify-center px-6 py-16 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">404</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">ページが見つかりません</h1>
            <p className="mt-3 max-w-xl text-base text-slate-600 sm:text-lg">
                お探しのページは移動または削除された可能性があります。
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <Link
                    href="/"
                    className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                    ホームへ戻る
                </Link>
                <Link
                    href="/contact"
                    className="rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400"
                >
                    お問い合わせ/アクセス
                </Link>
            </div>
        </main>
    );
}
