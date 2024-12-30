export default function mountClassName(className, filterCallback) {
  let newClass = "";

  if (Array.isArray(className)) {
    className.forEach((classItem) => {
      if (!filterCallback || filterCallback(classItem)) {
        newClass += !newClass.length ? classItem : ` ${classItem}`;
      }
    });
  } else {
    newClass = className;
  }

  return newClass;
}
