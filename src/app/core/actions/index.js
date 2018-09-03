
// Unit, semantic, idiomatic, discrete-actions.

// --> changed my mind. componensts (containers) should import reusuable "workflows"
// container doesn't know/care if the workflow is just a discrete action or a 
// kick off to a complicated async workflow.

// nah changed again. componetns always use atomic actions. /simple/. works with sagas + epics too.

// The heart of an action is in its "type" (name)..




// The critical point is that an action is semantic, unitized,
// and completely context agnostic.

// All actions are global, not specific to a reducer/state-slice.
// Must be carefully named, must be unique. This is almost like an enum.
// "Types", but should have been called "names"
export {

  // Discover star is intended for when a user finds a hidden star on the website.
  DISCOVER_STAR: 'DISCOVER_STAR'

  // Retrieve basic user data
  RETRIEVE_USER: 'RETRIEVE_USER'

  // Receive basic user data
  RECEIVE_USER: 'RECEIVE_USER'

}


