import Image from 'next/image';

export const GallerySection = () => {
  return (
    <>
      <div
        className="mt-20 max-w-full h-[1139.85px] rounded-t-[999px] flex flex-col mb-20 overflow-hidden"
        style={{ boxShadow: 'rgb(0, 0, 0) 0px 50px 20px inset' }}
      >
        <div className="mx-auto mt-32">
          <div
            className="flex gap-4 bg-[#0c0c15] px-4 py-2 rounded-full"
            style={{ boxShadow: 'rgb(0, 0, 0) 0px 20px 20px' }}
          >
            <button className="tab px-8 py-4 rounded-full text-2xl font-[300] text-black bg-white">
              Photos
            </button>
            <button className="tab px-8 py-4 rounded-full text-2xl font-[300] text-white">
              Videos
            </button>
          </div>
        </div>
        <div className="tab-content pt-24">
          <div className="mx-auto max-w-screen-4xl relative px-24">
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-8">
                <Image
                  className="rounded-bl-full rounded-t-full h-[100%] object-cover"
                  width={270}
                  height={270}
                  alt="katrina"
                  src="/katrina.png"
                />
                <Image
                  className="h-[100%] object-cover"
                  width={270}
                  height={270}
                  alt="arijit"
                  src="/arijit.png"
                />
                <Image
                  className="rounded-bl-full rounded-t-full h-[100%] object-cover"
                  width={270}
                  height={270}
                  alt="katrina"
                  src="/katrina.png"
                />
                <Image
                  className="h-[100%] object-cover"
                  width={270}
                  height={270}
                  alt="arijit"
                  src="/arijit.png"
                />
              </div>
              <div className="flex gap-8">
                <Image
                  className="h-[100%] object-cover"
                  width={270}
                  height={270}
                  alt="manish"
                  src="/manish.png"
                />
                <Image
                  className="h-[100%] object-cover"
                  width={270}
                  height={270}
                  alt="zakir"
                  src="/zakir.png"
                />
                <Image
                  className="h-[100%] object-cover"
                  width={270}
                  height={270}
                  alt="manish"
                  src="/manish.png"
                />
                <Image
                  className="h-[100%] object-cover"
                  width={270}
                  height={270}
                  alt="zakir"
                  src="/zakir.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
