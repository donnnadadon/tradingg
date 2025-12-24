import Image from "next/image";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-transparent pt-72 md:pt-64">
            <div className="max-w-7xl mx-auto px-6 mb-24">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-5xl md:text-6xl font-bold text-white font-display uppercase tracking-wide">
                        What We Offer
                    </h1>
                    <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
                        Explore our offerings and find the perfect fit for your financial goals.
                    </p>
                </div>
            </div>

            <div className="w-full bg-[#f7f9e4] py-24 px-6">
                <div className="max-w-7xl mx-auto space-y-32">
                    {/* Section 1: Personalized Investment Portfolio (Image Left) */}
                    <section className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] w-full">
                            <Image
                                src="/images/services1.png"
                                alt="Personalized Investment Portfolio"
                                fill
                                className="object-cover rounded-[3rem] rounded-tl-[6rem] rounded-br-[6rem]"
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold text-[#2d4930] font-display">
                                Personalized Investment Portfolio
                            </h2>
                            <p className="text-lg text-[#2d4930]/80 leading-relaxed">
                                Our experts will create a customized investment portfolio tailored to your unique financial goals and risk tolerance. We analyze your current financial situation and future aspirations to design a strategy that works specifically for you.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Market Analysis and Insights (Image Right) */}
                    <section className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 space-y-6">
                            <h2 className="text-4xl font-bold text-[#2d4930] font-display text-right md:text-left">
                                Market Analysis and Insights
                            </h2>
                            <p className="text-lg text-[#2d4930]/80 leading-relaxed text-right md:text-left">
                                Access in-depth market research, expert analysis, and trading recommendations to make informed investment decisions. Stay ahead of market trends with our real-time data and comprehensive reports designed to give you a competitive edge.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 relative h-[400px] w-full">
                            <Image
                                src="/images/services2.png"
                                alt="Market Analysis and Insights"
                                fill
                                className="object-cover rounded-[3rem] rounded-tr-[6rem] rounded-bl-[6rem]"
                            />
                        </div>
                    </section>

                    {/* Section 3: Wealth Management Services (Image Left) */}
                    <section className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] w-full">
                            <Image
                                src="/images/services3.png"
                                alt="Wealth Management Services"
                                fill
                                className="object-cover rounded-[3rem] rounded-tl-[6rem] rounded-br-[6rem]"
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold text-[#2d4930] font-display">
                                Wealth Management Services
                            </h2>
                            <p className="text-lg text-[#2d4930]/80 leading-relaxed">
                                Our comprehensive wealth management services include retirement planning, estate planning, and tax optimization to help you achieve long-term financial success. We provide holistic solutions to preserve and grow your wealth for generations to come.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
