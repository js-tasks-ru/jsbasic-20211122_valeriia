function ucFirst(str) {
  if (str){
    result = str[0].toUpperCase() + str.slice(1);
  } else {
    result = str;
  }
  return result;
}
