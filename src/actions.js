
import * as actions from './actionTypes';
/*export function bugAdded(description) {
  return {
    type: actions.BUG_ADDED,
    playload: {
      description: description
    }
  };
};*/
//using arrow function
export const bugAdded = description => ({
    type: actions.BUG_ADDED,
    playload: {
      description
    }
});
/*export function bugRemoved(id) {
  return {
    type: actions.BUG_REMOVED,
    playload: {
      id: id
    }
  };
};*/
//arrow function
export const bugRemoved = id => ({
  type: actions.BUG_REMOVED,
  playload: {
    id
  }
});
export const bugResolved = id => ({
  type: actions.BUG_RESOLVED,
  playload: {
    id
  }
});
