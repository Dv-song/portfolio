import Image from "next/image";
import Hero from "@/components/Hero";
import HeroVer2 from "@/components/HeroVer2";
import { WORKLIST } from "@/constants";
import SelectedWorkCard from "@/components/SelectWorkCard";

export default function Home() {
  const filteredWorkList = WORKLIST.filter((work) => work.featured == true);

  return (
    <>
      <section className="relative flex flex-col flex-grow max-container padding-container py-2 lg:px-20 px-0">
        <HeroVer2 />
        {/* Selected work section */}
        {/* work list section */}
        <h1 className="text-2xl font-medium dark_gray_text mt-14 ml-8 lg:ml-0">
          _SELECTED WORKS
        </h1>
        <div className="flex flex-row justify-center mb-11 mt-14">
          <div className="w-full">
            <div className="flex flex-wrap justify-around">
              {filteredWorkList.map((work, index) => (
                <div key={work.id} className="mb-4">
                  <SelectedWorkCard work={work} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
