    var Matrix = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
    ];
    console.log(Matrix.length)
    var New_array= [];
    
function toReadable(Arr) {
    for (var i = 0; i < Arr.length; i++) {
      if (i%2!=0) {
        for (var j = Arr[i].length-1; j >= 0; j--) {
          New_array.push(Arr[i][j]);
        }
      } else {
        for (var j = 0; j < Arr[i].length; j++) {
          New_array.push(Arr[i][j]);
        }   
      }
    }
  return New_array;    
}
      
      

    console.log(toReadable([]))
  
