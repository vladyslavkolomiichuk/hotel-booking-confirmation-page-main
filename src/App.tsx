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

export enum InfoCardActions {
  COPY = 'Copy',
}

export type InfoCardData = {
  label: string;
  icon: string;
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
    number: '01',
    title: 'Check-in from 15:00',
    subtitle: 'Sat, 25 April',
    body: "Ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree.",
  },
  {
    label: 'Wifi',
    icon: IconWifi,
    number: '02',
    title: 'Le Soleil · Guest',
    subtitle: 'Password below',
    body: { network: 'Le Soleil · Guest', password: 'soleil-2026' },
    action: InfoCardActions.COPY,
  },
  {
    label: 'Breakfast',
    icon: IconBreakfast,
    number: '03',
    title: 'Served 8 - 10:30',
    subtitle: 'On the terrace',
    body: 'Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.',
  },
];

function App() {
  return (
    <>
      <Sidebar />

      <main className="p-200 pt-200 pb-500 md:p-300 md:pt-200 md:pb-500 xl:px-500 xl:py-400 flex flex-col gap-250 xl:ml-[260px]">
        <Header
          className="xl:collapse"
          button={<IconButton icon={IconMenu} label="Open menu" />}
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
            className="flex flex-col items-center"
          >
            <div
              className="flex flex-col md:flex-row-reverse 
            items-center justify-center gap-0 m-125"
            >
              <WelcomeCard />
              <Receipt />
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
              <InfoCard card={card} key={card.number}>
                {typeof card.body === 'string' ? (
                  <p className="text-preset-5 text-neutral-700">{card.body}</p>
                ) : (
                  <div className="flex flex-col gap-050">
                    <div className="h-400 px-125 rounded-8 bg-neutral-200 flex justify-between items-center gap-075">
                      <p className="text-preset-8 text-neutral-600 uppercase flex-1">
                        Network
                      </p>
                      <p className="text-preset-7 text-neutral-900">
                        {card.body.network}
                      </p>
                    </div>
                    <div className="h-400 px-125 rounded-8 bg-neutral-200 flex justify-between items-center gap-075">
                      <p className="text-preset-8 text-neutral-600 uppercase flex-1">
                        Password
                      </p>
                      <p className="text-preset-7 text-neutral-900">
                        {card.body.password}
                      </p>
                      <FuncButton>{card.action}</FuncButton>
                    </div>
                  </div>
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
