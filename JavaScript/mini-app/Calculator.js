//계산기 - 객체 
const calculator = {
  plus : function(a, b){
      return a + b;
  },
  minus : function(a, b){
      return a -b;
  },
  times : function(a, b){
      return a * b;
  },
  divide : function(a, b){
      return a / b;
  },
  power : function(a, b){
      return a ** b;
  }
}
//사용법 객체사용법과 동일 a,b에 원하는 값 대입.
calculator.plus(10,2);  //12
calculator.divide(10,2);  //5

