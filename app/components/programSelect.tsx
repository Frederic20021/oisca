import Link from "next/link";

const navi = [
    { name: "受け入れから帰国までの流れ", href: "/program/flow" },
    { name: "講習実施施設・講習内容", href: "/program/detail" },
    { name: "プライバシーポリシー", href: "/program/privacy" },
]

const decode = new Map([
    ["flow", 1],
    ["detail", 2],
    ["privacy", 3],
])

export default function ProgramSelect({ selection }: { selection: string }) {
    const normalizedSelection = selection.trim();

    return (
        <>
            <nav className="flex flex-wrap items-center justify-center gap-1 bg-blue-700 px-2 text-white font-bold sm:gap-4 md:gap-16" style={{fontFamily:"sans-serif"}}>
                {navi.map((item, index) => (
                    <Link key={item.name} href={item.href} className={`justify-center px-2 py-2 text-xs ${decode.get(normalizedSelection) === index + 1 ? "bg-gray-500" : ""} hover:bg-gray-500 sm:px-4 sm:text-sm whitespace-nowrap`}>
                        {item.name}
                    </Link>
                ))}
            </nav>
        </>
    )
}