const HeaderItem = ({ Icon, Title }) => {
  return (
    <div className='flex flex-col flex-grow justify-evenly items-center group hover:text-white  w-12  '>
      <Icon className='hover:animate-bounce w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16' />
      <div className='opacity-0 group-hover:opacity-100 text-xs sm:text-sm lg:text-lg'>
        {Title}
      </div>
    </div>
  );
};

export default HeaderItem;
