const customDateFormats = function (date = new Date()) {
  return {
    long: new Intl.DateTimeFormat('hu-HU', {
      year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',
    }).format(date),
    short: new Intl.DateTimeFormat('hu-HU', {
        year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric',
    }).format(date)
};
};

export default customDateFormats;
