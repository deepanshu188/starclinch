export const JoinTeam = () => {
  return (
    <section className="py-5">
      <div className="flex justify-between items-center">
        <svg
          width="454"
          height="672"
          viewBox="0 0 454 672"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.53">
            <path
              d="M-3.99854 671.276L53.2443 670.761C274.149 668.774 451.617 488.085 449.63 267.18L447.227 -6.0842e-05L-9.99994 4.11288L-3.99854 671.276Z"
              fill="url(#paint0_linear_912_914)"
              fill-opacity="0.99"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_912_914"
              x1="97.1301"
              y1="819.491"
              x2="348.693"
              y2="44.2677"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#AE3999" />
              <stop
                offset="1"
                stop-color="#D55050"
                stop-opacity="0"
              />
            </linearGradient>
          </defs>
        </svg>

        <div className="bg-opacity-12 rounded-full shadow-md backdrop-filter backdrop-blur-3xl border-r border-t border-white/30s z-10 absolute right-[5%]">
          <div className="flex flex-col items-center gap-y-10 p-24 h-[640px]">
            <p className="text-8xl text-white">20+Talented Folks</p>
            <p className="text-white text-2xl text-center w-[47%]">
              From passion-driven dedication to impactful
              contribution, we do it all here. We are growing and will
              be excited to hear from you !
            </p>
            <button className="bg-custom-gradient rounded-full text-white px-8 py-3 text-2xl">
              Join our team
            </button>
          </div>
        </div>

        <svg
          width="369"
          height="676"
          viewBox="0 0 369 676"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.53">
            <path
              d="M468.953 8.07617L411.717 7.06508C190.838 3.16321 8.61624 179.058 4.71436 399.938L-0.00486913 667.087L457.169 675.163L468.953 8.07617Z"
              fill="url(#paint0_linear_1848_151)"
              fill-opacity="0.99"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1848_151"
              x1="371.811"
              y1="-142.782"
              x2="99.6737"
              y2="625.461"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#CC53A3" />
              <stop
                offset="1"
                stop-color="#D55050"
                stop-opacity="0"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};
