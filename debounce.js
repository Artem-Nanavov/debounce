const debounce = ( fn, delay ) => {
  let timeOut;
  
  return function() {
    const fnCall = () => { fn.apply( this, arguments ) }
    
    clearTimeout( timeOut )
    
    timeOut = setTimeout( fnCall, delay )
  }
}
