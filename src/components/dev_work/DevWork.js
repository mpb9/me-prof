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
    <div className={`min-h-screen ${theme.main.bg}`}>
      <NavBar theme={theme} themeName='dev' />
      <SideBar cats={cats} theme={theme} />
      <div
        className={`min-h-screen m-0 pt-12 pl-[10vw] pr-5 pb-10 sm:sm-14 md:pt-16 lg:pt-20 overflow-scroll space-y-3 ${theme.main.txt}`}>
        {cats.map((category) => (
          <div
            key={category.name}
            id={category.name.toLowerCase()}
            className={`flex px-6 py-2 border-2 mx-8 bg-[#000] bg-opacity-70 ${category.color.brdr}`}>
            <List category={category} content={getStuffByCategory(devWork, category)} />
          </div>
        ))}
      </div>
    </div>
  );
}
