function mapDictionary(dict, func) {
  return Object.keys(dict).map((key, index) => {
    const value = dict[key];
    return func(key, value);
  });
}

export default mapDictionary;
