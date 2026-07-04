export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-2 text-primary mb-6">
                        <span className="material-symbols-outlined text-3xl font-bold">home_filled</span>
                        <h2 className="text-[#0d141b] text-xl font-bold tracking-tight">Home Essentials</h2>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        Elevating your living experience through curated design and sustainable materials. Established 2024.
                    </p>
                    <div className="flex gap-4 mt-6">
                        <a className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-colors" href="#">
                            <span className="material-symbols-outlined text-sm">public</span>
                        </a>
                        <a className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-colors" href="#">
                            <span className="material-symbols-outlined text-sm">share</span>
                        </a>
                        <a className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-colors" href="#">
                            <span className="material-symbols-outlined text-sm">mail</span>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold mb-6">Shop</h4>
                    <ul className="space-y-4 text-sm text-slate-600">
                        <li><a className="hover:text-primary transition-colors" href="#">All Collections</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Best Sellers</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">New Arrivals</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Sales &amp; Offers</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-6">Support</h4>
                    <ul className="space-y-4 text-sm text-slate-600">
                        <li><a className="hover:text-primary transition-colors" href="#">Shipping Policy</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Returns &amp; Refunds</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Contact Support</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">FAQs</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-6">Trust &amp; Safety</h4>
                    <ul className="space-y-4 text-sm text-slate-600">
                        <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Terms of Use</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Secure Payments</a></li>
                        <li className="flex items-center gap-2 mt-4">
                            <span className="material-symbols-outlined text-green-500">verified_user</span>
                            <span className="text-xs">Certified Safe Checkout</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-400 text-xs">© 2024 Home Essentials Inc. All rights reserved.</p>
                <div className="flex gap-4">
                    <img alt="Visa" className="h-6 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" data-alt="Visa card icon payment method" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkQ2E_AueMpIaJygJ9OP4p4XV69Qra4DQWFPyAY6qonMnegFYI9nylhSs1TJrIDgb__IIV7PsgqcMmsi2E0Kk-7rRtIuNFWAeB1oHNgDSZn7rHqNlr_ATvRMmtUxiHSyQEbXSpBNumke1vniR49-OwxzIvIg3jyUGH8edBRHHK9fWlICnwep9oGfrA1qZn66W1KeblM2ixXTEQqugP1xtgQCs_2YrN-HeHpTIC0oXCpQZDTqYK_Ity3p4xo3qMra8tA2c83aWVkG50" />
                    <img alt="Mastercard" className="h-6 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" data-alt="Mastercard icon payment method" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEiT8q8BNyOSTVEv2EUDSaopDFwkBkANnRbokr2H7Zd_u9bpftDEfKxkcGZ1n13qIax4S-16XHcm0yEiyyLEGdRX2vwJzVisiwNm0KGUu1XxqbQlpUfeTdE77hm7YYB6Asuovhp0Wvc24zrpiPalGi-JAPQTf4008pZQUnOFU1MiL-u57Jep3OGKIaibauF_1Jbc0I32eFiBe7ltBoqGEO3A1mA6zzWOcqfUfuWrYTzeZFXDR6VZqx4THeu7mDrFm62bbTk5oZlQOO" />
                    <img alt="Paypal" className="h-6 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" data-alt="Paypal icon payment method" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl1os8zP9esghYytCnuUU9y4VVlRIba0CIvIE6TLvmTB3xcP6EG92t66KQ9bEXe4p6Wk58Dn2mfOxwXYEz9Sntl0VhmGoYKWoXj_V3SU6wyshpDYwfOKpbeVxmEZnKRAStj2sQbTwDgKOA1AQu2H44HFGnx03EaVf-7zAhzO9QarVifOm28hKNBs5Mos46um5ljVOvS93dunF4TzhLNrq_gOJGXLT0udOEjrDkYRfksVXyWs8T39W8Q82hRsWNDFwB9pQ0Z299G44S" />
                    <img alt="Apple Pay" className="h-6 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" data-alt="Apple Pay icon payment method" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3Xke09iuC4qLTtf_qcYIo4IBzRtMTBU4pVo9hdkGOFV-2Lk7UbIDIaN2kwWsqf0M7Fw0VPEf7LrHySKK1Oz61oyQVO9XdupdJusB0e-I-63wz2nbQcFDycV3Cv2kJZK0EU5Uh0NmSQWUBAg3IfTRk4C-zYS60Lr2ZXcUpqrtYq8V4eFnhl5Sm9kz4J729KmMJN4l5lOkuTTK2XbM30XnadEWQaG2C0vmgJyBt8TPE3IwoHDOlp1RcsDiCiGn5dzRP8DsqqratUjlZ" />
                </div>
            </div>
        </footer>
    )
}