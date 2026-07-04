export default function FooterLink({ icon, href }) {
    return (
        <a className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-colors" href={href}>
            <span className="material-symbols-outlined text-sm">{icon}</span>
        </a>
    )
}
