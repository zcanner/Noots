import "../sass/home.scss";
import Button from "../components/button.component";
import Navbar from "../components/navbar.component";
import { FaArrowCircleRight, FaDiscord } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <header className="bg-grad">
        <Navbar />
        <main>
          <section className="pt-36 sm:pt-48 relative overflow-hidden">
            <div className="container mb-12">
              <div>
                <div className="max-w-[42rem]">
                  <h1 className="text-5xl mb-7 mt-8">Something good here.</h1>
                  <p className="text-2xl opacity-70 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Doloribus ex quod fugiat iste, dolorem.
                  </p>
                </div>
                <div className="space-x-5">
                  <Button className="inline-flex items-center gap-2">
                    Continue with
                    <FaDiscord className="text-xl" />
                  </Button>
                  <a
                    id="hero-github"
                    className="inline-flex items-center gap-2"
                    href="https://github.com/zcanner/Noots"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                    <FaArrowCircleRight id="hero-arrow" />
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-image"></div>
          </section>
        </main>
      </header>
    </>
  );
}
