import NavItem from './NavItem';
import { v4 as uuidv4 } from 'uuid';
import requests from './requests';
const Nav = () => {
  return (
    <div className='relative mx-8'>
      <nav className=' mt-10 flex space-x-10   font-black px-4 overflow-x-scroll scrollbar-hide  '>
        {Object.entries(requests).map(([key, { name, url }]) => (
          <NavItem key={uuidv4()} pw={key} name={name} url={url} />
        ))}
        ;
      </nav>
      <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-l from-[#06202A] '></div>
    </div>
  );
};

export default Nav;
