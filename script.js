let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');

    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}



let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

/*ciuhdwcewuhewiufhwiufhewuifhwuifhu*/


document.querySelector('#close-btn').onclick = () =>{
    shoppingCart.classList.remove('active');
   
}

/*wiushshqwushudhqwusdhwqd*/



let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    
    navbar.classList.remove('active');
}
/*hdbedbdbie login*/


document.querySelector('#close-btn1').onclick = () =>{
    loginForm.classList.remove('active');
}



/*jhejdhe3dhed*/


let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');

}

document.querySelector('#close-btn2').onclick = () =>{
    navbar.classList.remove('active');
}
window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}



let left = document.getElementsByClassName('fa-angle-double-left')[0];
let right = document.getElementsByClassName('fa-angle-double-right')[0];
let product_slider = document.getElementsByClassName('product_slider')[0];

left.addEventListener('click', ()=> {
    product_slider.scrollLeft -=140;
})
right.addEventListener('click', ()=> {
    product_slider.scrollLeft +=140;
})


let price = document.getElementById('price');
let count = document.getElementById('count');

Array.from(document.getElementsByClassName('pup1')).forEach((ele, i)=>{
   /* console.log(ele)*/
ele.addEventListener('click', ()=>{
    price.innerText =ele.getElementsByTagName('p')[0].innerText;
    count.innerText =ele.getElementsByTagName('h5')[0].innerText;
})

})


/*part 2*/

let price2 = document.getElementById('price2');
let count2 = document.getElementById('count2');

Array.from(document.getElementsByClassName('pup2')).forEach((ele, i)=>{
   /* console.log(ele)*/
ele.addEventListener('click', ()=>{
    price2.innerText =ele.getElementsByTagName('p')[0].innerText;
    count2.innerText =ele.getElementsByTagName('h5')[0].innerText;
})

})

/*part 3*/



let price3 = document.getElementById('price3');
let count3 = document.getElementById('count3');

Array.from(document.getElementsByClassName('pup3')).forEach((ele, i)=>{
   /* console.log(ele)*/
ele.addEventListener('click', ()=>{
    price3.innerText =ele.getElementsByTagName('p')[0].innerText;
    count3.innerText =ele.getElementsByTagName('h5')[0].innerText;
})

})

/*part 44*/
let price4 = document.getElementById('price4');
let count4 = document.getElementById('count4');

Array.from(document.getElementsByClassName('pup4')).forEach((ele, i)=>{
   /* console.log(ele)*/
ele.addEventListener('click', ()=>{
    price4.innerText =ele.getElementsByTagName('p')[0].innerText;
    count4.innerText =ele.getElementsByTagName('h5')[0].innerText;
})

})


let price5 = document.getElementById('price5');
let count5 = document.getElementById('count5');

Array.from(document.getElementsByClassName('pup5')).forEach((ele, i)=>{
   /* console.log(ele)*/
ele.addEventListener('click', ()=>{
    price5.innerText =ele.getElementsByTagName('p')[0].innerText;
    count5.innerText =ele.getElementsByTagName('h5')[0].innerText;
})

})




let price6 = document.getElementById('price6');
let count6 = document.getElementById('count6');

Array.from(document.getElementsByClassName('pup6')).forEach((ele, i)=>{
   /* console.log(ele)*/
ele.addEventListener('click', ()=>{
    price6.innerText =ele.getElementsByTagName('p')[0].innerText;
    count6.innerText =ele.getElementsByTagName('h5')[0].innerText;
})

})


let price7 = document.getElementById('price7');
let count7 = document.getElementById('count7');

Array.from(document.getElementsByClassName('pup7')).forEach((ele, i)=>{
   /* console.log(ele)*/
ele.addEventListener('click', ()=>{
    price7.innerText =ele.getElementsByTagName('p')[0].innerText;
    count7.innerText =ele.getElementsByTagName('h5')[0].innerText;
})

})


let price8 = document.getElementById('price8');
let count8 = document.getElementById('count8');

Array.from(document.getElementsByClassName('pup8')).forEach((ele, i)=>{
   /* console.log(ele)*/
ele.addEventListener('click', ()=>{
    price8.innerText =ele.getElementsByTagName('p')[0].innerText;
    count8.innerText =ele.getElementsByTagName('h5')[0].innerText;
})

})


let price9 = document.getElementById('price9');
let count9 = document.getElementById('count9');

Array.from(document.getElementsByClassName('pup9')).forEach((ele, i)=>{
   /* console.log(ele)*/
ele.addEventListener('click', ()=>{
    price9.innerText =ele.getElementsByTagName('p')[0].innerText;
    count9.innerText =ele.getElementsByTagName('h5')[0].innerText;
})

})




let price10 = document.getElementById('price10');
let count10 = document.getElementById('count10');

Array.from(document.getElementsByClassName('pup10')).forEach((ele, i)=>{
   /* console.log(ele)*/
ele.addEventListener('click', ()=>{
    price10.innerText =ele.getElementsByTagName('p')[0].innerText;
    count10.innerText =ele.getElementsByTagName('h5')[0].innerText;
})

})


let price11 = document.getElementById('price11');
let count11 = document.getElementById('count11');

Array.from(document.getElementsByClassName('pup11')).forEach((ele, i)=>{
   /* console.log(ele)*/
ele.addEventListener('click', ()=>{
    price11.innerText =ele.getElementsByTagName('p')[0].innerText;
    count11.innerText =ele.getElementsByTagName('h5')[0].innerText;
})

})



let price12 = document.getElementById('price12');
let count12 = document.getElementById('count12');

Array.from(document.getElementsByClassName('pup12')).forEach((ele, i)=>{
   /* console.log(ele)*/
ele.addEventListener('click', ()=>{
    price12.innerText =ele.getElementsByTagName('p')[0].innerText;
    count12.innerText =ele.getElementsByTagName('h5')[0].innerText;
})

})


let price13 = document.getElementById('price13');
let count13 = document.getElementById('count13');

Array.from(document.getElementsByClassName('pup13')).forEach((ele, i)=>{
   /* console.log(ele)*/
ele.addEventListener('click', ()=>{
    price13.innerText =ele.getElementsByTagName('p')[0].innerText;
    count13.innerText =ele.getElementsByTagName('h5')[0].innerText;
})

})


let price14 = document.getElementById('price14');
let count14 = document.getElementById('count14');

Array.from(document.getElementsByClassName('pup14')).forEach((ele, i)=>{
   /* console.log(ele)*/
ele.addEventListener('click', ()=>{
    price14.innerText =ele.getElementsByTagName('p')[0].innerText;
    count14.innerText =ele.getElementsByTagName('h5')[0].innerText;
})

})





let reply = document.getElementsByClassName('fa-reply')[0];
let share = document.getElementsByClassName('fa-share')[0];
let product_slider2 = document.getElementsByClassName('product_slider2')[0];

reply.addEventListener('click', ()=> {
    product_slider2.scrollLeft -=140;
})
share.addEventListener('click', ()=> {
    product_slider2.scrollLeft +=140;
})









let price15 = document.getElementById('price15');
let count15 = document.getElementById('count15');

Array.from(document.getElementsByClassName('pup15')).forEach((ele, i)=>{
   /* console.log(ele)*/
ele.addEventListener('click', ()=>{
    price15.innerText =ele.getElementsByTagName('p')[0].innerText;
    count15.innerText =ele.getElementsByTagName('h5')[0].innerText;
})

})




let price16 = document.getElementById('price16');
let count16 = document.getElementById('count16');

Array.from(document.getElementsByClassName('pup16')).forEach((ele, i)=>{
   /* console.log(ele)*/
ele.addEventListener('click', ()=>{
    price16.innerText =ele.getElementsByTagName('p')[0].innerText;
    count16.innerText =ele.getElementsByTagName('h5')[0].innerText;
})

})






let price17 = document.getElementById('price17');
let count17 = document.getElementById('count17');

Array.from(document.getElementsByClassName('pup17')).forEach((ele, i)=>{
   /* console.log(ele)*/
ele.addEventListener('click', ()=>{
    price17.innerText =ele.getElementsByTagName('p')[0].innerText;
    count17.innerText =ele.getElementsByTagName('h5')[0].innerText;
})

})




let price18 = document.getElementById('price18');
let count18 = document.getElementById('count18');

Array.from(document.getElementsByClassName('pup18')).forEach((ele, i)=>{
   /* console.log(ele)*/
ele.addEventListener('click', ()=>{
    price18.innerText =ele.getElementsByTagName('p')[0].innerText;
    count18.innerText =ele.getElementsByTagName('h5')[0].innerText;
})

})





let price19 = document.getElementById('price19');
let count19 = document.getElementById('count19');

Array.from(document.getElementsByClassName('pup19')).forEach((ele, i)=>{
   /* console.log(ele)*/
ele.addEventListener('click', ()=>{
    price19.innerText =ele.getElementsByTagName('p')[0].innerText;
    count19.innerText =ele.getElementsByTagName('h5')[0].innerText;
})

})





let price20 = document.getElementById('price20');
let count20 = document.getElementById('count20');

Array.from(document.getElementsByClassName('pup20')).forEach((ele, i)=>{
   /* console.log(ele)*/
ele.addEventListener('click', ()=>{
    price20.innerText =ele.getElementsByTagName('p')[0].innerText;
    count20.innerText =ele.getElementsByTagName('h5')[0].innerText;
})

})





"use strict";


const userId = {
    name:null,
    identity:null,
    image:null,
    massage:null,
    date:null,
}


const userComment = document.querySelector(".usercomment");
const publishBtn = document.querySelector("#publish");
const comments = document.querySelector(".comments");
const userName = document.querySelector(".user");


userComment.addEventListener("input", e => {
    if(!userComment.value){
        publishBtn.setAttribute("disabled", "disabled");
        publishBtn.classList.remove("abled");

    }else{
        publishBtn.removeAttribute("disabled");
        publishBtn.classList.add("abled")
    }

    
})


function addPost(){
    console.log("The button work!")
    if(userComment.value)return;
    userId.name = userName.value;
    if(userId.name === "Anonymous") {
        userId.identity = false;
        userId.image = "anonymous.png";
    }else{
        userId.identity = true;
        userId.image = "user_.png"
    }

    userId.message = userComment.value;
    userId.date =  new Date().toLocaleString();
    let published =
`<div class="parents">
        <img src="${userId.image}">

<div>
    <h1>${userId.name}</h1>
    <p>${userId.message}</p>
    <div class="engagements">
   <img src="like.png">

   
    </div>
    <span class="date">${userId.date}</span>

</div>
    </div>`;
    comments.innerHTML += published;
    userComment.value ="";

}



publishBtn.addEventListener("click", addPost)