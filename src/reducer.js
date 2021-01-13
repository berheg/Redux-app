import * as actions from './actionTypes';
let lastId = 0;
export default function reducer(state=[], action) {
  //if condition
  /*if (action.type === 'bugAdded')
    return [
      ...state,
      {
        id: ++lastId,
        description: action.playload.description,
        resolved: false
      }
    ];
    else if (action === "bugRemoved") {
      return state.filter(bug => bug.id!== action.playload.id);
    }
    return state;*/
    //Swith and case
    switch (action.type) {
      case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.playload.description,
          resolved: false
        }
      ];
      case actions.BUG_REMOVED:
        return state.filter(bug => bug.id!== action.playload.id);
      case actions.BUG_RESOLVED:
        return state.map(bug =>
          bug.id !== action.playload.id ? bug : {...bug, resolved: true})
        break;
      default:
        return state;
    }
}
