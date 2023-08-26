export function updateObject(prevObj, newObj) {
  if (Array.isArray(prevObj) && Array.isArray(newObj))
    return updateArrays(prevObj, newObj);

  for (const key in newObj) {
    if (typeof newObj[key] === 'object' && newObj[key] !== null) {
      if (!prevObj.hasOwnProperty(key)) {
        prevObj[key] = {};
      }
      prevObj[key] = updateObject(prevObj[key], newObj[key]);
    } else {
      prevObj[key] = newObj[key];
    }
  }
  return prevObj;
}

function updateArrays(prevArrays, newArrays) {
  let unFoundObjs = [];
  for (let i = 0; i < newArrays.length; i++) {
    const index = prevArrays.findIndex((x) => x.id === newArrays[i].id);
    if (index >= 0)
      prevArrays[index] = updateObject(prevArrays[index], newArrays[i]);
    else unFoundObjs.push(newArrays[i]);
  }
  prevArrays = [...prevArrays, ...unFoundObjs];
  return prevArrays;
}
