import React from "react";
import { Cover } from "../ui/Cover";

export function GoalContent() {
    return (
        (<div>
            <h1
                className="text-3xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                Building a future where innovation <br /> meets the <Cover>cosmos of possibility</Cover>
            </h1>
        </div>)
    );
}
