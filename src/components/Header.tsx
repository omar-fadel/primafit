import Image from 'next/image';
import HeaderLink from './Header/HeaderLink';
import Button from './Button/Button';
import SearchIcon from '@/../public/icons/Search.svg';
import './Header.css';
import ShoppingCard from '@/../public/icons/shopping-cart.svg';
import Person from '@/../public/icons/person.svg';

const Header = () => {
  return (
    <nav className="flex h-28 items-center justify-center">
      <div className="container flex items-center">
        <Image
          width={128}
          height={28}
          className="h-fit"
          alt="Logo"
          src={'/logo/black-white-logo.png'}
        />
        <div className="flex flex-1 items-center justify-center gap-6">
          {['About', 'Projects', 'Education', 'Shop', 'Media', 'Blog'].map(
            (link) => (
              <HeaderLink text={link} key={link} onClick={() => {}} />
            )
          )}
          <Button onClick={() => {}}>Contact Us</Button>
        </div>
        <div className="flex items-center gap-2">
          <SearchIcon />
          <ShoppingCard />
          <Person />
        </div>
      </div>
    </nav>
  );
};

export default Header;
