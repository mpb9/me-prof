import { QuestionMark, Smiley } from '@phosphor-icons/react';
import PropTypes from 'prop-types';

List.propTypes = {
  category: PropTypes.object.isRequired,
  content: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
  themeName: PropTypes.string.isRequired,
};
export default function List(props) {
  return (
    <div
      id={props.category.name.toLowerCase()}
      className={`flex ml-9 mr-4 sm:mr-6 md:mr-10 lg:ml-12 lg:mr-14 xl:mr-20 ${props.category.color[props.themeName].brdr} ${props.theme.main.bg}`}>
      <div
        className={`hidden sm:flex items-center text-[#000] text-opacity-75 bg-opacity-90 justify-center ${props.category.color[props.themeName].bg}`}>
        <span className='mx-[2px]'>
          <props.category.icon
            className='text-base md:text-lg lg:text-xl xl:text-2xl'
            weight='fill'></props.category.icon>
        </span>
      </div>
      <ul
        className={`py-2 lg:py-3 px-2 md:px-3 xl:pr-6 space-y-3 lg:space-y-4 ${props.category.color[props.themeName].txt}`}>
        {props.content.map((item, index) => {
          return (
            <li key={index} className='ml-2 text-xs md:text-sm lg:text-base xl:text-lg'>
              {item.url ? (
                <a
                  href={item.url}
                  target='_blank'
                  rel='noreferrer'
                  className={`underline inline-flex items-center underline-offset-2 ${props.category.color[props.themeName].txt} hover:opacity-70`}>
                  {item.name}
                  {item.icon !== QuestionMark && item.icon !== props.category.icon ? (
                    <span className='ml-2'>
                      <item.icon className='text-sm md:text-base lg:text-xl' weight='bold'></item.icon>
                    </span>
                  ) : null}
                  {item.mine ? (
                    <span className='ml-2'>
                      <Smiley className='text-sm md:text-base lg:text-xl' weight='fill'></Smiley>
                    </span>
                  ) : null}
                </a>
              ) : (
                item.name
              )}
              {item.info ? (
                <ul className='text-2xs md:text-xs lg:text-sm xl:text-base leading-5 md:leading-6 lg:leading-6 xl:leading-7 list-outside mt-1 pb-1 opacity-80 text-[#d9d7d2]'>
                  <li>{item.info}</li>
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
