import Hero from "./components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-white overflow-x-hidden text-black">
      <Hero />

      <section className="bg-white px-4 py-4 sm:px-8 sm:py-12 md:px-12 lg:px-20 lg:py-16">
        <div className="mx-auto w-full max-w-4xl">
          <div className="my-6 border-t border-slate-500/70" />
          <div className="text-left flex flex-col gap-4 md:gap-12">
            <h2 className="text-lg font-bold tracking-wide text-blue-700 md:text-2xl">
              財団概要
            </h2>
            <div className="space-y-2 font-semibold text-slate-700 ">
              <p>財団名：公益財団法人 大和教育財団</p>
              <p>所在地：静岡県浜松市中央区庄和町108-3</p>
              <p>代表理事：　松岡 恭次郎</p>
              <p>設立　　：　2010年４月１日</p>
              <p>活動エリア　：静岡県</p>
              <p>主な事業内容：人材育成のための教育事業</p>
              <p className="pl-[4.5em]">外国人技能実習受入事業</p>
            </div>
          </div>

          <div className="my-12 border-t border-slate-500/70" />

          <div className="space-y-6">
            <h1 className="text-xl text-center font-bold text-blue-700 md:text-4xl">
              設立理念
            </h1>
              <p className="indent-4 justify-center leading-relaxed font-semibold text-xl">
                本財団は、オイスカ・インターナショナル（The <span className="text-red-500">O</span>rganization for
                <span className="text-red-500">I</span>ndustrial, <span className="text-red-500">S</span>piritual and <span className="text-red-500">C</span>ultural
                <span className="text-red-500">A</span>dvancement-International）が設立母体です。オイスカ・インターナショナルは、「すべての人々が様々な違いを乗り越えて共存し、地球上のあらゆる生命の基盤を守り育てようとする世界」を目指して1961年に設立されました。本部を日本に置き、現在34の国と地域に組織を持つ国際NGOです。主にアジア・太平洋地域で農村開発や環境保全活動をしています。特に、人材育成に力を入れ、各国の青年が地域のリーダーとなれるよう研修を行っています。
              </p>
              <p className="indent-4 justify-center font-semibold text-xl">
                本財団は、このオイスカ・インターナショナルの理念のもと、国内外及び性別・年齢を問わず、将来のリーダーになるための人材育成に関する事業を行い、国際協力や職業能力開発の発展に寄与することを目的として設立しました。
              </p>
          </div>

          <div className="my-12 border-t border-slate-500/70" />

          <div className="text-left flex flex-col gap-4 md:gap-12">
            <h2 className="text-lg font-bold tracking-wide text-blue-700 md:text-2xl">
              沿革
            </h2>
            <div className="space-y-3 leading-relaxed text-slate-700 md:leading-[1.45]">
              <div className="grid grid-cols-[7em_1fr] gap-x-6">
                <p>2010年 4月 1日</p>
                <div>
                  <p>一般財団法人大和教育財団　設立</p>
                  <p>学童保育事業（オイスカキッズクラブ）、サッカースクール事業（<span className="text-blue-700">オイスカサッカースクール</span>）</p>
                </div>
              </div>
              <div className="grid grid-cols-[7em_1fr] gap-x-6">
                <p>2017年 1月 1日</p>
                <p>無料職業紹介事業の許可を取得　外国人技能実習事業を開始</p>
              </div>
              <div className="grid grid-cols-[7em_1fr] gap-x-6">
                <p>2018年 1月 9日</p>
                <p>外国人技能実習制度における監理団体としての許可を取得　許可番号 許1706001331号</p>
              </div>
              <div className="grid grid-cols-[7em_1fr] gap-x-6">
                <p>2018年9月27日</p>
                <div>
                  <p>公益財団法人化の認可を取得</p>
                  <p>サッカースクール事業を関連会社の(株)遠州総合企画に移行</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="my-12 border-t border-slate-500/70" />

          <div className="space-y-6">
            <h1 className="text-xl text-center font-bold text-blue-700 md:text-4xl">
              団体の事業
            </h1>
            <h2 className="text-blue-700 text-2xl font-bold">外国人技能実習事業</h2>
            <Image src="/ginoujisshuu.jpg" alt="外国人技能実習事業" width={400} height={400} className="rounded-lg mx-auto object-contain"/>
          </div>
          
          <div className="mt-10 flex flex-col items-start gap-4 rounded-lg bg-slate-50 p-4 sm:flex-row md:p-6">
            <div className="w-full space-y-2">
              <p className="break-all font-semibold text-slate-700">
                2-監理団体の業務の運営に関する規程.pdf
              </p>
              <p className="text-base font-semibold text-slate-700">
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
        </div>
      </section>
    </section>
  );
}
