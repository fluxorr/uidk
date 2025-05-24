const Recognition = () => {

    const entries = [
        "Awwwards independent of the year(2)",
        "Awwwards Site of the day(30)",
        "Awwwards developer award(30)",
        "FWA Site of the day(31)",
        "FWA Site of the month(2)",
        "Gold Lovies(3)",
        "Gold Webby(1)",
        "Silver CommArts of the year(1)"
    ]

    return (
        <div className="pt-72">
            <div className="text-[22.8px] pb-[57px] " >
                Recognition
            </div>
            {entries.map((entry) => (
                <div
                    key={entry}
                    className="flex items-baseline space-x-2"
                >
                    <div className="text-[45.6px] font-sans w-fit font-medium leading-[1.1] tracking-[-0.02em] ">
                        {entry}
                    </div>

                </div>
            ))}
        </div>

    );
}

export default Recognition;