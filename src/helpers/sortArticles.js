const sortArticles = articles => {
  const arr = articles.sort((a, b) => {
    const dateA = a.frontmatter.date.split('.');
    const dateB = b.frontmatter.date.split('.');

    const formatYearA = dateA[2].length === 2 ? `20${dateA[2]}` : dateA[2];
    const formatYearB = dateB[2].length === 2 ? `20${dateB[2]}` : dateB[2];

    const res =
      Date.parse(`${formatYearB}.${dateB[1]}.${dateB[0]}`) -
      Date.parse(`${formatYearA}.${dateA[1]}.${dateA[0]}`);

    return res;
  });

  return arr;
};

export default sortArticles;
