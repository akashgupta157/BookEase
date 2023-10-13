export const updateSearch = (city) => ({
  type: "UPDATE_SEARCH",
  payload: city,
});

export const setDates = (checkInDate, checkOutDate) => ({
  type: "SET_DATES",
  payload: { checkInDate, checkOutDate },
});
