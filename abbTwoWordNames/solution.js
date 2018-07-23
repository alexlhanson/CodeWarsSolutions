function abbrevName(name){
  //splits name into array, grabs capital first char of each and joins them with dot
    return name.split(" ").map(x => x[0].toUpperCase()).join('.');
  }