// 1. for loop
// 2. while loop
// 3. do while loop

// syntax of for loop

    //  for(initilize or starting value; condition; increment/decrement){
    //     ///code
    //  }

    //    starting value = 0
    //    ending value = 10

    0
    // 0+1 = 1
    // 1+1 = 2
    // 2+1 = 3
    // 3+1 = 4
    // 4+1 = 5
    // 5+1 = 6

    //  i++ = i+1

        // let i = 0;
        //     i = 1
        //     i = 2

        //  for(let i = 0; i<=10; i++){ 
                
        //     console.log(i*4);
            
        //  }
        //  0*2 = 0
        //  1*2 = 2
        //  2*2 = 4
        //  3*2 = 6
        //  4*2 = 8

        //  10*2 = 20


        //   for(let i = 0; i<=30; i = i+3){ 
                
        //     console.log(i);
            
        //  }

        //   for(let i = 0; i<=20; i++){ 
                
        //     if(i%2==0){
        //         console.log(i)
        //     }
            
        //  }


        // 3 to 36 print odd value

        // 3, 4 , 5 6 7 8 36

        // 1. print 3 to 36
        // 2. only odd

        // for(let i = 3; i<=36; i++){
        //     if(i%2==1){
        //         console.log(i)
        //     }
        // }

        // for(let i = 3; i<=36; i = i+2){
        //         console.log(i)  
        // }


        // 1 5 9 13 17 21 25

        // for(let i=1;i<=25;i=i+4)
        //     {
        //         console.log(i);
        //     }


        // 10 to 2

        // for(let i=10;i>=2;i--)
        //     {
        //         console.log(i);
        //     }



        let a = ["kullu","manali","shimla","jammu","kashmir","mohali","palamgoa","palampur","kerala"];
        // console.log(a[0])
        // console.log(a[1])
        // console.log(a[2])
        // console.log(a[3])
        // console.log(a[4])

        for(let x = 0; x<a.length; x++){
              console.log(a[x])
        }