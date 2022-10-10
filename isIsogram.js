function isIsogram(str){
  const strObj = {};
  const strArr = str.toLowerCase().split('');
  let status = true;
  strArr.forEach((each) => {
    if(strObj.hasOwnProperty(each)) {
      status = false;
      return status;
    } else {
      strObj[each] = each;
    }
  })
  return status;
}
