import React from 'react'
import { RichText } from 'prismic-reactjs'
import Styles from './QuoteSlice.module.scss';

const QuoteSlice = ({ slice }) => ( 
  <section className={Styles.quote}>
    <blockquote>
      {RichText.asText(slice.primary.quotetext)}
    </blockquote>
    { slice.variation === 'quoteReference' ? 
      <div>
        <cite>
          <RichText render={slice.primary.reference}/>
        </cite>
      </div>
      : null
    }   
  </section>
)

export default QuoteSlice
