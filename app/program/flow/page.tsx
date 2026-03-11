import Image from "next/image";
import ProgramSelect from "@/app/components/programSelect";

export default function page() {
    return (
        <main className="bg-white overflow-x-hidden">
            <ProgramSelect selection="flow"/>
            <section className="text-center mx-auto max-w-3xl">
                <h1 className="pt-10 text-blue-700 text-2xl md:text-4xl font-bold">受け入れから入国までの流れ</h1>
                <Image src="/program/flow.jpg" alt="Flow Image" width={600} height={600} className="mx-auto mt-8 max-w-[800px] object-contain"/>
                <h2 className="pt-6 text-2xl md:text-4xl font-bold text-blue-700">取り扱い職種</h2>
                <p className="my-4 text-sm font-semibold leading-relaxed text-slate-600 md:text-base">農業関係、建築関係、食品製造関係、機械・金属関係、介護関係、その他５職種 <br/>
                （具体的な職種・作業についてはお問合せください。）</p>

            </section>
            <div className="mx-auto max-w-3xl text-left">
                <div className="border-t border-slate-500/70" />
                <h1 className="pt-10 text-blue-700 text-xl md:text-2xl font-bold">技能実習生の送り出し国</h1>
                <h2 className="pt-6 text-lg md:text-xl text-gray-700">フィリピン、ベトナム、インドネシア（2019年１月１日現在）</h2>
                <div className="mb-6 border-b border-slate-500/70" />
            </div>
        </main>
    )
}