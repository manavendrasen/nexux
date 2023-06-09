import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JoinSurvey } from "@/components/HomeComponents/JoinSurvey";
import { Button } from "@/components/Button/Button";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gradient-to-t from-muted to-background">
      {/*  Site header */}
      <header className="fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-24 md:h-28">
            {/* Site branding */}
            <div className="flex-shrink-0 mr-4">
              <Link href="/" className="block">
                <div className="flex items-center">
                  {/* <img
                    src="https://user-images.githubusercontent.com/44477212/162623423-5472eef0-2741-4f70-9465-d9e206c314c2.png"
                    alt=""
                    width="50px"
                  /> */}
                  <p className="ml-3 text-lg font-bold">Nexus</p>
                </div>
              </Link>
            </div>

            {/* Site navigation */}
            <nav className="flex flex-grow">
              <ul className="flex flex-grow justify-end flex-wrap items-center">
                <li>
                  <Link href="/login">
                    <Button>
                      <p className="mr-2">Create Survey</p>{" "}
                      <ArrowRight size={18} />
                    </Button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/*  Page content */}
      <main className="flex-grow">
        <section className="relative">
          {/* Illustration behind hero content */}
          {/* <div
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
            aria-hidden="true"
          >
            <svg
              width="1360"
              height="578"
              viewBox="0 0 1360 578"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="illustration-01"
                >
                  <stop stopColor="#FFF" offset="0%" />
                  <stop stopColor="#EAEAEA" offset="77.402%" />
                  <stop stopColor="#DFDFDF" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="url(#illustration-01)" fillRule="evenodd">
                <circle cx="1232" cy="128" r="128" />
                <circle cx="155" cy="443" r="64" />
              </g>
            </svg>
          </div> */}

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Hero content */}
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Section header */}
              <div className="text-center pb-12 md:pb-16 mt-16">
                <h1
                  className="text-5xl md:text-6xl font-semibold tracking-tight mb-8"
                  data-aos="zoom-y-out"
                >
                  Build your network
                </h1>
                <div className="max-w-lg mx-auto">
                  <p
                    className="text-base text-muted-foreground mb-8"
                    data-aos="zoom-y-out"
                    data-aos-delay="150"
                  >
                    With Nexus, you can connect with people who share your
                    interests and build your network.
                  </p>

                  <div
                    className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                    data-aos="zoom-y-out"
                    data-aos-delay="300"
                  >
                    <JoinSurvey />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-slate-200">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              {/* <li>
                <Link
                  href="#"
                  className="flex justify-center items-center text-muted-foreground hover:text-slate-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="#"
                  className="flex justify-center items-center text-muted-foreground hover:text-slate-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                  aria-label="Github"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="#"
                  className="flex justify-center items-center text-muted-foreground hover:text-slate-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li> */}
            </ul>

            {/* Copyrights note */}
            <div className="text-sm text-muted-foreground mr-4">
              Made by{" "}
              <a
                className="text-primary hover:underline"
                href="https://manavendrasen.com"
              >
                @manavendrasen
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
