import Image from "next/image";
import ProgramSelect from "@/app/components/programSelect";

export default function page() {
    return (
        <main className="bg-white overflow-x-hidden">
            <ProgramSelect selection="detail"/>
            <section className="mx-auto mb-8 max-sm:max-w-[300px] max-w-4xl">
                <h1 className="pt-10 text-blue-700 text-2xl md:text-4xl text-center font-bold">講習実施施設・講習内容</h1>
                <h1 className="pt-10 text-blue-700 text-xl md:text-2xl font-bold">講習実施施設</h1>
                <section className="font-semibold">
                    <p className="my-4 text-xs indent-4 leading-relaxed text-slate-600 md:text-sm">
                        学校法人中野学園　オイスカ開発教育専門学校　庄内キャンパス<br />静岡県浜松市中央区庄和町108-3
                    </p>
                    <div className="grid md:flex items-center md:justify-center gap-16">
                        <Image src="/detail/place1.jpg" alt="オイスカ開発教育専門学校　庄内キャンパス" width={400} height={300} className="rounded-lg object-contain"/>
                        <Image src="/detail/place2.jpg" alt="オイスカ開発教育専門学校　庄内キャンパス" width={400} height={300} className="rounded-lg object-contain"/>
                    </div>
                </section>
                <div className="mt-12 border-t border-slate-500/70" />
                <h1 className="pt-10 text-blue-700 text-xl md:text-2xl font-bold">講習内容</h1>
                <section className="font-semibold">
                    <p className="my-4 text-xs leading-relaxed text-slate-600 md:text-sm">
                        併設されている宿舎に入っての講習となります。（２ヵ月間）<br />日本語初級～中級、礼儀作法、実習現場適応訓練、習慣風習、安全衛生、生活知識、法的保護に必要な情報　他
                    </p>
                    <div className="mx-auto grid md:grid-cols-2 items-center md:justify-center gap-4">
                        <Image src="/detail/seminar1.jpg" alt="オイスカ開発教育専門学校　庄内キャンパス" width={350} height={300} className="rounded-lg object-contain"/>
                        <Image src="/detail/seminar2.jpg" alt="オイスカ開発教育専門学校　庄内キャンパス" width={250} height={250} className="rounded-lg object-contain"/>
                        <Image src="/detail/seminar4.jpg" alt="オイスカ開発教育専門学校　庄内キャンパス" width={350} height={300} className="rounded-lg object-contain"/>
                        <Image src="/detail/seminar3.jpg" alt="オイスカ開発教育専門学校　庄内キャンパス" width={250} height={250} className="rounded-lg object-contain"/>
                    </div>
                </section>
                <div className="mt-12 border-t border-slate-500/70" />
                <h1 className="pt-10 text-blue-700 text-xl md:text-2xl font-bold">講習内容</h1>
                <section className="font-semibold">
                    <div className="my-4 text-xs leading-relaxed text-slate-600 md:text-sm">
                        農業、建設業、食品製造業、機械・金属製造業、溶接業、介護　等　33先　（89名）<br />
                        <p className="text-center">（2024年8月31日現在）</p>
                    </div>
                </section>
                <div className="mt-12 border-t border-slate-500/70" />
                <h1 className="pt-10 text-blue-700 text-xl md:text-2xl font-bold">実習実施先の声</h1>
                <section className="font-semibold">
                    <ul className="my-4 text-xs leading-relaxed text-slate-600 md:text-sm pl-4 list-disc">
                        <li>礼儀正しく、時間を守り、職場が非常に元気になった。</li>
                        <li>勤労意欲が高く、作業等の習得が非常に早い。</li>
                        <li>職場内で「なくてはならない人材」に成長し、「あてにできる人材」になっている。</li>
                        <li>継続して受入れ、開発途上国のリーダー養成に一役買いたい。</li>
                        <br />
　等々
                    </ul>
                </section>
            </section>
        </main>
    )
}