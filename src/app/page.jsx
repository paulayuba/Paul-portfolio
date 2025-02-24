import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section>
      <main className="container h-full">
        <div className="mx-20 flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center mb-36 xl:text-left order-2 xl:order-none">
            <span className="">Software Developer</span>
            <h1>
              Hello, I'm <br /> <span className="text-accent">Paul Ayuba</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at creating elegant digital experiences, and I am 
              proficient in various programming languages and 
              technologies.
            </p>
            {/* Button and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <button className="uppercase flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-500">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </button>
              <div className="mb-8 xl:mb-8">
                <Social
                  className="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </main>
      <Stats />
    </section>
  );
}
