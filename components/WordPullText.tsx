import { WordPullUp } from "./WordPullUp";
import { WordRotate } from "./WordRotateText";

export function WordPullUpDemo() {
  return (
    <>
      <WordPullUp
        className="logo fixed bottom-20 w-2/5 text-5xl font-extrabold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem] text-left"
        words="Ankit Mishra"
      />
      <div className="responsive_desc fixed w-2/5 hidden text-2xl">
        <WordRotate words={["Frontend Developer", "UI Developer"]} />
      </div>
    </>
  );
}