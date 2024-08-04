import Image from 'next/image';
import { TiltImageBox } from './TiltImageBox';

export const ActivitySlider = () => {
  return (
    <section className="flex justify-center">
      <div className="w-3/5 bg-[url('/slider.svg')] h-[2426.5px] bg-no-repeat bg-contain">
        <div className="my-40 flex flex-col">
          <div className="self-start">
            <TiltImageBox />
          </div>
          <div className="self-end">
            <TiltImageBox />
          </div>
          <div className="self-start">
            <TiltImageBox />
          </div>
          <div className="self-end">
            <TiltImageBox />
          </div>
        </div>
      </div>
    </section>
  );
};
