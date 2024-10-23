// MARK: Single Var Filter

export function getStuffByPage(stuff, page) {
  return stuff.filter((item) => item.page === page || item.page === 'both');
}
export function getStuffByCategory(stuff, cat) {
  return stuff.filter((item) => item.cat === cat);
}

// MARK: Get List of Categories
export function getCategoriesByPage(stuff, page) {
  return [...new Set(stuff.filter((item) => item.page === page || item.page === 'both').map((item) => item.cat))];
}
