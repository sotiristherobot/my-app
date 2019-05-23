import { CREATE_ITEM } from "../constants/actionTypes";

const initialState = {
  itemId: 0,
  items: []
};

const createItem = (state, itemId) => {
  itemId += 1;
  return {
    ...state,
    itemId: itemId,
    items: [
      ...state.items,
      {
        id: (state.itemId += 1),
        title: "title",
        content: "content"
      }
    ]
  };
};

export default function listitems(state = initialState, action) {
  switch (action.type) {
    case CREATE_ITEM:
      return createItem(state, state.itemId);
    default:
      return state;
  }
}
