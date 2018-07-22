const localSettings = store => next => (action) => {
  // maybe app wanna to store redux state to local/session storage,
  // so, this is a good place to make it happen
  window.localStorage.setItem(
    'appLocalSettings',
    JSON.stringify(store.getState()),
  );
  return next(action);
};

export default localSettings;
