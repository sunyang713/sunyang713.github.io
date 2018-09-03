// Important definition of Action. All actions must adhere to this standard for the core-engine to work.

// const baseAction = {
//   type: 'ACTION',
//   error: false,

//   // stack trace of callers/root/source of actions?
//   // array?
//   // actor!!! user clicked? or maybe websocket event? or finished api call?
//   actor: 'myReactComp.buttinId.onClick | store-api-middleware | websocket-manager',

//   // payload should be minimal, can be any which shape. keep it flat, no need to nest.
// Should payload ---> arguments: [ . . . ] ?????????
//   payload: { /* . . . */ },
// }

/**
 * Utility function for creating standard-compliant action creators.
 */
export default function action(name, actor) {
  return (...payload) => ({
    type: name,
    name,
    actor,
    payload,
    // I don't think this is needed
    // error: payload.filter(arg => arg instanceof Error)
  })
}
