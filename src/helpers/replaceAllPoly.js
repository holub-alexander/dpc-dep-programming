const replaceAllPoly = (originalString, find, replace) => {
  return originalString.replace(new RegExp(find, 'g'), replace);
};

export default replaceAllPoly;
