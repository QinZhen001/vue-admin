const localStorage = window.localStorage

export default {
  setItem(key,value){
    value = JSON.stringify(value)
    localStorage.setItem(key,value)
  },
  getItem(key,defaultValue){
    let  value  = localStorage.getItem(key)
    try{
      value = JSON.parse(value);
    }catch(e){ 
      // TODO:捕获错误
    }
    return value || defaultValue 
  },
  removeItem(key){
    localStorage.removeItem(key)
  },
  clear(){
    localStorage.clear() 
  }
}