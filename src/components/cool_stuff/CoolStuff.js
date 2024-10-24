import { useState } from 'react';
import { getCategoriesByPage, getStuffByCategory, getStuffByPage } from '../../actions/FilterStuff';
import { STUFF_LIST } from '../../data/Stuff';
import { Stuff } from '../../data/Themes';
import List from '../common/List';
import NavBar from '../common/nav-bar/NavBar';
import SideBar from '../common/SideBar';
export default function CoolStuff() {
  const [theme] = useState(Stuff);
  const coolStuff = getStuffByPage(STUFF_LIST, 'cool');
  const cats = getCategoriesByPage(STUFF_LIST, 'cool');

  return (
    <div className={'min-h-screen bg-cloud bg-cover'}>
      <NavBar theme={theme} themeName='stuff' />
      <SideBar cats={cats} theme={theme} />
      <div
        className={`min-h-screen m-0 pt-14 pl-14 sm:pl-[12vw] lg:pl-[10vw] pb-10 pr-0 md:pr-2 lg:pr-5 sm:sm-14 md:pt-16 lg:pt-20 overflow-scroll space-y-3 ${theme.main.txt}`}>
        {cats.map((category) => (
          <List key={category.name} category={category} content={getStuffByCategory(coolStuff, category)} />
        ))}
      </div>
    </div>
  );
}
