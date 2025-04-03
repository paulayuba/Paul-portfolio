import Photo from "@/components/Photo";
import Social from "@/components/Social";

import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section>
      <main className="container h-full">
        <div className="mx-20 flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text Section */}
          <div className="text-center space-y-8 mb-36 xl:text-left order-2 xl:order-none">
            <span className="text-2xl">Software Developer</span>
            <h1 className="text-7xl">
              Hello<br />
              <span className="text-green-500">Paul Ayuba</span>
            </h1>
            <p className="max-w-[500px] mb-9">
              I excel at creating elegant digital experiences and am proficient in
              various programming languages and technologies.
            </p>

            {/* Button and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/cv.pdf"
                download
                className="uppercase flex items-center gap-2 px-4 py-2 border border-green-500 rounded-2xl text-green-500 hover:bg-green-500 hover:text-black transition-all duration-500"
                aria-label="Download CV"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </a>

              <div className="mb-4 xl:mb-3">
                <Social
                  className="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo Section */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo alt="Paul Ayuba - Software Developer" />
          </div>
        </div>
      </main>
      {/* Uncomment when needed */}
      {/* <Stats /> */}
    </section>
  );
}
