// const arr = ["apple","samsung","lava"];

// arr.cart(()=>{
//     arr.proceed(()=>{
//         arr.buy(()=>{
//             arr.payment(()=>{
//                 console.log("your payment is successfullu")
//             })
//         })
//     })
// })

// callback hell



                //   const myPromise  = new Promise((resolve,reject)=>{
                        
                //         const success = true;
                //         if(success){
                //             resolve('added in cart')
                //         }else{
                //             reject("promise failed")
                //         }
                         
                //      })

                //      myPromise
                //      .then((value)=>{
                //              if(value=="added in cart"){
                //                 return "cart success"
                //              }else{
                //                 console.log("not added something network issue")
                //              }
                             
                //      })
                //      .then((data)=>{
                //         if(data=="cart success"){
                //             return ""
                //         }
                         
                //      })
                //      .then((a)=>{
                //         // if(a=="procced"){
                //             console.log("payment successfully")
                //         // }
                            
                //      })
                //      .catch((err)=>{
                //         console.log(err)
                //      })

                // const api = "https://jsonplaceholder.typicode.com/users";

                //             fetch(api)
                //              .then((data)=>{
                //                     return data.json()
                //              })
                //              .then((value)=>{
                //                   console.log(value)
                //              })
                //              .catch((err)=>{
                //                 console.log(err)
                //              })


            const api = "https://jsonplaceholder.typicode.com/users";

             async  function momo(){
                         const value = await fetch(api)
                         const data  = await value.json()
                         console.log(data)
               }
               momo()

