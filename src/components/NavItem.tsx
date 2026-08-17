import type { NavItemData } from './Sidebar';

type NavItemProps = {
  item: NavItemData;
  isActive?: boolean;
};

type BadgeProps = {
  number: number;
};

const Badge = ({ number }: BadgeProps) => {
  return number > 0 ? (
    <div className=" rounded-full bg-terracotta-600 size-4 flex items-center justify-center">
      <span className="text-neutral-100 text-preset-11 leading-none">
        {number}
      </span>
    </div>
  ) : null;
};

const NavItem = ({ item, isActive }: NavItemProps) => {
  return (
    <li>
      <a
        href={item.href}
        aria-current={isActive ? 'page' : undefined}
        className={`px-150 py-125 flex items-center justify-between gap-100 rounded-8 hover:bg-neutral-0
        focus-visible:outline-3 focus-visible:outline-terracotta-600 focus-visible:outline-offset-2 focus-visible:bg-neutral-0
        ${isActive ? 'bg-neutral-0' : ''}`}
      >
        <img src={item.icon} alt="" />
        <span className=" text-preset-5-medium flex-1">{item.name}</span>

        <Badge number={item.notification} />
      </a>
    </li>
  );
};

export default NavItem;
