import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { api } from "~/utils/api";
import { SignUp, SignInButton, SignUpButton, SignOutButton, SignIn, useUser } from "@clerk/nextjs";
import logo from "../assets/group 2.svg"
import grid1 from "../assets/grid1.png"
import grid3 from "../assets/grid3.png"
import grid4 from "../assets/grid4.png"
import grid5 from "../assets/grid5.png"
import grid6 from "../assets/grid6.png"
import grid7 from "../assets/grid7.png"


const Home: NextPage = () => {
  
  const user = useUser();
  
  return (
    <>
      <Head>
        <title>Accolades</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-10 bg-[#541A83]">

      </div>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#DBA349] to-[#501685]">
        <div className="container flex flex-col items-center justify-center gap-12 w-9/12 py-20 ">
          <h1 className="text-8xl font-bentonreg text-[#541A83]">
            #The<span className="font-bentonbold">BestOutcomes</span>
          </h1>
          <div className="w-8/12 text-white text-4xl font-bentonbold ">
            <p>
              Welcome to our online search tool for NYU Langone Health’s Accolades, Outcomes and Awards. Search below using free text to search for an award by service line, location, awarding organization and more. Or click one of the locations below to start a search by location. 
            </p>
          </div>
          
          <div className="grid grid-cols-3 w-9/12 gap-0 ">
            <div className="flex flex-col text-center gap-0 ">
              <Image src={grid1} alt={""} />
              <p className="text-white font-bentonbold">Tisch Hospital and<br />Kimmel Pavilion</p>
            </div>
            <div className="flex flex-col text-center gap-0 ">
              <Image src={grid1} alt={""} />
              <p className="text-white font-bentonbold">Tisch Hospital and<br />Kimmel Pavilion</p>
            </div>
            <div className="flex flex-col text-center gap-0 ">
              <Image src={grid3} alt={""} />
              <p className="text-white font-bentonbold">Tisch Hospital and<br />Kimmel Pavilion</p>
            </div>
            <div className="flex flex-col text-center gap-0 ">
              <Image src={grid4} alt={""} />
              <p className="text-white font-bentonbold">Tisch Hospital and<br />Kimmel Pavilion</p>
            </div>
            <div className="flex flex-col text-center gap-0 ">
              <Image src={grid5} alt={""} />
              <p className="text-white font-bentonbold">Tisch Hospital and<br />Kimmel Pavilion</p>
            </div>
            <div className="flex flex-col text-center gap-0 ">
              <Image src={grid6} alt={""} />
              <p className="text-white font-bentonbold">Tisch Hospital and<br />Kimmel Pavilion</p>
            </div>
            <div className="flex flex-col text-center gap-0 ">
              <Image src={grid7} alt={""} />
              <p className="text-white font-bentonbold">Tisch Hospital and<br />Kimmel Pavilion</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
