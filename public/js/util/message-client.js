var getChatMessageClass = (from, me) => {

  if (from === 'Admin') {
    return 'admin-message';
  } else if (from === me) {
    return 'self-message';
  } else {
    return 'others-message';
  }
};
