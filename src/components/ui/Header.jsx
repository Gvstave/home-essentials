import IconButton from "./IconButton";
import Input from "./Input";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
                <div className="flex items-center gap-8">
                    <Logo />
                    <nav className="hidden md:flex items-center gap-6">
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Living Room</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Bedroom</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Dining</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Office</a>
                    </nav>
                </div>
                <div className="flex flex-1 justify-end items-center gap-4">
                    <SearchBar />
                    <div className="flex items-center gap-3">
                        <IconButton iconName={"shopping_cart"} />
                        <IconButton iconName={"person"} />
                        <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden ml-2 mb-2">
                            <img alt="Profile" className="w-full h-full object-cover" data-alt="User profile avatar placeholder" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg9sOH22T9_vsclIVOJOZx0nw09lJ902J33FCdvsQT1_1w_kIRGUpq98w8vRmfwUjUC_j_emR0vwuOwGs3reVhYoEafnZuZVf6CIEn0nnrYXBOVfD7IkhYATgpnL_lQX2ODx87uUUCja2Bnt4d3oTWJLxjhIWtLo_l1AcDdL7iKxFpHFnEW-vD7jUW41whKDc58W55_LCMD1VJYpRKzoe8KivoYqfc74WbMhZeZkULEcrtSr1Q_bpbPiQLsN9Eqa4O9qQQG6ttfztY" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}