var ob1={
    "name":"Gaurav",
    "age":21,
    "college":"GEU"
  }
  
  var ob2={};
  
  for(var k in ob1)
  {
    console.log("In Object1 key is "+ k + " and value is "+ ob1[k]);
  }
  
  function copyob(o1,o2){
    for( var k in o1)
    {
      o2[k]=o1[k]
    }
  }
  
  copyob(ob1,ob2)
  
  for(var k in ob2)
  {
    console.log("In Object2 key is "+ k + " and value is "+ ob2[k]);
  }