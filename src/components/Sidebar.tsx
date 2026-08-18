import iconBed from '../../assets/images/icon-bed.svg';
import iconHouse from '../../assets/images/icon-house.svg';
import iconPin from '../../assets/images/icon-pin.svg';
import iconBreakfast from '../../assets/images/icon-breakfast-outline.svg';
import iconMail from '../../assets/images/icon-mail.svg';
import NavItem from './NavItem';
import IconButton from './IconButton';
import IconClose from '../../assets/images/icon-close.svg';
import WeatherWidget from './WeatherWidget';
import Header from './Header';
import { Dispatch, HTMLAttributes, SetStateAction } from 'react';

export type NavItemData = {
  name: string;
  icon: string;
  notification: number;
  href: string;
};

const navItems: NavItemData[] = [
  {
    name: 'Your stay',
    icon: iconBed,
    notification: 1,
    href: 'stay',
  },
  {
    name: 'The house',
    icon: iconHouse,
    notification: 0,
    href: 'house',
  },
  {
    name: 'Around town',
    icon: iconPin,
    notification: 0,
    href: 'around',
  },
  {
    name: 'Breakfast',
    icon: iconBreakfast,
    notification: 0,
    href: 'breakfast',
  },
  {
    name: 'Message',
    icon: iconMail,
    notification: 0,
    href: 'message',
  },
];

type SidebarProps = HTMLAttributes<HTMLElement> & {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({ isOpen, setIsOpen, ...props }: SidebarProps) => {
  return (
    <>
      <div
        className={`fixed h-screen w-screen z-50 transition-colors duration-300 ease-in xl:invisible ${isOpen ? 'bg-neutral-900/90 visible' : 'bg-transparent collapse'}`}
        onClick={() => setIsOpen(false)}
      />
      <aside
        className={`fixed bg-neutral-100 h-screen p-200 md:px-300 md:py-200 xl:px-200 xl:py-250 flex flex-col z-50 gap-200 w-[320px] md:w-[384px] xl:w-[260px] xl:visible ${props.className} xl:border-r border-neutral-400 transition-transform duration-300 ease-in transform-3d`}
      >
        <Header
          button={
            <IconButton
              icon={IconClose}
              label={'Close menu'}
              className="xl:collapse"
              onClick={() => setIsOpen(false)}
            />
          }
        />

        <div className=" h-px  bg-neutral-400"></div>

        {/* Nav */}
        <nav className="flex-1">
          <ol>
            {navItems.map((item) => (
              <NavItem
                item={item}
                key={item.name}
                isActive={item.name === 'Your stay'}
              />
            ))}
          </ol>
        </nav>

        <WeatherWidget />

        <div className="border-t border-dashed border-neutral-400"></div>

        {/* Footer */}
        <footer className="flex flex-col gap-125 text-neutral-600 text-preset-10 uppercase">
          <p>Est. 1987</p>
          <p>Maison Soleil · 12 Rue des Oliviers · Cassis</p>
          <p>© 2026 Maison Soleil</p>
        </footer>
      </aside>
    </>
  );
};

export default Sidebar;
