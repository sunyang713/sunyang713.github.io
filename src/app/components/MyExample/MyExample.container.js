// Put react-redux.connect here, graphql data here (partial stuff??),
// experimental flag here, auth needed, code splitting, etc,

// maybe use a utility function "createEnhancer"? 

import MyExampleComponent from './MyExampleComponent'
import action, { RAWR } from 'core/action'


const actions = {
  doSemanticThing: action(RAWR)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyExampleComponent)
