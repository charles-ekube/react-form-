import React from 'react';
import { customer_support, group, our_sites } from './sitemapdata';
import '../style.css';


const SiteMapCard = () => {

   return (
    <>
    <article className='card-container'>
        <div className='card-header padding-sm'>
            <h3>
                Site Map
            </h3>            
        </div>
        <section className='card-content'>
            <div>
                <h4 id='information'>Information</h4>
            </div>
            <div className=' padding-sm'>
                <h5 className='site'>Customer Support</h5>
                <ul>
                    {customer_support.map((item) => (
                        <li key={item.id} className='site-list-item'>{item.title}</li>
                    ))}
                </ul>
            </div>
            <div className=' padding-sm'>
                <h5 className='site'>1StopShop Group</h5>
                <ul>
                    {group.map((item) => (
                        <li key={item.id} className='site-list-item'>{item.title}</li>
                    ))}
                </ul>
            </div>
            <hr/>
            <div className=' padding-sm'>
                <h5 className='site'>Our Sites</h5>
                <ul>
                    {our_sites.map((item) => (
                        <li key={item.id} className='site-list-item'>{item.title}</li>
                    ))}
                </ul>
            </div>
        </section>
    </article>
</>
   )
   
}

export {SiteMapCard};