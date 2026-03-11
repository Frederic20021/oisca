import Image from "next/image";
import ProgramSelect from "@/app/components/programSelect";


const image =[
    { src: "/program/program1.jpg"},
    { src: "/program/program2.jpg"},
    { src: "/program/program3.jpg"}
]

export default function program() {
    return (
        <main className="bg-white overflow-x-hidden">
            <ProgramSelect selection=""/>
            <div className="mx-auto max-w-6xl bg-white">

            <div className="px-4 pt-8 text-center text-2xl font-bold text-blue-600 sm:text-3xl">
                外国人技能実習事業
            </div>
            <div className="mx-auto flex flex-col items-center justify-center gap-3 bg-white px-4 sm:flex-row sm:gap-6 md:gap-12">
                {image.map((item, index) => (
                    <Image key={index} src={item.src} alt={`Program Image ${index + 1}`} width={230} height={230}  className="h-auto w-full max-w-[230px] object-contain"/>
                ))}
            </div>
            <section className="bg-white px-4 py-8 sm:px-8 sm:py-12 md:px-12 lg:px-20 lg:py-16">
                <div className="mx-auto w-full max-w-4xl">
                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:gap-12">
                        <h2 className="text-lg font-bold tracking-wide text-blue-700 md:text-2xl">
                            外国人技能実習生
                        </h2>
                        <h3 className="text-lg font-bold tracking-wide text-blue-700 md:text-2xl">
                            技能実習制度とは
                        </h3>
                    </div>

                    <div className="mt-8 space-y-5 text-sm font-semibold leading-relaxed text-slate-600 md:indent-4 md:text-sm ">
                        <p>
                            日本で開発され培われた技能・技術・知識の開発途上国等への移転を図り、その開発途上国等の経済発展を担う
                            「人づくり」に協力することを目的とする制度です。
                        </p>
                        <p>
                            具体的には、開発途上国の産業基盤を担う若者を育成すること、国際的な視野に立った開発途上国の地域社会の
                            リーダーを養成すること、多国間の相互理解を深め国際的な協力関係を築くことを目的とした制度です。
                        </p>
                    </div>

                    <div className="my-12 border-t border-slate-500/70" />

                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-black md:text-2xl">
                            財団の役割
                        </h3>
                        <div className="space-y-4 text-sm font-semibold leading-relaxed text-slate-600 md:indent-4">
                            <p>
                                大和教育財団では、アジアの開発途上国の発展のため、国の「外国人技能実習機構（OTIT）」の許可を受け、
                                途上国の産業基盤を担う若者を受け入れる事業を行っています。
                            </p>
                            <p>
                                この若者たちが、途上国発展のリーダーとして活躍できるよう養成することで、国際的に貢献することを目的に活動しています。
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col items-start gap-4 rounded-lg bg-slate-50 p-4 sm:flex-row md:p-6">
                        <Image src="/file.svg" alt="PDF" width={56} height={56} className="shrink-0" />
                        <div className="w-full space-y-2">
                            <p className="break-all font-semibold text-slate-700">
                                2-監理団体の業務の運営に関する規程.pdf
                            </p>
                            <p className="text-base font-semibold text-slate-600">
                                PDFファイル [177.3 KB]
                            </p>
                            <a
                                href="/program/2-監理団体の業務の運営に関する規程.pdf"
                                download
                                className="inline-flex w-full justify-center rounded-md bg-blue-700 px-6 py-3 font-bold text-white hover:bg-blue-800 sm:w-auto"
                            >
                                ダウンロード
                            </a>
                        </div>
                    </div>

                    <div className="my-12 border-t border-slate-500/70" />

                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-black md:text-2xl">
                            技能実習生受け入れのメリット
                        </h3>
                        <ul className="space-y-4 pl-5 text-sm font-semibold list-disc text-slate-600">
                            <li>勤勉な若手の活力が確保される。</li>
                            <li>意欲の高い技能実習生を受入れることにより、職場の活性化が図られる。</li>
                            <li>社員による技能実習生への指導を通じ、社員の知識・技能の棚卸、作業の見直しが図られ、職場の改善につながる。</li>
                            <li>海外滲出の際、基盤の構築と人材の確保につながる。</li>
                        </ul>
                    </div>

                </div>
            </section>
            </div>
        </main>
    )
}