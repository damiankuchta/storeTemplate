function mapDictionary(dict, func) {
  return Object.keys(dict).map((key, index) => {
    const text = dict[key];
    return func(key, text);
  });
}

export default mapDictionary;
