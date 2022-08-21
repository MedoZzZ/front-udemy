const APILink=" http://localhost:3000/courses";
const searchAPI=" http://localhost:3000/courses?q=";
const cateAPI="http://localhost:3000/cate";
const course_Cont=document.querySelector("section .courses .videos ");
const searchBar=document.querySelector("nav .searchbar input");
const tab=document.querySelector("section .fisrt .cat .btn");
const cate_cont=document.querySelector("section .second .row");
getCourses(APILink);
getCate(cateAPI);
async function getCourses(APILink) {
    const res = await fetch(APILink);
    const post= await res.json();
    console.log(post);
    Show(post);
}
async function getCate(cateAPI) {
    const res = await fetch(cateAPI);
    const post= await res.json();
    console.log(post);
    ShowCate(post);
}
//show Cate
function ShowCate(course){
    cate_cont.innerHTML="";
    course.forEach(course => {
        cate_cont.innerHTML+=`
        <div class="col-md-4 col-lg-3 "> 
        <div class="card border-0 ">
           <a href="#" class="text-decoration-none text-dark  "> <img src="${course.image}" alt="${course.title}">
           <p class="font-weight-bold">${course.title}</p>
        </a>
        </div>
    </div>   
    `
    });
}
// show data
function Show(course){
    course_Cont.innerHTML="";
    console.log(typeof(course));
    for (const property in course) {
        console.log(`${property}: ${course[property]}`);
      }
      
    course.forEach(course => {
        course_Cont.innerHTML+=`
        
        <article>
        <a href="#">
            <img src="${course.image}" alt="${course.title}">
            <h4>${course.title}</h4>
            <p>${course.author}</p>
            <div class="rate">
                ${course.rate}<i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
            </div>
            <h4>${course.price}</h4>
            <div class="price">${course.before}</div>
        </a>
    </article>`;
    
});
    
}
//search
searchBar.addEventListener("input",e=> {
    const value=e.target.value.toLowerCase();
    console.log(value);
    getCourses(searchAPI+value)
});


//tag
function filterSelection(x){
    console.log(x);
    x=x.toLowerCase();
    console.log(x);
    getCourses(searchAPI+x);
}
