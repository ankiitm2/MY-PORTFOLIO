import { AnimatedGridPatternDemo } from "@/components/GridBgText";
import { WordPullUpDemo } from "@/components/WordPullText";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="page_logo">
        <Link href="/home" passHref>
          <WordPullUpDemo />
        </Link>
      </div>
      <AnimatedGridPatternDemo />
    </>
  );
};

export default About;
