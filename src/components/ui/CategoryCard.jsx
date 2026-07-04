export default function CategoryCard({ title, count, image, alt }) {
    return (
        <div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 transition-opacity group-hover:opacity-80"></div>
            <img alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt={alt} src={image} />
            <div className="absolute bottom-6 left-6 z-20">
                <p className="text-white text-xl font-bold">{title}</p>
                <span className="text-white/80 text-xs font-medium uppercase tracking-widest">{count} Items</span>
            </div>
        </div>
    )
}
