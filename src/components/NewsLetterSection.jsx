import Button from "./ui/Button"
import Input from "./ui/Input"

export default function NewsletterSection() {
    return (
        <section className="mb-16 bg-primary/10 rounded-2xl p-12 text-center border border-primary/20">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Stay Inspired</h2>
            <p className="text-slate-600 max-w-lg mx-auto mb-8">
                Join our newsletter and receive home decor inspiration, exclusive discounts, and early access to new collections.
            </p>
            <form className="flex max-sm:flex-col flex-row gap-4 mx-auto">
                <Input type="email" placeholder={"Enter your email"}>
                    <Button>Subscribe</Button>
                </Input>
            </form>
            <p className="text-xs text-slate-500 mt-4">By subscribing, you agree to our Privacy Policy and Terms of Service.</p>
        </section>
    )
}