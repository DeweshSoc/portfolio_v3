import { section } from "framer-motion/client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
    return (
        <section id="about">
            <BentoGrid className="w-full py-20">
                {gridItems.map(
                    ({
                        title,
                        description,
                        id,
                        className,
                        img,
                        imgClassName,
                        spareImg,
                        titleClassName,
                    }) => (
                        <BentoGridItem
                            title={title}
                            description={description}
                            id={id}
                            key={id}
                            className={className}
                            img={img}
                            imgClassName={imgClassName}
                            spareImg={spareImg}
                            titleClassName={titleClassName}
                        />
                    )
                )}
            </BentoGrid>
        </section>
    );
};

export default Grid;
