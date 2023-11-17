// const obj1={1:"1",2:"2",3:"3"}
// const obj2={4:"4",5:"5",6:"6"}

// const obj=Object.assign(obj1,obj2)
// console.log(obj[2]);

// const arrofobject=[
//     {
//         command:"gzip -k filename",
//         work:"compress the file",
//         time:"12:50"
//     },
//     {
//         command:"tar -czf zipfilename filename",
//         work:"compress the folder",
//         time:"12:51"
//     },
//     {
//         command:"tar -xzf filename",
//         work:"uncompress the folder",
//         time:"12:52"
//     },
// ]

// arrofobject.forEach((item)=>{
//     console.log(item.command)
// })

const arr=[
    {
        course:"python",
        price:"1000"
    },
    {
        course:"java",
        price:"2000"
    },
    {
        course:"linux",
        price:"5000"
    }
]
let instail=0
let total=arr.map((item)=>item.price).reduce((pre,cur)=> Number(pre)+Number(cur),instail)
console.log(total)