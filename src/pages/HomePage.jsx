import HeroSection from "../components/HeroSection";
import NewsletterSection from "../components/NewsLetterSection";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import Search from "../components/ui/Search";
import IconButton from "../components/ui/IconButton";
import FeaturedProductsSection from "../components/FeaturedProductsSection";

export default function HomePage() {
    return (
        <div className="bg-background-light  text-slate-900 min-h-screen flex flex-col font-display">
            <Header />
            <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
                {/* <!-- Hero Section --> */}
                <HeroSection />
                {/* <!-- Search Bar Inset --> */}
                <Search />
                {/* <!-- Categories Section --> */}
                <section className="mb-16">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold tracking-tight">Shop by Category</h2>
                        <a className="text-primary font-semibold text-sm hover:underline" href="#">View All Categories</a>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {/* <!-- Category 1 --> */}
                        <div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10 transition-opacity group-hover:opacity-80"></div>
                            <img alt="Chairs" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Elegant velvet armchair in a bright room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApULfOcF5jyu3Rm1rZYj4QN66EgMKmPYeKjlrwJSZnoftljgcQG7p5OxnXhCKttBcTW7u9YRBFe_PjFWnT0i-LfV9NNkaP13eE3Xt55JLwUOtBHpCoaqnrf2utDEA0AcmzHTZkdFIGQm7s6NVWKTJZfjaPWME1o3BXsM8xk05dvGR3Fmn2o8ppGKaCsdOkZ0ubew02oU4sQr7yXgPLUGkHjGCvZSxwoMwbwySNZ-FvjsEWAc6c2nM4acpmm0iMQ4o-cWHYYBqfJ-8b" />
                            <div className="absolute bottom-6 left-6 z-20">
                                <p className="text-white text-xl font-bold">Chairs</p>
                                <span className="text-white/80 text-xs font-medium uppercase tracking-widest">124 Items</span>
                            </div>
                        </div>
                        {/* <!-- Category 2 --> */}
                        <div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10 transition-opacity group-hover:opacity-80"></div>
                            <img alt="Beds" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Minimalist oak bed with white linen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOtvGm2kokoIVinLtWxH9ri4G2vMfZB1osm8jQlz3_ymJ4B0PcZHX_L1tmlbcWk3jf_-EPgVAmZUp3shL6FdPXPu6zu8tHBMmLLNkqrqEy4xhPLwORtghxlUq9LABLRhSL2sYDBmCUh_yNN7auXEUtBUvmbaShYwpY3gXxt6FeOL7AUz0Vngbx1RTXLY5Cu-v1nqT6BZbNTV7Y1BIsEp9j8aBfTXjqP4dVGMPmT_VLSPWU3eX2c9BJFD1ZWelQ1N_asmI4t43xbe9O" />
                            <div className="absolute bottom-6 left-6 z-20">
                                <p className="text-white text-xl font-bold">Beds</p>
                                <span className="text-white/80 text-xs font-medium uppercase tracking-widest">86 Items</span>
                            </div>
                        </div>
                        {/* <!-- Category 3 --> */}
                        <div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10 transition-opacity group-hover:opacity-80"></div>
                            <img alt="Couches" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Large grey sectional sofa in living area" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJZ5079S1gibLh-qv2IKrVdU_m-BqRCzdFuJEmSm_i7hShxldhO_vRXE7p7HXZPI6looTf27OYwDKgBYA4q3brBbuqY42_36tKCTKXTENLmuYBR722_sOUB07khzpyFvddERF55r9wIIAbhAtIx-ih081NWti7adtgfLRp1_Hy6Xqtud6zRvKei5KLSBqnOEYa_XBm95bl_arcbqn9SLfIcLsdVZH12RfuDoPbYBkPQ1t6AyceMq0agu8pI_ER4JeXyt-fp7OKSmf3" />
                            <div className="absolute bottom-6 left-6 z-20">
                                <p className="text-white text-xl font-bold">Couches</p>
                                <span className="text-white/80 text-xs font-medium uppercase tracking-widest">54 Items</span>
                            </div>
                        </div>
                        {/* <!-- Category 4 --> */}
                        <div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10 transition-opacity group-hover:opacity-80"></div>
                            <img alt="Wardrobes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Modern wooden wardrobe with sliding doors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1QSlu9lmyBaH6QgzLvrXa23EtkSJKmEsrbyudLxTzefiE9XX7WnFeGRwMdwgiNLDYh45fJGfq9nPkzjEV_3vxGoiNtTTCugk9h7TsD-W1LcIgr5RyCP6KE3Bh9W-Phzi9nSuhy8ldzhV9M-z6v_ZyhRb5CC0Vftpf04J77awVRpsnfeVKnTUaBLcN3_60ARSIUVolK72gXKeF3lwzMchZ-2gvuwdOjTVYDR9DubkJ_KIL8brj0rz0MqzzdpP1uo9KKZ1uQ0VeWEiG" />
                            <div className="absolute bottom-6 left-6 z-20">
                                <p className="text-white text-xl font-bold">Wardrobes</p>
                                <span className="text-white/80 text-xs font-medium uppercase tracking-widest">42 Items</span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Featured Products --> */}
                <FeaturedProductsSection />
    
                {/* <!-- Newsletter Section --> */}
                <NewsletterSection />
            </main>
            <Footer />
        </div>
    )
}