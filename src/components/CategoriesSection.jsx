import CategoryCard from "./ui/CategoryCard";

const categoriesData = [
    {
        title: "Chairs",
        count: 124,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApULfOcF5jyu3Rm1rZYj4QN66EgMKmPYeKjlrwJSZnoftljgcQG7p5OxnXhCKttBcTW7u9YRBFe_PjFWnT0i-LfV9NNkaP13eE3Xt55JLwUOtBHpCoaqnrf2utDEA0AcmzHTZkdFIGQm7s6NVWKTJZfjaPWME1o3BXsM8xk05dvGR3Fmn2o8ppGKaCsdOkZ0ubew02oU4sQr7yXgPLUGkHjGCvZSxwoMwbwySNZ-FvjsEWAc6c2nM4acpmm0iMQ4o-cWHYYBqfJ-8b",
        alt: "Elegant velvet armchair in a bright room"
    },
    {
        title: "Beds",
        count: 86,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOtvGm2kokoIVinLtWxH9ri4G2vMfZB1osm8jQlz3_ymJ4B0PcZHX_L1tmlbcWk3jf_-EPgVAmZUp3shL6FdPXPu6zu8tHBMmLLNkqrqEy4xhPLwORtghxlUq9LABLRhSL2sYDBmCUh_yNN7auXEUtBUvmbaShYwpY3gXxt6FeOL7AUz0Vngbx1RTXLY5Cu-v1nqT6BZbNTV7Y1BIsEp9j8aBfTXjqP4dVGMPmT_VLSPWU3eX2c9BJFD1ZWelQ1N_asmI4t43xbe9O",
        alt: "Minimalist oak bed with white linen"
    },
    {
        title: "Couches",
        count: 54,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJZ5079S1gibLh-qv2IKrVdU_m-BqRCzdFuJEmSm_i7hShxldhO_vRXE7p7HXZPI6looTf27OYwDKgBYA4q3brBbuqY42_36tKCTKXTENLmuYBR722_sOUB07khzpyFvddERF55r9wIIAbhAtIx-ih081NWti7adtgfLRp1_Hy6Xqtud6zRvKei5KLSBqnOEYa_XBm95bl_arcbqn9SLfIcLsdVZH12RfuDoPbYBkPQ1t6AyceMq0agu8pI_ER4JeXyt-fp7OKSmf3",
        alt: "Large grey sectional sofa in living area"
    },
    {
        title: "Wardrobes",
        count: 42,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1QSlu9lmyBaH6QgzLvrXa23EtkSJKmEsrbyudLxTzefiE9XX7WnFeGRwMdwgiNLDYh45fJGfq9nPkzjEV_3vxGoiNtTTCugk9h7TsD-W1LcIgr5RyCP6KE3Bh9W-Phzi9nSuhy8ldzhV9M-z6v_ZyhRb5CC0Vftpf04J77awVRpsnfeVKnTUaBLcN3_60ARSIUVolK72gXKeF3lwzMchZ-2gvuwdOjTVYDR9DubkJ_KIL8brj0rz0MqzzdpP1uo9KKZ1uQ0VeWEiG",
        alt: "Modern wooden wardrobe with sliding doors"
    }
];

export default function CategoriesSection() {
    return (
        <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold tracking-tight">Shop by Category</h2>
                <a className="text-primary font-semibold text-sm hover:underline" href="#">View All Categories</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {categoriesData.map((category) => (
                    <CategoryCard key={category.title} {...category} />
                ))}
            </div>
        </section>
    )
}
