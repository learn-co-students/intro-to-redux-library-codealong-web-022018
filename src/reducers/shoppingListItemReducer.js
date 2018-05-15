export default function shoppingListItemReducer(state = {
  items: []
}, action) {
  console.log(action);
  switch(action.type) {

    case 'INCREASE_COUNT':
      console.log("current length " + state.items.length);
      // console.log(typeof state.items.length);
      console.log("updating length " + (state.items.length+1));
      return Object.assign({}, state, { items: state.items.concat(state.items.length + 1) });

    default:
      console.log("initial length " +state.items.length);
      return state;
  }
}
