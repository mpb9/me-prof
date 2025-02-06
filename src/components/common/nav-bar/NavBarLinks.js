import { NavLink } from 'react-router-dom';
export const link_to_home = (
  <NavLink to='/' className='underline hover:opacity-60'>
    michael-beebe.com
  </NavLink>
);
export const current_page = (name) => {
  return <h1 className='font-thin cursor-default'>/{name}</h1>;
};
export const link_to_page = (name) => {
  return (
    <NavLink to={'/' + name} className='underline hover:opacity-60'>
      /{name}
    </NavLink>
  );
};
