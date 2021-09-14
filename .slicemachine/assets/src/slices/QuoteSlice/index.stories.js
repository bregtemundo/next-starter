import MyComponent from '../../../../../src/slices/QuoteSlice';

export default {
  title: 'src/slices/QuoteSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"paragraph","text":"Irure minim mollit voluptate quis officia. Nulla culpa consequat esse fugiat proident adipisicing commodo cillum sint esse aliquip tempor enim magna officia. Veniam laborum in nisi ut minim aliqua deserunt tempor nisi pariatur ad exercitation magna ea.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _QuoteReference = () => <MyComponent slice={{"variation":"quoteReference","name":"Quote Reference","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"paragraph","text":"Exercitation ut et magna id tempor non id. Cupidatat nostrud do mollit sit cupidatat nisi nisi in. Non et nisi nulla consectetur.","spans":[]}],"reference":[{"type":"paragraph","text":"Ea eu aute dolor pariatur fugiat sunt adipisicing aute deserunt voluptate elit amet fugiat officia. Cupidatat enim dolor velit eu occaecat commodo adipisicing ex fugiat laborum.","spans":[]}]},"id":"_QuoteReference"}} />
_QuoteReference.storyName = 'Quote Reference'
