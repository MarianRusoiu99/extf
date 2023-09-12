import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import Div from "../Div";
// same as: import TagCloud from "@frank-mayer/react-tag-cloud"
function CloudTagTehnologies() {
  return (
    <TagCloud

        options={ TagCloudOptions => ({
            radius: Math.min(500, window.innerWidth, window.innerHeight) / 1.5,
            maxSpeed: "slow",
        })}
        onClickOptions={{ passive: true }}
    >
      {/* <Div></Div> */}
        {[
            "VSCode",
            "TypeScript",
            "React",
            "Preact",
            "Parcel",
            "Jest",
            "Next",
            "ESLint",
            "Framer Motion",
            "Three.js",
        ]}
    </TagCloud>
  )
}

export default CloudTagTehnologies
