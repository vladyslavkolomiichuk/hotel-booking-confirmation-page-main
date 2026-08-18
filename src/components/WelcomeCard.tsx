import { HTMLAttributes } from 'react';
import IconSun from '../../assets/images/icon-sun.svg';

type WelcomeCardProps = HTMLAttributes<HTMLElement>;

const WelcomeCard = ({ ...props }: WelcomeCardProps) => {
  return (
    <article
      className={`p-300 z-10 bg-[radial-gradient(circle_at_100%_0%,_var(--color-terracotta-400)_0%,_var(--color-terracotta-500)_50%,_var(--color-terracotta-700)_100%)] rounded-20 flex flex-col gap-250 h-[420px] w-[327px] md:w-[340px] xl:w-[400px] transform-3d rotate-z-2 md:rotate-z-4
    shadow-[0_20px_40px_rgba(192,90,46,0.55),0_50px_80px_rgba(169,66,31,0.45)] ${props.className}`}
    >
      <div className=" border border-terracotta-400 w-full border-dashed" />

      <div className="flex justify-between">
        <p className="text-preset-10 text-sun-50 uppercase">Welcome card</p>
        <img src={IconSun} alt="" />
      </div>

      <div className="flex flex-col gap-300 flex-1">
        <h2 className="text-preset-4-italic text-sun-200">
          A note from your host,{' '}
          <span className="text-preset-1-italic text-sun-50">Margaux.</span>
        </h2>
        <p className="text-preset-5 text-sun-50">
          We're so glad you're coming. The shutters will be open, the lemonade
          cold, and the cat - Poivre - pretending not to notice you.
        </p>
      </div>

      <div>
        <p className="text-sun-50 text-preset-10 uppercase">Room</p>
        <p className="text-sun-50 text-preset-4">La Garrigue</p>
      </div>
    </article>
  );
};

export default WelcomeCard;
