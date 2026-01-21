import Link from "next/link";

export function DocsFooter() {
    return (
        <div className="mt-8 border-t py-4 md:py-6 text-sm text-muted-foreground w-full">
            <div className="container">
                <p>
                    Built by <Link className="font-medium underline underline-offset-4" href="https://x.com/PrithviRajan222">Prithvi.</Link>{" "}
                    Code is available on <Link className="font-medium underline underline-offset-4" href="https://github.com/prithvi-rajan-222/slide-cn">GitHub</Link>
                </p>
            </div>
        </div>
    );
}
