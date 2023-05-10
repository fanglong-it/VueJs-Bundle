// in child component
// export default {
//     props: {
//       msg: String
//     },
//     template: '<h2>{{msg || "No Props passed yet"}}</h2>'
//   }
  

// export default {
//     //decalare emitted events
//     emits: ['response'],
//     setup(props, {emit}) {
//         emit('response', 'Hello from child')
//         return {}   
//     },
//     template: '<h2>Child Component</h2>'
// }


//12
export default {
    template: `
    <slot>Fallback content</slot>
    `
  }