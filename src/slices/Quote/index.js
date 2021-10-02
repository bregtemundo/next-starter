import React from 'react'
import Styles from './Quote.module.scss';

const Quote = ({ blok }) => ( 
  <section className={Styles.quote}>
    <blockquote>
      {blok.quotetext}
    </blockquote>
    { blok.reference ? 
      <div>
        <cite>
          {blok.reference}
        </cite>
      </div>
      : null
    }   
  </section>
)

export default Quote
