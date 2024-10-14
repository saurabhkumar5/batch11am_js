
// 1. by Idname

            // const value  =  document.getElementById('heading');

            // console.log(value);

            //       const a  = document.getElementById('btn');
            //       console.log(a)

//   2. by className

        //    const a  =  document.getElementsByClassName('momo');
        //      console.log(a)

        //     const b  = document.getElementsByClassName('button')
        //         console.log(b)


//    3. byTagname

                //  const value   = document.getElementsByTagName('h1')

                //       console.log(value)

    // 4. querySelector
    
            // const header = document.querySelectorAll('h1')
              
            //     console.log(header)



            // console.log(document)
        //     console.log(window)



        // const h1 = document.querySelector('#heading')
        

        //  h1.style.backgroundColor = "red"
        //  h1.style.color = "yellow"
        //  h1.style.width = "500px"
        //  h1.style.height = "500px"
        //  h1.style.textAlign = "center"
        //  h1.innerHTML = "kulluuu"
        //  h1.classList.add("simran")

        //  console.log(h1)



        // const heading  =  document.createElement('h1');

        //     heading.innerHTML = "most welcome"
        // console.log(heading)

        //  const h1   = document.querySelector('#heading')
        //    h1.appendChild(heading)


        // const h1 = document.getElementById('heading')
        // const btn = document.getElementById('btn')
      
        //           let a = true
        //    btn.addEventListener('click',()=>{
        //         // h1.style.backgroundColor = "yellow"
        //         // h1.style.textAlign = "center"
        //         if(a){
        //              h1.style.backgroundColor = "yellow"
        //              h1.style.textAlign = "center"
        //         }else{
        //               h1.style.backgroundColor = ""
        //               h1.style.textAlign = ""
        //         }

        //         a = !a
        //    })


        const bulb  = document.getElementById('img')
        const btn = document.getElementById('btn')

          btn.addEventListener('click',()=>{

                if(bulb.src.match('off')){
                        bulb.src = './bulbon.jpg'
                }else{
                        bulb.src = './bulboff.jpg'
                }
          })