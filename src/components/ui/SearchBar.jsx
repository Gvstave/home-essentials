import Input from "./Input";

export default function SearchBar() {
    return (
        <div className="hidden lg:flex flex-1 max-w-md">
            <div className="relative w-full">
                <Input IconName={"search"} placeholder={"Search for products..."} />
            </div>
        </div>
    )
}

