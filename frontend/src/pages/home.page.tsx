import "../sass/home.scss";
import Button from "../components/button.component";
import Navbar from "../components/navbar.component";
import { FaDiscord, FaExternalLinkAlt } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdColorPalette } from "react-icons/io";
import { BsDiscord } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa6";
import { CiCircleAlert, CiCircleCheck } from "react-icons/ci";
import { GiCampCookingPot } from "react-icons/gi";
import { IoLockClosed } from "react-icons/io5";
import Footer from "../components/footer.component";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="main">
        <section className="min-h-screen items-center content-center flex flex-col justify-center relative overflow-hidden">
          <div className="container mb-12">
            <div className="flex flex-col items-center">
              <div className="max-w-[74rem] text-center">
                <h1 className="text-5xl md:text-8xl mb-7 mt-8 heroheading">
                  Capture your thoughts with Noots
                </h1>
                <p className="text-base md:text-lg opacity-70 mb-8 heroheadingPara">
                  Noots is an open-source note-taking app that lets you capture
                  your
                  <br className="hidden md:block" />
                  thoughts and securely access them from anywhere.
                </p>
              </div>
              <div className="flex items-center flex-col justify-center md:flex-row">
                <Button className="m-2">
                  Continue with {""}
                  <FaDiscord className="text-xl inline fill-black" />
                </Button>
                <Button
                  className="m-2"
                  href="https://github.com/zcanner/Noots"
                  target="_blank"
                  rel="noreferrer"
                  buttonType="secondary"
                >
                  Github {""}
                  <MdKeyboardArrowRight className="inline" />
                </Button>
              </div>
            </div>
          </div>
          <div className="hero-image"></div>
        </section>
      </main>

      <InfoSection />
      <FeatureShowSection />
      <Footer />
    </>
  );
}

function InfoSection() {
  return (
    <section className="my-10">
      <div className="max-w-[100%] md:max-w-[75%] mx-auto w-full">
        <div className="flex flex-col lg:flex-row rounded-xl features">
          <div className="p-12">
            <div className="p-6 ">
              <h2 className="text-4xl text-balance md:text-pretty my-2 font-medium text-white">
                Customizeable {""}
                <IoMdColorPalette className="h-8 w-8 inline" />
              </h2>
              <p className="leading-relaxed break-words opacity-90">
                With Noots, you can customize your note-taking experience to
                reflect your unique style and preferences, creating your own
                themes and layouts, crafting a unique digital environment
                tailored just for you.
              </p>
              <div className="pt-6">
                <Button
                  className="inline-flex items-center gap-2"
                  buttonType="primary"
                >
                  Learn more
                </Button>
              </div>
            </div>
            {/* divider */}
            <div className="border-t-2 my-4"></div>
            <div className="p-6">
              <h2 className="text-4xl text-balance md:text-pretty my-2 font-medium text-white">
                Discord implmentation {""}
                <BsDiscord className="h-8 w-8 inline" />
              </h2>

              <p className="leading-relaxed break-words opacity-90">
                Noots integrates seamlessly with Discord, allowing you to take
                and access your notes while collaborating with others directly
                within the Discord app.
              </p>
              <div className="pt-6">
                <Button
                  className="inline-flex items-center gap-2"
                  buttonType="primary"
                >
                  Add bot
                </Button>
              </div>
            </div>
          </div>
          {/* vertical divider */}
          <div className="border-l-2 hidden lg:block"></div>
          <div className="p-12 ">
            <div className="border-t-2 my-4 lg:hidden block"></div>
            <div className="p-6">
              <h2 className="text-4xl text-balance md:text-pretty my-2 font-medium text-white">
                Free to use {""}
                <FaRegStar className="h-8 w-8 inline" />
              </h2>

              <p className="leading-relaxed break-words max-w-[90%] opacity-90">
                Noots offers a completely free experience for users, allowing
                you to take and organize notes effortlessly using local storage.
                Enjoy a limited amount of cloud storage for those who prefer
                online access.
              </p>
              <div className="pt-6">
                <Button
                  className="inline-flex items-center gap-2"
                  buttonType="primary"
                >
                  Learn more
                </Button>
              </div>
              <div className="pt-12 space-y-4">
                <div className="flex items-center gap-2">
                  <CiCircleCheck className="fill-green-500 h-8 w-8" />
                  <h6>Local storage</h6>
                </div>
                <div className="flex items-center gap-2">
                  <CiCircleCheck className="fill-green-500 h-8 w-8" />
                  <h6>Cloud storage</h6>
                </div>
                <div className="flex items-center gap-2">
                  <CiCircleCheck className="fill-green-500 h-8 w-8" />
                  <h6>Open source</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// i did not use map function to loop through the features
// because i wanted to have more control over the layout
// and who the fuck would map for rendering just 2 times.
function FeatureShowSection() {
  return (
    <section>
      <div className="mt-36 mx-auto max-w-[100%] md:max-w-[75%] w-full">
        <div className="flex flex-col md:flex-row rounded-xl features">
          <div className="p-12 w-full">
            <div className="p-6 ">
              <h2 className="text-4xl my-2 font-medium">
                Built for{" "}
                <span className="font-bold text-green-600 text-4xl">
                  simplicity
                </span>
              </h2>
              <p className="leading-relaxed break-words opacity-90">
                Noots is designed to be simple and easy to use. It is built with
                the user in mind, so you can focus on what matters most.
              </p>
              <div className="pt-6 space-y-4">
                <div className="flex items-center gap-2">
                  <CiCircleAlert className="fill-red-500 h-8 w-8" />
                  <h6>We cooked here</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="featurecard flex justify-center content-center items-center rounded-xl group w-full p-12">
            <div>
              <div>
                <GiCampCookingPot className="size-40 icon group-hover:fill-green-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-36 mx-auto max-w-[100%] md:max-w-[75%] w-full">
        <div className="flex flex-col md:flex-row rounded-xl features">
          <div className="featurecard flex justify-center content-center items-center rounded-xl group w-full p-12">
            <div>
              <div>
                <IoLockClosed className="size-40 icon group-hover:fill-purple-400" />
              </div>
            </div>
          </div>
          <div className="p-12 w-full">
            <div className="p-6 ">
              <h2 className="text-4xl my-2 font-medium">
                Security and Privacy is <br />
                <span className="text-purple-600 text-4xl my-2 font-bold">
                  important
                </span>{" "}
                to us
              </h2>
              <p className="leading-relaxed break-words opacity-90">
                Noots is designed with your security and privacy as our top
                priorities. We take every step to ensure your data is safe and
                secure by using end-to-end encryption. With local storage mode,
                your data stays right on your device, giving you peace of mind.
                plus we dont feed your data to llms
              </p>
              <div className="pt-6">
                <Button
                  className="inline-flex gap-2 items-center"
                  buttonType="secondary"
                >
                  More
                  <FaExternalLinkAlt className="inline" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
