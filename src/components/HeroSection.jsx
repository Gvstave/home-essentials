import Button from "./ui/Button";

export default function HeroSection() {
    return (
        <section className="mb-12 ">
            <div className="relative overflow-hidden rounded-lg bg-slate-900 min-h-105 md:min-h-130 flex items-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/40  z-10"></div>
                    <img alt="Living Room Hero" className="w-full h-full object-cover" data-alt="Modern styled living room with minimal furniture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG8RbtKexnPmMOJWiBPY3LNmtl8NQLd5sZkJ2h_bJoBulNIcv4iFfEJNCgdhS14Il6vHWySf6Aa2-Iq9_B2hdta1SjFfb7IHfpfVOSg1dlyWgV-R3TOWh0WOehztPTnuJ6rGybhxMFPqt1fAY7IWlOmkqtB4wPNBgzj-hL2b5M6emJOcuPAwJJ8poW5_7Jmqihp4CWUUCB2YSZNWCjKeULufpGQmld6-YWrcFzS5MDqYzKc_jbmB6HWIWJe9_DlT-3PZdpHrKfw1vC" />
                </div>
                <div className="relative z-20 px-12 max-w-2xl">
                    <h1 className="text-white text-5xl max-sm:text-3xl font-black leading-tight tracking-tight mb-4">
                        Redefine Your Living Space.
                    </h1>
                    <p className="text-white/90 text-lg mb-8 font-normal max-w-md">
                        Discover curated home essentials designed for comfort and style. From minimal chairs to luxury beds.
                    </p>
                    <div className="flex gap-4 ">
                        <Button>
                            Shop Now
                        </Button>
                        <Button variant="transparent">
                            View Lookbook
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}