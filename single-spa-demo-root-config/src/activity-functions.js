export function prefix(location, ...prefixes) {
  return prefixes.some(
    (prefix) => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
  );
}

export function nav() {
  // The nav is always active
  return true;
}

// active with application page1
export function page1(location) {
  return prefix(location, "page1");
}

// active with application page2
export function page2(location) {
  return prefix(location, "page2");
}

// active with application employee
export function employee(location) {
  return prefix(location, "employee");
}
