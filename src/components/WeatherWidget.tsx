import iconWeather from '../../assets/images/icon-weather.svg';

const WeatherWidget = () => {
  return (
    <div className=" px-4 py-3 bg-sun-300 rounded-16 relative overflow-hidden shadow-[0_1px_1px_rgba(0,0,0,0.04),0_10px_24px_rgba(164,90,46,0.4)]">
      <div className="flex flex-col items-start gap-1.5">
        <span className=" uppercase text-neutral-700 text-preset-10">
          Today in Cassis
        </span>
        <span className="text-neutral-900 text-preset-2">27°</span>
        <span className="text-neutral-700 text-preset-7">
          Sunny · light breeze
        </span>
      </div>

      <img src={iconWeather} alt="" className="absolute -top-8 -right-3" />
    </div>
  );
};

export default WeatherWidget;
