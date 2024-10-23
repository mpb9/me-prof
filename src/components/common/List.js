import { PersonSimple, QuestionMark } from '@phosphor-icons/react';
import PropTypes from 'prop-types';

List.propTypes = {
  category: PropTypes.object.isRequired,
  content: PropTypes.array.isRequired,
};
export default function List(props) {
  return (
    <ul className={`list-inside list-square space-y-3 pb-3 pt-1 ${props.category.color.txt}`}>
      <h1 className='flex items-center text-xl font-black'>
        {props.category.name}
        <span className='ml-2'>
          <props.category.icon className='' weight='fill'></props.category.icon>
        </span>
      </h1>

      {props.content.map((item, index) => {
        return (
          <li key={index} className='text-base ml-2'>
            {item.url ? (
              <a
                href={item.url}
                target='_blank'
                rel='noreferrer'
                className={`underline inline-flex items-center ${props.category.color.txt} hover:opacity-60`}>
                {item.name}
                {item.icon !== QuestionMark && item.icon !== props.category.icon ? (
                  <span className='ml-2'>
                    <item.icon className='' weight='bold'></item.icon>
                  </span>
                ) : null}
                {item.mine ? (
                  <span className='ml-2'>
                    <PersonSimple className='' weight='bold'></PersonSimple>
                  </span>
                ) : null}
              </a>
            ) : (
              item.name
            )}
            {item.info ? (
              <ul className='list-circle text-sm list-outside ml-8 mt-2 opacity-90 text-[#d9d7d2]'>
                <li>{item.info}</li>
              </ul>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
