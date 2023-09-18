import React from 'react';

import { useBreakpoint } from '../hooks/hooks.js';
import { contactBarLinks } from '../data/contactBarLinks.js';
import '../styles/ContactBar.css';

export default function ContactBar() {

  const breakpoint = useBreakpoint();

  const links = contactBarLinks.map((link, index) => {
    return (
      <div className='ContactBar_linkWrapper' key={index}>
        <p className='ContactBar_link'>
          <a href={link.url} className='ContactBar_anchor'>
          {link.text}
          </a>
        </p>
        <div className='ContactBar_line' />
      </div>
    )
  })

  if (breakpoint === 'mobile' || breakpoint === 'tablet') {
    return null;
  }
  else {
    return (
      <div className='ContactBar'>
        {links}
      </div>
    );
  }

}