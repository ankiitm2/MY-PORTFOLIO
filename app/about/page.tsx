import { AnimatedGridPatternDemo } from "@/components/GridBgText";
import { WordPullUpDemo } from "@/components/WordPullText";

const About = () => {
  return (
    <>
      <div className="page_logo fixed text-sm top-0">
        <WordPullUpDemo />
      </div>
      <AnimatedGridPatternDemo />
    </>
  );
};

export default About;
