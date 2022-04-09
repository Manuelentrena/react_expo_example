export function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export function validateNull(text) {
  if( text === "" || text === undefined){
    return true
  }
  return false
}

export function validateNotMinLength(text) {
  if( text.length < 8 ){
    return true
  }
  return false
}

export function validateIsNotSame(text, textRepeat) {
  if( text !== textRepeat){
    return true
  }
  return false
}
