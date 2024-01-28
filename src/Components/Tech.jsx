"use client"

import  BallCanvas from "./canvas/Ball";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";

function Tech(){
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech, index) => {
        return (
          <div key={tech.name} className="w-28 h-28">
            <BallCanvas icon={tech.icon} />
          </div>
        );
      })}
    </div>
  );
}

export default SectionWrapper(Tech, "");
