import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center text-center">

        <div className="relative z-10 px-4 max-w-4xl mx-auto flex flex-col items-center gap-6 pt-48 md:pt-0">
          <span className="text-gray-200 text-lg uppercase tracking-widest font-medium font-display">
            Empower Your Finances
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight font-display">
            Trade Smarter <br />
            <span className="text-gray-200">Invest Wiser</span>
          </h1>
          <div className="flex gap-4">
            <button className="px-10 py-4 bg-[#f7f9e4] text-[#2d4930] font-medium tracking-wide text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(247,249,228,0.6)] hover:bg-white active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#2d4930] text-[#f7f9e4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Column 1 */}
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <Image src="/icons/tailored.svg" alt="Tailored" width={32} height={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#f7f9e4] font-display">Tailored Investment Solutions</h3>
              <p className="text-[#f7f9e4]/80 leading-relaxed">
                Our experts will create a personalized investment portfolio that aligns with your financial goals and risk tolerance.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <Image src="/icons/icon-market.svg" alt="Market" width={32} height={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#f7f9e4] font-display">Stay Ahead of the Market</h3>
              <p className="text-[#f7f9e4]/80 leading-relaxed">
                Access in-depth market analysis, expert insights, and trading recommendations to make informed investment decisions.
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <Image src="/icons/icon-invest.svg" alt="Invest" width={32} height={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#f7f9e4] font-display">Learn to Invest Like a Pro</h3>
              <p className="text-[#f7f9e4]/80 leading-relaxed">
                Enhance your financial knowledge with our educational resources and training programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f7f9e4] w-full overflow-hidden min-h-[600px] flex items-stretch">
        <div className="flex flex-col md:flex-row w-full">
          {/* Left Column: Image Flush Left, Bottom Aligned with Top Space */}
          <div className="w-full md:w-1/2 flex flex-col justify-end items-start relative z-10">
            <div className="relative h-[600px] w-[110%]">
              <Image
                src="/images/cta-investor.png"
                alt="Investor Success"
                fill
                className="object-contain object-left-bottom"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center items-start gap-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2d4930] mb-4 font-display leading-tight">
              Ready to grow your wealth?
            </h2>
            <p className="text-[#2d4930]/80 mb-8 max-w-lg text-lg">
              Our trading service is designed to help you achieve exceptional results and build a secure financial future.
            </p>
            <button className="px-10 py-4 border-2 border-[#2d4930] bg-transparent text-[#2d4930] font-medium tracking-wide text-lg rounded-full transition-all duration-300 hover:bg-[#2d4930] hover:text-[#f7f9e4] hover:shadow-[0_0_30px_-5px_rgba(45,73,48,0.4)] active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
