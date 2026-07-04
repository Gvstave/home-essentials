import Button from "./Button";

export default function Input({ IconName, placeholder, type = "email", children }) {
  return (
    <div className="flex max-sm:flex-col flex-row justify-between gap-4 mx-auto">
      <div className="bg-white w-full flex items-center gap-2 h-12 px-3 rounded-lg border border-primary/20 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors duration-200">
        <span className="material-symbols-outlined text-slate-400 transition-colors duration-200 focus-within:text-primary">
          {IconName}
        </span>
        <input className="w-full h-full outline-none bg-transparent" placeholder={placeholder} type={type} />
      </div>
      {children}
    </div>
  );
}
