function deepEqual<T>(obj1: T, obj2: T): boolean {
  if (typeof obj1 !== typeof obj2) return false;

  if (typeof obj1 === 'object' && typeof obj2 === 'object' && obj1 !== null && obj2 !== null) {
    const [keys1, keys2] = [obj1, obj2].map(Object.keys);
    if (keys1.length !== keys2.length) return false;
    for (let key of keys1) {
      if (!deepEqual(obj1[key as keyof T], obj2[key as keyof T])) return false;
    }
    return true;
  }
  return obj1 === obj2;
}

export default deepEqual;
