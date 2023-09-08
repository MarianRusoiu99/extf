import Link from 'next/link';

import Div from '../Div';

export default function Card({ title, link, src, alt , variant }) {   //if it has a link prop, renders the content inside a link wrapper else in a simple div
  return (
    link ? (<Link href={link} className='cs-card cs-style1'>
    <>
      <img src={src} alt={alt} className={`${variant}`} />
      <Div className="cs-card_overlay" />
      <Div className="cs-card_info">
        <span className=" cs-hover_layer3 cs-accent_bg" />
        <h2 className="cs-card_title">{title}</h2>
      </Div>
    </>
  </Link>) :  (<div href={link} className='cs-card cs-style1'>
  <>
    <img src={src} alt={alt} className={`${variant}`} />
    <Div className="cs-card_overlay" />
    <Div className="cs-card_info">
      <span className=" cs-hover_layer3 cs-accent_bg" />
      <h2 className="cs-card_title">{title}</h2>
    </Div>
  </>
</div>)  
    
  );
}
