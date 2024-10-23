import { NavLink } from 'react-router-dom';
export const link_to_home = (
  <NavLink to='/' className='text-sm md:text-base lg:text-lg underline font-thin hover:opacity-60'>
    michael-beebe.com
  </NavLink>
);
export const current_page = (name) => {
  return <h1 className='font-thin italic cursor-default text-sm md:text-base'>/{name}</h1>;
};
export const link_to_page = (name) => {
  return (
    <NavLink to={'/' + name} className='underline text-sm md:text-base hover:opacity-50 hidden sm:block'>
      /{name}
    </NavLink>
  );
};
