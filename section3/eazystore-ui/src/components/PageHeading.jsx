import React from 'react'
import { PageTitle } from './footer/PageTitle';

export default function PageHeading(props) {
  return (
    <div className='page-heading-container'>
        <PageTitle title={props.title}/>
        <p className=''>
            {props.children}
        </p>
    </div>
    
  );
};
