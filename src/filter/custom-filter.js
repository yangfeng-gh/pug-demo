options.filters = {
  'my-own-filter': function (text, options) {
    if (options.addStart) text = '始\n' + text;
    if (options.addEnd)   text = text + '\n终';
    return text;
  }
};
