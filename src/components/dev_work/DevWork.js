import { useState } from 'react';
import { getCategoriesByPage, getStuffByCategory, getStuffByPage } from '../../actions/FilterStuff';
import { STUFF_LIST } from '../../data/Stuff';
import { Dev } from '../../data/Themes';
import List from '../common/List';
import NavBar from '../common/nav-bar/NavBar';
import SideBar from '../common/SideBar';

export default function DevWork() {
  const [theme] = useState(Dev);
  const devWork = getStuffByPage(STUFF_LIST, 'dev');
  const cats = getCategoriesByPage(STUFF_LIST, 'dev');

  return (
    <div className={`min-h-screen bg-[#2197FF]`}>
      <NavBar theme={theme} themeName='dev' />
      <SideBar cats={cats} theme={theme} />
      <div
        className={`min-h-screen m-0 pt-14 pl-14 sm:pl-[12vw] lg:pl-[10vw] pb-10 pr-0 md:pr-2 lg:pr-5 sm:pt-16 md:pt-20 overflow-scroll space-y-3 ${theme.main.txt}`}>
        {cats.map((category) => (
          <List
            key={category.name}
            id={category.name.toLowerCase()}
            category={category}
            content={getStuffByCategory(devWork, category)}
            theme={theme}
            themeName='dev'
          />
        ))}
      </div>
    </div>
  );
}
