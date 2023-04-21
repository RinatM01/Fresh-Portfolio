import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../layouts";
import { projects } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          {source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() =>
                  window.open(source_code_link, "_blank")
                }
                className="black-gradient h-5 px-2 py-4 rounded-md 
              flex justify-center items-center cursor-pointer"
              >
                Check
              </div>
            </div>
          )}

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">
              {name}
            </h3>
            <p className="mt-2 text-secondary text-[14px]">
              {description}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={tag.name}
                className={`text-[14px] ${tag.color} text-purple-500`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <React.Fragment>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        ></motion.p>
      </div>
      <div className="mt-2 flex flex-wrap gap-7">
        {projects.map((proj, i) => (
          <ProjectCard key={`project-${i}`} index={i} {...proj} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default SectionWrapper(Works, "");
