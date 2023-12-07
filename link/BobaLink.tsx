import { constants } from "crypto";
import { motion } from "framer-motion";
import { HTMLAttributes, useState } from "react";
import { IconContext } from "react-icons";
import { GoArrowUpRight } from "react-icons/go";

type BobaLinkProps = HTMLAttributes<HTMLDivElement> & {
    disabled?: boolean;
}

function BobaLink(props: BobaLinkProps) {
    const [hovered, setHovered] = useState(false);

    return (<>
        <motion.div
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}

            className={"relative pb-1 flex items-center w-fit " + (props.disabled ? "line-through " : "")}
        >
            <p>{props.children}</p>
            <motion.div
                animate={hovered && !props.disabled ? { x: 1, y: -1 } : {}}
            >
                <IconContext.Provider value={{ size: "1.5em" }}>
                    <GoArrowUpRight />
                </IconContext.Provider>
            </motion.div>

            <motion.div
                className="h-1 bg-boba absolute bottom-0"
                animate={{
                    width: hovered && !props.disabled ? "100%" : "0%",
                }}
            >

            </motion.div>
        </motion.div>

    </>);
}

export default BobaLink;