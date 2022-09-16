function mapDictionary(dict, func) {
  return Object.keys(dict).map((dictKey, index) => {
    const value = dict[dictKey];
    return func(dictKey, value, index);
  });
}

export default mapDictionary;
