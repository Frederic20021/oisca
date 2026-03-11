import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#d1d5db] px-6 py-4 text-slate-700">
      <div className="mx-auto grid w-full max-w-6xl gap-8 p-6 md:grid-cols-2 md:gap-10 md:p-8">
        <div className="flex items-center justify-center">
          <div className="space-y-1 text-lg leading-tight ">
            <p>公益財団法人　大和教育財団</p>
            <p>〒431-1206</p>
            <p>静岡県浜松市中央区庄和町108-3</p>
            <p>TEL（053）489-3227</p>
            <p>FAX（053）489-3233</p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <Link href="https://www.oisca.ac.jp" className="rounded-sm bg-blue-700">
            <Image
              src="/nakano.png"
              alt="学校法人中野学園 オイスカ開発教育専門学校"
              width={200}
              height={100}
              className="object-fit"
              priority
            />
          </Link>
          <Link href="https://www.oisca.ed.jp" className="rounded-sm bg-white">
            <Image
              src="/highSchool.png"
              alt="オイスカ浜松国際高等学校"
              width={200}
              height={100}
              className="object-fit"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}