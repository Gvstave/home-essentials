import ProductCard from "./ui/ProductCard";
import IconButton from "./ui/IconButton";

const productsData = [
    {
        title: "Nordic Lounge Chair",
        price: "$249.00",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlm-4_ryfWXYDBbXNkHyE1yqtsF2XMvUF3EcXv00RsDkf_Y8tuwlWWnpQPXPAUPEZfLTwBpG133GAAvsL0lR8vHqtrAK7Z2fV50aZ3rWl-WzVgsQrS2cJU4GafbEszksyzKjraFa3Lo9jkQLlWJypaHfTddxStA1N32xhuYEjmR2a2E2pr8WR8JMJ-exCWt0e5FAU7vBYxoHDCSm3tA0JLKUKA8YCY-LocITnlSljAhtrOWx90WOBpV4rTLmBMhT3vU8IvsH_Uqlnv",
        alt: "Nordic style grey lounge chair",
        rating: 4,
        reviewCount: 42,
        isNew: false
    },
    {
        title: "Velvet Dream Sofa",
        price: "$899.00",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZxWBIg1qiXJ-LhLyAlRigvqxc1HjrY5TYXJGdLnKbKYQvxzUm-tcN-HaOnVwohuNz5UJkMxCXR6_CkOexDPwDchQIG-R7_mRskewUphS4do791sW6Nta3xZeVrmGReCICizA7qiwZ_oYrRB5dN6JG11dfNjAfVVetShIdgvoF_m_VQFiyTL1fo_JJukd68S4D2sVQuKLU0Lhex2fDiG1diWfSsyQvN7NX_OlF6ezUtZCsiAte5nv7-c-6RtwdxIF5EkkWgY1BaLIj",
        alt: "Deep velvet navy blue sofa",
        rating: 5,
        reviewCount: 128,
        isNew: true
    },
    {
        title: "Minimalist Oak Bed",
        price: "$1,200.00",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLhcjU0ulbNtRRReY-d8Gi9g2jBUvyh_l-nJk15xPN6vbWtk5C3XHLOWcPEs_BsJ56ODQN00r2jsjXDMfWwuBad1AtX1qQHPeeGlJKlhupBgz71LvEkWeY6nzeHG6dmfe2RZfc15GX7_-CBIhODSWLiaHwR5OAS6l6VLxhWPGuLEqgbPP-T_9NiJpLybmg_eJ4rtNfyqabq-NhpkurtRn3ZwczmawTwFpF8KSp-_EzcrW7XMeHGb9kB3V0nT4sWMjvzczow8sUnyX7",
        alt: "Minimalist oak bed frame",
        rating: 4,
        reviewCount: 15,
        isNew: false
    },
    {
        title: "Marble Coffee Table",
        price: "$345.00",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb42gDcQAbYt7YMZuVH2_4v-zfILPjp9KqylaIdkPQ162YoNWO6cliNl06w5AWG_9YMyae07rXJKLoKHVWUrMEJsOXQUgSooIZNSy-ILPzKGNaTOY2m-bcqKE4bvx9Jm2AzOJSmGxYatJrO8Cu16XkHUEUE0QuJaAcS-KKkgDOwPmZ1PO_KU6WPEXoI1_vrFA_PZZtNjKSPljkPQgl7oquTdnzJCCWUmp5YDOpWdovxPSm39Kh7wYbxE0xs-VHNe3rNmX7r7QpDtBv",
        alt: "Circular marble coffee table",
        rating: 5,
        reviewCount: 89,
        isNew: false
    }
];

export default function FeaturedProductsSection() {
    return (
        <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Featured Products</h2>
                    <p className="text-slate-500 text-sm mt-1">Our most popular items this season</p>
                </div>
                <div className="flex gap-2">
                    <IconButton iconName="chevron_left" className="border border-slate-200 hover:bg-slate-50" />
                    <IconButton iconName="chevron_right" className="border border-slate-200 hover:bg-slate-50" />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {productsData.map((product) => (
                    <ProductCard key={product.title} {...product} />
                ))}
            </div>
        </section>
    )
}
