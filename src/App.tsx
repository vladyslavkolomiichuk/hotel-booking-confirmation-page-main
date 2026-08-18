import Header from './components/Header';
import IconButton from './components/IconButton';
import Sidebar from './components/Sidebar';
import IconMenu from '../assets/images/icon-menu.svg';
import Button from './components/Button';
import WelcomeCard from './components/WelcomeCard';
import Receipt from './components/Receipt';
import InfoCard from './components/InfoCard';
import IconKey from '../assets/images/icon-key.svg';
import IconWifi from '../assets/images/icon-wifi.svg';
import IconBreakfast from '../assets/images/icon-breakfast.svg';
import FuncButton from './components/FuncButton';
import IconSparkle from '../assets/images/icon-sparkle.svg';
import IconSun from '../assets/images/illustration-sun.svg';
import { useState } from 'react';

export enum InfoCardActions {
  COPY = 'Copy',
}

export enum InfoCardColors {
  RED = 'hsl(15, 74%, 41%)',
  BLUE = 'hsl(230, 49%, 56%)',
  ROSE = 'hsl(340, 48%, 52%)',
}

export type InfoCardData = {
  label: string;
  icon: string;
  color: InfoCardColors;
  number: string;
  title: string;
  subtitle: string;
  body: string | { network: string; password: string };
  action?: InfoCardActions;
};

const infoCards: InfoCardData[] = [
  {
    label: 'Arrival',
    icon: IconKey,
    color: InfoCardColors.RED,
    number: '01',
    title: 'Check-in from 15:00',
    subtitle: 'Sat, 25 April',
    body: "Ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree.",
  },
  {
    label: 'Wifi',
    icon: IconWifi,
    color: InfoCardColors.BLUE,
    number: '02',
    title: 'Le Soleil · Guest',
    subtitle: 'Password below',
    body: { network: 'Le Soleil · Guest', password: 'soleil-2026' },
    action: InfoCardActions.COPY,
  },
  {
    label: 'Breakfast',
    icon: IconBreakfast,
    color: InfoCardColors.ROSE,
    number: '03',
    title: 'Served 8 - 10:30',
    subtitle: 'On the terrace',
    body: 'Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.',
  },
];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <>
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        className={
          isSidebarOpen ? 'max-xl:translate-x-0' : 'max-xl:-translate-x-full'
        }
      />

      <main className="p-200 pt-200 pb-500 md:p-300 md:pt-200 md:pb-500 xl:px-500 xl:py-400 flex flex-col gap-250 xl:ml-[260px]">
        <Header
          className="xl:collapse"
          button={
            <IconButton
              icon={IconMenu}
              label="Open menu"
              onClick={() => setIsSidebarOpen(true)}
            />
          }
        />

        <div className=" h-px bg-neutral-400 w-full xl:collapse"></div>

        <div className="flex flex-col gap-600 md:gap-500">
          <div className="flex flex-col gap-200  sm:flex-row justify-between sm:items-center">
            <div>
              <p className="uppercase text-preset-8 text-neutral-600">
                Booking · Confirmed
              </p>
              <h1 className="text-neutral-900 text-preset-1">
                Bienvenue,{' '}
                <span className="text-terracotta-600 text-preset-1-italic">
                  Lucia.
                </span>
              </h1>
            </div>

            <div className="flex gap-200 sm:justify-end flex-1">
              <Button type="button" variant="light">
                Print receipt
              </Button>
              <Button type="button" variant="dark">
                Add to calendar
              </Button>
            </div>
          </div>

          <section
            aria-label="Booking summary"
            className="flex flex-col items-center group [&_*]:transition-all [&_*]:duration-[1000ms] [&_*]:ease-single-bounce"
          >
            <div
              className="relative flex flex-col md:flex-row-reverse 
            items-center justify-center gap-0 m-125"
            >
              <WelcomeCard className="xl:group-hover:-rotate-z-5 xl:group-hover:translate-x-[82px] transform-3d" />
              <img
                src={IconSun}
                alt=""
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform-3d z-5 collapse opacity-0 size-[164px] xl:visible xl:group-hover:opacity-100"
              />
              <Receipt className="xl:group-hover:rotate-z-5 xl:group-hover:-translate-x-[82px] transform-3d" />
            </div>

            <div className="flex gap-100 items-center collapse xl:visible">
              <img src={IconSparkle} alt="" className="size-[8px]" />
              <p className="text-preset-10 text-neutral-600 uppercase">
                Hover to fan
              </p>
              <img src={IconSparkle} alt="" className="size-[8px]" />
            </div>
          </section>

          <section
            aria-label="Guest information"
            className="grid justify-items-center [grid-template-columns:repeat(auto-fit,minmax(351px,1fr))] gap-200 xl:gap-300 xl:mb-[22px]"
          >
            {infoCards.map((card) => (
              <InfoCard cardColor={card.color} card={card} key={card.number}>
                {typeof card.body === 'string' ? (
                  <p className="text-preset-5 text-neutral-700">{card.body}</p>
                ) : (
                  (() => {
                    const wifi = card.body;

                    return (
                      <div className="flex flex-col gap-050">
                        <div className="h-400 px-125 rounded-8 bg-neutral-200 flex justify-between items-center gap-075">
                          <p className="text-preset-8 text-neutral-600 uppercase flex-1">
                            Network
                          </p>
                          <p className="text-preset-7 text-neutral-900">
                            {wifi.network}
                          </p>
                        </div>
                        <div className="h-400 px-125 rounded-8 bg-neutral-200 flex justify-between items-center gap-075">
                          <p className="text-preset-8 text-neutral-600 uppercase flex-1">
                            Password
                          </p>
                          <p
                            className={`text-preset-7 transition-colors duration-300 ease-initial ${copied ? 'text-emerald-700' : 'text-neutral-900 '}`}
                          >
                            {wifi.password}
                          </p>
                          <FuncButton
                            onClick={async () => {
                              try {
                                await navigator.clipboard.writeText(
                                  wifi.password,
                                );
                                setCopied(true);
                                setTimeout(() => setCopied(false), 2000);
                              } catch (err) {}
                            }}
                          >
                            {card.action}
                          </FuncButton>
                        </div>
                      </div>
                    );
                  })()
                )}
              </InfoCard>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
