var countSheep = function (num){
    //your code here
    let result = "";
    let count = 1;
    if(num === 0){
      return result;
    }
    while(count <= num){
      result += `${count} sheep...`
      count+=1
    }
    return result;
  }
