import Button from "./Button";
import Input from "./Input";

export default function Search() {
    return (
        <section className="hidden max-w-4xl mx-auto -mt-20 mb-16 relative z-30 px-4">
            <div className="bg-white p-4 rounded-xl shadow-xl border border-slate-200">
                <Input placeholder={"Search for chairs, beds, or sofas..."} IconName={"chair"}>
                    <Button>
                        <span className="material-symbols-outlined">search</span>
                        Search
                    </Button>
                </Input>
            </div>
        </section>
    )
}