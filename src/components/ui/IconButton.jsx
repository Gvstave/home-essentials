export default function IconButton({iconName, onClick, className}) {
    return (
        <button className={`${className} p-2 hover:bg-slate-100 rounded-lg transition-colors flex flex-col items-center justify-center cursor-pointer`} type="button" onClick={onClick}>
            <span className="material-symbols-outlined">{iconName}</span>
            {/* <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span> */}
        </button>
    )
}