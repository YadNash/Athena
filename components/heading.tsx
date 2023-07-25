import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeadingProps {
    title: string,
    description: string;
    Icon: LucideIcon;
    iconColor?: string;
    bgColor?: string;
}

export const Heading = (
    { title,
        description,
        Icon,
        iconColor,
        bgColor
    }: HeadingProps
) => {
    return (
        
            <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8"> 
                <div className={cn("p-2 w-fit rounded-md", bgColor)}>
                    <Icon className={cn("w-18 h-18",iconColor)}/>
                </div>
            
            <div>
                <h2 className="text-3xl font-bold">{title}</h2>
                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            </div>
            </div>
        
    )
}

