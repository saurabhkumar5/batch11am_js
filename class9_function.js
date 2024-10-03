// 1. simple function
// 2. anonymous function
// 3. arrow function
// 4. self-invoking function
// 5.higher order function
// 6. callback function
// 7. generator function
// 8. callback hell
// 9. promises
// 10.inner/outer function
// 11. closure function
// 12. async await function
// 13. function constructor
// 14. recursive function
// 15.lexical environment
// 16. function hosting




// 1. simple function


            // function birthday(a,b,c,d){
            //     // console.log(c[0])
            //     console.log("happy birthday",a,b,c,d);
            // }
          
            //  birthday("iphone 6",20000,["wife","child"],true); //karan
            //  birthday("iphone 10",50000,["father"]); //arjun
            //  birthday("mackbook",100000,["single"]); //thakur


            //  function table(){
            //     for(let i = 0; i<=10; i++){
            //         console.log(i*2);
            //     }
            //  }

            //  table();
            //  table();


            // function table(x){
            //     for(let i = 0; i<=10; i++){
            //         console.log(i*x);
            //     }
            //  }

            //  table(83);
            //  table(5)



            // function evenValue(a){
            //           if(a%2==0){
            //             console.log("even value",a)
            //           }
            //           else{
            //             console.log("odd value",a)
            //           }
            // }
            
            // evenValue(3215696521)
             


          //   function marriage(a){

          //       console.log("happy marriage",a)

          //       return a

          //   }

          //  const z = marriage("clock");
          //  console.log(z)



      //    function add(a,b){
      //     console.log(a+b)

      //     return a+b
      //    }

      // const z  = add(10,20)
      //   if(z%2==0){
      //     console.log("its even number")
      //   }else{
      //     console.log("its odd number")
      //   }

      //   for(let i = 0; i<z; i++){
      //     console.log(i)
      //   }

           
      // 2. anonymous function
           
              //  const momo  = function (){
              //       console.log("hello")
              //       return "welcome"
              //     }
              //    const a  = momo()
              //    console.log(a)
                 

// 3. arrow function

          // const a =  ()=>{
          //     console.log("hello")
          //    }

          //    a();
                
                

            //  const z  = ()=>{
            //       console.log("welcome");
            //       return "helllo"
            //     }
            //   const a  = z()
            //   console.log(a)


            //  const a  = ()=>console.log("hello");
            //          a();


            //  const a = ()=>"hello"
            //      console.log(a())
            //  const z = a();
            //    console.log(z);



              //  const a = (a)=>a*10;
              //        const b  = a(10);
              //        console.log(b)


                // const a  = x=>x*x;
                //       const b = a(10,20)
                //       console.log(b)






 // 4. self-invoking function
 
 
            // (
            //   function momo(){
            //     console.log("hellooo")
            //   }
            // )()

            // (
            //   function (){
            //     console.log("hellooo")
            //   }
            // )()


            // (
            //   (a)=>{
            //     console.log("hellooo",a)
            //   }
            // )(10)


            // let a = function dosa(){
            //     console.log("manali")
            // };

            //  a();
// 4. callback function

    //    function momo(a){
    //     // console.log(a)
    //     // dosa()
            
    //        console.log("kullu")
    //        a()
    //    }

    //    function dosa(){
    //     console.log("i love dosa")
    //  }
        
    //    momo(dosa)



      //   function hola(x,y){
      //     console.log(x)
      //     console.log(y)
      //     y()

      //     console.log("hello")
      //   }
      
      //  hola(123,()=>console.log("kullu"));