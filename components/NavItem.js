import { useRouter } from 'next/router';
const NavItem = ({ pw, name, url }) => {
  const router = useRouter();
  return (
    <div
      className=' transition duration-150 whitespace-nowrap cursor-pointer hover:text-red-300 transform hover:scale-125 md:text-xl lg:text-2xl'
      onClick={() => router.push(`?genre=${pw}`)}
    >
      {name}
    </div>
  );
};

export default NavItem;
