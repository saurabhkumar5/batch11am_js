

// const api  = [{
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {},
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {}
//     },
//     {
//     "id": 2,
//     "name": "Ervin Howell",
//     "username": "Antonette",
//     "email": "Shanna@melissa.tv",
//     "address": {
//     "street": "Victor Plains",
//     "suite": "Suite 879",
//     "city": "Wisokyburgh",
//     "zipcode": "90566-7771",
//     "geo": {
//     "lat": "-43.9509",
//     "lng": "-34.4618"
//     }
//     },
//     "phone": "010-692-6593 x09125",
//     "website": "anastasia.net",
//     "company": {
//     "name": "Deckow-Crist",
//     "catchPhrase": "Proactive didactic contingency",
//     "bs": "synergize scalable supply-chains"
//     }
//     },
// ]


//        api.map((a)=>{
//                 console.log(a.name)
//        })

        //  json => javascript object notation


        https://jsonplaceholder.typicode.com/users

         
             fetch(' https://jsonplaceholder.typicode.com/users')
                 .then((value)=>{
                       
                    return value.json()
                 })
                 .then((data)=>{
                    //    console.log(data)
                     data.map((value,a)=>{
                           console.log("name",value.name,"email",value.email)
                           console.log(a)
                     })
                 })