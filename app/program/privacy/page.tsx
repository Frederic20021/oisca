import ProgramSelect from "@/app/components/programSelect";

export default function page() {
    return (
        <main className="bg-white overflow-x-hidden">
            <ProgramSelect selection="privacy"/>
            <section className="mx-auto mb-8 max-w-4xl">
                <h1 className="pt-10 text-blue-700 text-xl md:text-2xl font-bold">プライバシーポリシー</h1>
                <section className="font-semibold">
                    <p className="my-4 text-xs indent-4 leading-relaxed text-slate-600 md:text-sm">
                        公益財団法人大和教育財団（以下本財団）は、多くの方々の支援により事業が成り立っています。事業の円滑な運営に当たっては、そうした方々の個人情報の習得が必要となります。本財団は個人情報の重要性を認識し、適切に管理・運用をするために「個人情報保護に関する方針」を以下のように定めます。
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-xs leading-relaxed text-slate-600 md:text-sm">
                        <li>本財団は、自らの事業に必要な目的においてのみ個人情報を取得します。</li>
                        <li>本財団は、上記の目的以外で個人情報の利用を行いません。</li>
                        <li>以下の場合を除いて、本財団は個人情報を第三者に提供・開示をいたしません。
                            <ul className="list-disc list-inside ml-4">
                                <li>ご本人の同意がある場合。</li>
                                <li>本財団の事業を利用する際の会費・負担金等の入金処理、クレジットカード等の決済の上で金融機関に必要な情報を提示する場合。</li>
                            </ul>
                        </li>
                        <li>本財団は、ご本人または代理人から個人情報の開示・訂正・利用停止・削除等を希望された場合は速やかに対応します。</li>
                        <li>本財団は、管理する個人情報への不正なアクセスや破壊・改ざん・漏洩を防止するために適切な措置を講じます。</li>
                        <li>本財団は、個人情報に関する諸法令を尊守し、本方針について職員に周知徹底します。</li>
                        <p className="indent-4">また、必要に応じて同方針の見直し・改善を行います。</p>
                    </ol>
                </section>
            </section>
        </main>
    )
}