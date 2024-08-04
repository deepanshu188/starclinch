import Image from 'next/image';

export const HeroSection = () => {
  return (
    <div className="pt-24 px-12">
      <div className="flex justify-between w-[90%] items-center">
        <div className="flex items-center">
          <p className="text-[104px] text-white relative z-10 left-20">
            Singers
          </p>
          <div className="rounded-full p-3 relative bg-border-gradient">
            <Image
              src="/arijit_band.png"
              width={750}
              height={750}
              alt="arijit band"
              className="rounded-full"
            />
          </div>
          s
        </div>
        <div>
          <p className="w-[378px] text-white text-[64px] ">
            <span className="opacity-50">Choose from</span> 100+
            Categories
          </p>
          <div className="flex items-center gap-4">
            <p className="text-[32px] sm:text-[25px] md:text-[30px] bg-gradient-to-r from-[#a56b81] from-20% via-[#FF8DB9] via-30% to-[#ff5b24] to-100% bg-clip-text text-transparent">
              Explore all categories
            </p>
            <svg
              width="44"
              height="15"
              viewBox="0 0 44 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.7071 8.20711C45.0976 7.81658 45.0976 7.18342 44.7071 6.79289L38.3431 0.428932C37.9526 0.0384078 37.3195 0.0384078 36.9289 0.428932C36.5384 0.819457 36.5384 1.45262 36.9289 1.84315L42.5858 7.5L36.9289 13.1569C36.5384 13.5474 36.5384 14.1805 36.9289 14.5711C37.3195 14.9616 37.9526 14.9616 38.3431 14.5711L44.7071 8.20711ZM0 8.5H44V6.5H0V8.5Z"
                fill="url(#paint0_linear_1895_144)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1895_144"
                  x1="-0.66653"
                  y1="7.50166"
                  x2="51.401"
                  y2="-3.13405"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#727272" stop-opacity="0" />
                  <stop offset="0.742053" stop-color="#FF8DB9" />
                  <stop offset="1" stop-color="#F86E42" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
