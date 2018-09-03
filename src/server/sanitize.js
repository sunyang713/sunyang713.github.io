
export function sanitize(state) {
  return JSON.stringify(state).replace(/</g, '\\u003c')  
}
