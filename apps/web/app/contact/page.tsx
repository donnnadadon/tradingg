"use client";

import { useState } from "react";
import { MoveRight } from "lucide-react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => {
            setSubmitted(true);
        }, 800);
    };

    return (
        <main className="min-h-screen bg-transparent pt-72 md:pt-60 pb-20 px-6 flex items-center justify-center">
            <div className="w-full max-w-2xl">
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
                    {!submitted ? (
                        <>
                            <div className="mb-10 text-center">
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
                                    Talk to an Expert
                                </h1>
                                <p className="text-lg text-gray-200 font-light">
                                    Schedule a free consultation with one of our experienced financial advisors today.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium text-gray-200 ml-1">
                                            First Name
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            id="firstName"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7f9e4]/50 focus:border-transparent transition-all hover:bg-white/10"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium text-gray-200 ml-1">
                                            Last Name
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            id="lastName"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7f9e4]/50 focus:border-transparent transition-all hover:bg-white/10"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-200 ml-1">
                                        Email Address
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        id="email"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7f9e4]/50 focus:border-transparent transition-all hover:bg-white/10"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-gray-200 ml-1">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7f9e4]/50 focus:border-transparent transition-all hover:bg-white/10"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-200 ml-1">
                                        Message
                                    </label>
                                    <textarea
                                        required
                                        id="message"
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7f9e4]/50 focus:border-transparent transition-all hover:bg-white/10 resize-none"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="group w-full relative overflow-hidden rounded-full bg-[#f7f9e4] py-4 px-8 text-[#2d4930] font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(247,249,228,0.5)] active:scale-[0.98]"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        Submit
                                        <MoveRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                    <div className="absolute inset-0 z-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-[#f7f9e4] rounded-full flex items-center justify-center mx-auto mb-6 text-[#2d4930]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2.5}
                                    stroke="currentColor"
                                    className="w-10 h-10"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4 font-display">
                                Thank You!
                            </h2>
                            <p className="text-lg text-gray-200">
                                We'll get in touch with you as soon as possible.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="mt-8 text-[#f7f9e4] text-sm underline underline-offset-4 hover:text-white transition-colors"
                            >
                                Send another message
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
