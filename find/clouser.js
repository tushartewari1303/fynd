function n() {
    // Local “free” variable that ends up within the closure
    var num = 1;
    function c() { 
      console.log(num);
    }
    num++;
    return c;
  }
  
   n(); // 2