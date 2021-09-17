import MyComponent from '../../../../../src/slices/QuoteSlice';

export default {
  title: 'src/slices/QuoteSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"paragraph","text":"Commodo anim magna cupidatat id. Ipsum et laborum aute tempor. Duis anim pariatur esse excepteur velit deserunt deserunt sint in.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _QuoteReference = () => <MyComponent slice={{"variation":"quoteReference","name":"Quote Reference","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"paragraph","text":"Commodo irure tempor eiusmod laboris irure culpa eu ea excepteur eu.","spans":[]}],"reference":[{"type":"paragraph","text":"Irure nulla duis in magna cupidatat aliqua non laborum occaecat aliqua. Dolor pariatur amet minim adipisicing Lorem ex exercitation nostrud eu laboris. Officia in occaecat sunt labore eiusmod nisi.","spans":[]}]},"id":"_QuoteReference"}} />
_QuoteReference.storyName = 'Quote Reference'
