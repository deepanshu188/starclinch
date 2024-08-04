import Image from 'next/image';

export const TiltImageBox = () => {
  return (
    <div className="flex items-end mb-32">
      <p className="text-white text-5xl w-[447px] leading-[58px] opacity-50 mb-14">
        Late Night Maggie Party for the boost
      </p>
      <Image
        src="/tilt-image.png"
        width={400}
        height={400}
        className="w-96 h-96"
        alt="tilt image"
      />
    </div>
  );
};
