// const a=document.getElementById('para')
// let btn=document.getElementById('btn')


// btn.addEventListener('click',clickfunction);
// function clickfunction(){
//     document.getElementById('demo').innerHTML='clicked on button'
// }


// btn.addEventListener('click',()=>{
//         document.getElementById('demo').innerHTML='clicked on button inside'
//     });


// a.addEventListener('mouseout',()=>{
//     alert('Mouse out')
// })

// btn.addEventListener('mouseout',()=>{
// btn.style.backgroundColor='red';
// })

// btn.addEventListener('mouseover',()=>{
//     btn.style.backgroundColor='yellow';

// })



// extra
// document.addEventListener('mouseover',function(e){
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.matches('#btn'));
//     if(e.target.matches('#btn')){
//         console.log('mouseover');
//         return;
//     }
//     if(e.target.matches('.para1')){
//         console.log('hover effect');
//         return;
//     }
// })




// var para = document.getElementById("para");

//         function handleHover(event) {
//             if (event.type === "mouseover") {
//                 console.log("Mouse over button");
//                 // Add code for mouseover event
//             } else if (event.type === "mouseout") {
//                 console.log("Mouse out of button");
//                 // Add code for mouseout event
//             }
//         }

//         para.addEventListener("mouseover", handleHover);
//         para.addEventListener("mouseout", handleHover);




const para=document.getElementById('para');
['mouseover','mouseout'].forEach(type=>{
    if(type==='mouseover'){
        para.addEventListener(type,()=>console.log('mouse over'))
    }
    else if(type==='mouseout'){
        para.addEventListener(type,()=>console.log('mouse out'))
    }
})

