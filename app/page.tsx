import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fahad Hawaldar</title>
      </Head>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-center xl:pt-8 xl:pb-24 ">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Software Developer</span>
              <h1 className="h1 mb-6">
                Hello I'm <br />
                <span className="text-accent">Fahad Hawaldar</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I excel at crafting innovative solutions that drive business
                success. With a passion for technology and a commitment to
                excellence.
              </p>
              {/* buttons and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a
                  href="https://drive.google.com/drive/folders/12798S9fenZ8GmutlYozdSr1ryHHg-LdE?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant={"outline"}
                    size={"lg"}
                    className="uppercase flex items-center gap-2"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>

                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            {/* photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
    </>
  );
}
