var employee1 = [
    { name:"Gaurav",   age:21, salary:15000, dob:"10 Nov 1999"    },
    { name:"Saurav",   age:24, salary:30000, dob:"29 Sept 1996"    },
    { name:"Ananya",  age:25, salary:15000, dob:"5 Aug 1995"      },
    { name:"Vijender",  age:24, salary:1000, dob:"2 October 1996"  },
    { name:"Rohan", age:27, salary:10000, dob:"8 July 1993"     },
    { name:"Rahul",  age:27, salary:800,   dob:"8 july 1993"       },
    { name:"Priyanka",  age:18, salary:999,   dob:"8 June 2002"        }
    ];
    
    
    var temp="";
    var temps=[];
    for(var i=0;i<employee1.length;i++)
    {
      if(employee1[i].salary<1000 && employee1[i].age>20){
        temp+=employee1[i].name+"&nbsp;"+employee1[i].salary+"<br>";
        temps.push(employee1[i].name);
      }
    }
    document.getElementById("abc").innerHTML=temp;
    var g="";
    for(var i=0;i<temps.length;i++)
    {
      for(var j=0;j<employee1.length;j++)
      {
        if(temps[i] == employee1[j].name){
        var ttt=employee1[j].salary*5;
        g+=employee1[j].name+"&nbsp;"+ttt+"<br>";
        employee1[j].salary=ttt;
        break;
      }
      }
      }
      document.getElementById("efg").innerHTML=g;