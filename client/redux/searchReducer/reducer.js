const initialState = {
  city: "",
  checkInDate: null,
  checkOutDate: null,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH":
      return {
        ...state,
        city: action.payload,
      };
    case "SET_DATES":
      return {
        ...state,
        checkInDate: action.payload.checkInDate,
        checkOutDate: action.payload.checkOutDate,
      };
    default:
      return state;
  }
};

