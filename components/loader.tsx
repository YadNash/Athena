import Image from "next/image";

export const Loader = () => {
    return(
        <div className="h-full flex flex-col gap-y-4 items-center">
            <div className="w-10 h-10 relative animate-spin">
                <Image
                alt="Athena"
                fill
                src="/Athena.webp"
                />
            </div>
            <p className="text-sm text-muted-foreground">
                Athena is thinking...
            </p>
        </div>
    )
};