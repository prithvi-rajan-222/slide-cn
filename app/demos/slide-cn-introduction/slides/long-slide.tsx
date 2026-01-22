export function LongSlide() {
    return (
        <div className="relative h-full w-full">
            <div className="relative z-10 p-8 md:p-12 lg:p-16">
                <h1 className="text-4xl font-bold mb-8">Long Slide Test</h1>
                {Array.from({ length: 20 }).map((_, i) => (
                    <p key={i} className="mb-4 text-xl">
                        This is some long content to test the scrolling behavior.
                        When we scroll down, we want to see if the PixelSnow background
                        still covers the entire area or if it stays only at the top.
                        {i % 2 === 0 ? " Extra text to make it even longer." : ""}
                    </p>
                ))}
            </div>
        </div>
    );
}
