import HeaderItem from './HeaderItem';
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';

const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row justify-between items-center py-4 px-8 m-6 flex-grow'>
      <div className='flex flex-grow justify-evenly max-w-3xl '>
        <HeaderItem Icon={HomeIcon} Title='HOME' />
        <HeaderItem Icon={BadgeCheckIcon} Title='BADGE' />
        <HeaderItem Icon={CollectionIcon} Title='COLLECTIONS' />
        <HeaderItem Icon={LightningBoltIcon} Title='STORE' />
        <HeaderItem Icon={SearchIcon} Title='SEARCH' />
        <HeaderItem Icon={UserIcon} Title='PROFILE' />
      </div>
      <div className='font-black text-2xl sm:text-3xl md:text-4xl text-center text-[#40E969] cursor-pointer'>
        HULU
      </div>
    </header>
  );
};

export default Header;
