import Link from 'next/link';
import Div from '../Div';

export default function MovingText2({ data, reverseDirection }) {
  return (
    <Div className="cs-moving_text_wrap cs-type1 cs-bold cs-primary_font">
      <Div className="cs-moving_text_in">
        <Div
          className={
            reverseDirection
              ? 'cs-moving_text cs-reverse_animation'
              : 'cs-moving_text'
          }
        >
          {data.map((item, index) => (
             (item.href) ?
            <>
              <Link key={index} href={item.href}>
                {item.title}
              </Link>
              -
            </> : <>
            <Div key={index}>
            {item.title}
            </Div>
            -
            </>
          ))}
        </Div>
        <Div
          className={
            reverseDirection
              ? 'cs-moving_text cs-reverse_animation'
              : 'cs-moving_text'
          }
        >
          {data.map((item, index) => (
            (item.href) ?
            <>
              <Link key={index} href={item.href}>
                {item.title}
              </Link>
              -
            </> : <>
            <Div key={index}>
            {item.title}
            </Div>
            -
            </>
          ))}
        </Div>
      </Div>
    </Div>
  );
}
