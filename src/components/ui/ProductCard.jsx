import IconButton from "./IconButton";
import Button from "./Button";

export default function ProductCard({ title, price, image, alt, rating, reviewCount, isNew }) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(i < rating ? "star" : i === 4 && rating === 4 ? "star_half" : "star_outline");
    }

    return (
        <div className="group">
            <div className="relative aspect-4/5 bg-slate-100 rounded-xl overflow-hidden mb-4">
                <img alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt={alt} src={image} />
                {isNew && (
                    <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">New</div>
                )}
                <IconButton className="absolute top-4 right-4 bg-white/80 backdrop-blur-md shadow hover:text-red-500" iconName="favorite" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                    <Button variant="secondary" className="w-full">Quick Add</Button>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1 text-amber-400">
                    {stars.map((star, i) => (
                        <span key={i} className={`material-symbols-outlined text-xs ${star === "star_outline" ? "text-slate-300" : ""}`}>
                            {star === "star_outline" ? "star" : "star"}
                        </span>
                    ))}
                    <span className="text-slate-500 text-xs ml-1">({reviewCount})</span>
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-lg font-black text-slate-900">{price}</p>
            </div>
        </div>
    )
}
