const toRupiah = (value) =>{
  return new Intl.NumberFormat('id-ID', 
  { style: "currency", currency: "IDR", minimumFractionDigits: 0 }) // mengubah format rawModal menjadi RP
  .format(value); 
}

const passenger = (value) => {
  let result;
  if(value === "small"){
    result = 2;
  }else if (value === "medium") {
    result = 4
  }else if (value === "large") {
    result = 6
  }else{
    result = 1;
  }
  return result;
}

const checkDriver = (value) => {
  let result;
  if(value === true){
    result = 'Otomatis';
  }else{
    result = "Manual";
  }
  return result;
}

export { toRupiah, passenger, checkDriver }