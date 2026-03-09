"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

type ContactFormState = {
    name: string;
    company: string;
    region: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
};

const initialState: ContactFormState = {
    name: "",
    company: "",
    region: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
};

export default function Contact() {
    const [formState, setFormState] = useState<ContactFormState>(initialState);
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("sending");

        try {
            // EmailJS example (replace with your service/template IDs):
            await emailjs.send("service_v0cl8gj", "template_4iliybk", {
               name: formState.name,
               company: formState.company,
               region: formState.region,
               phone: formState.phone,
               email: formState.email,
               subject: formState.subject,
               message: formState.message,
             });

            await new Promise((resolve) => setTimeout(resolve, 500));
            setStatus("sent");
            setFormState(initialState);
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <main className="bg-slate-50 py-14 sm:py-20">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6">
                <div className="text-center">
                    <h2 className="mt-4 text-3xl font-semibold text-blue-700 sm:text-4xl">お問い合わせ</h2>
                    <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
                        事業に関するご相談や資料のご依頼は、下記フォームよりお気軽にお問い合わせください。
                        担当者より2営業日以内にご連絡いたします。
                    </p>
                </div>

                <div className="w-full rounded-2xl bg-white p-6 shadow-lg sm:p-10 lg:p-12">
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="grid gap-5 sm:grid-cols-2">
                            <label className="space-y-2 text-sm font-medium text-slate-700">
                                お名前（担当者名）<span className="text-rose-500"> *</span>
                                <input
                                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    name="name"
                                    required
                                    value={formState.name}
                                    onChange={handleChange}
                                />
                            </label>
                            <label className="space-y-2 text-sm font-medium text-slate-700">
                                会社名<span className="text-rose-500"> *</span>
                                <input
                                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    name="company"
                                    required
                                    value={formState.company}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <label className="space-y-2 text-sm font-medium text-slate-700">
                                会社所在地（都道府県）<span className="text-rose-500"> *</span>
                                <input
                                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    name="region"
                                    required
                                    value={formState.region}
                                    onChange={handleChange}
                                />
                            </label>
                            <label className="space-y-2 text-sm font-medium text-slate-700">
                                電話番号（任意）
                                <input
                                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    name="phone"
                                    value={formState.phone}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <label className="space-y-2 text-sm font-medium text-slate-700">
                                会社メールアドレス<span className="text-rose-500"> *</span>
                                <input
                                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    name="email"
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                />
                            </label>
                            <label className="space-y-2 text-sm font-medium text-slate-700">
                                件名<span className="text-rose-500"> *</span>
                                <input
                                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    name="subject"
                                    required
                                    value={formState.subject}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>

                        <label className="space-y-2 text-sm font-medium text-slate-700">
                            お問い合わせ内容<span className="text-rose-500"> *</span>
                            <textarea
                                className="min-h-[160px] w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                name="message"
                                required
                                value={formState.message}
                                onChange={handleChange}
                            />
                        </label>

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-xs text-slate-500">* は必須項目です。</p>
                            <button
                                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
                                disabled={status === "sending"}
                                type="submit"
                            >
                                {status === "sending" ? "送信中..." : "送信する"}
                            </button>
                        </div>

                        {status === "sent" && (
                            <p className="rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                                送信が完了しました。ありがとうございます。
                            </p>
                        )}
                        {status === "error" && (
                            <p className="rounded-lg bg-rose-50 px-4 py-3 text-sm text-rose-700">
                                送信に失敗しました。時間をおいて再度お試しください。
                            </p>
                        )}
                    </form>
                </div>

                <section className="w-full rounded-2xl bg-white p-6 shadow-lg sm:p-10 lg:p-12">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-2xl bg-slate-50 p-6">
                            <p className="text-lg font-semibold text-blue-700">お問い合わせ先</p>
                            <div className="mt-3 space-y-2 text-sm text-slate-700">
                                <p className="font-semibold text-slate-900">公益財団法人　大和教育財団</p>
                                <p>〒431-1206</p>
                                <p>静岡県浜松市中央区庄和町108-3</p>
                                <p className="text-sm font-semibold text-slate-900">受付時間</p>
                                <p className="mt-2 text-sm text-slate-600">
                                    平日 9:00 - 17:30（土日祝除く）
                                </p>
                                <p>TEL　053-489-3227</p>
                                <p>FAX　053-489-3233</p>
                            </div>
                        </div>
                        <div className="hidden rounded-2xl bg-slate-50 p-6">
                        </div>
                        <div className=" lg:col-span-2 grid gap-6">
                            <div className="rounded-2xl bg-slate-50 p-6">
                                <p className="text-sm font-semibold text-slate-900">アクセス</p>
                                <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
                                    <iframe
                                        title="Google Map"
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13113.509966259098!2d137.5981339!3d34.7460825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601b287911ec2377%3A0x4cf146db125be888!2zMTA4LTMgU2jFjXdhY2jFjSwgQ2jFq8WNLWt1LCBIYW1hbWF0c3UsIFNoaXp1b2thIDQzMS0xMjA2!5e0!3m2!1sen!2sjp!4v1773017911853!5m2!1sen!2sjp"
                                        width="100%"
                                        height="280"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="w-full"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}