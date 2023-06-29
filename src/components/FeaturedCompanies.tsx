import { AppData } from "@/data";
import Image from "next/image";
import React from "react";

const FeaturedCompanies = () => {
  return (
    <div>
      <div className="p-3 text-red-600 text-xl">FEATURED COMPANIES</div>
      <div className="flex whitespace-no-wrap bg-[#e7f0fb]/50 py-2 items-center overflow-x-hidden">
        <div className="relative">
          <div className="flex animate-marquee">
            {AppData.featuredCompanies.map((companyLogo) => (
              <div key={companyLogo}>
                <Image
                  src={companyLogo}
                  width={100}
                  height={30}
                  alt="company logo"
                  className="mx-2"
                />
              </div>
            ))}
          </div>
          {/* Featured companies are rendered twice to restart the company animation when lists last item is reached */}
          <div className="flex absolute top-0 animate-marquee2">
            {AppData.featuredCompanies.map((companyLogo) => (
              <div key={companyLogo}>
                <Image
                  src={companyLogo}
                  width={100}
                  height={30}
                  alt="company logo"
                  className="mx-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="flex">
        {AppData.featuredCompanies.map((companyLogo) => (
          <div key={companyLogo}>
            <Image
              src={companyLogo}
              width={100}
              height={30}
              alt="company logo"
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default FeaturedCompanies;
