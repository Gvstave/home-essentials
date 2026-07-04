import clsx from "clsx";

export default function Button({
    variant = "primary",
    className = "",
    type = "button",
    onClick, children, disabled = false
}) {
    const base =
        "text-center bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-all hover:scale-105 transform flex items-center justify-center gap-2 cursor-pointer";

    const variants = {
        primary:
            "bg-primary hover:bg-primary/90",
        secondary:
            "bg-primary hover:bg-primary/90",
        transparent:
            "bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30",
        outline:
            "bg-[#e7edf3] text-primary hover:bg-slate-200",
        ghost:
            "text-primary hover:bg-slate-100",
        danger:
            "bg-red-600 text-white hover:bg-red-700",
    };

    return (
        <button
            type={type}
            className={clsx(base, variants[variant], className)}
            onClick={onClick}
            disabled={disabled
            }
        >
        {children}
        </button>
    );
}