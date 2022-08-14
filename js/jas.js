const APILink=" http://localhost:3000/courses";
const searchAPI=" http://localhost:3000/courses?q=";
const course_Cont=document.querySelector("section .courses .videos");
const searchBar=document.querySelector("nav .searchbar input");
getCourses(APILink);

async function getCourses(APILink) {
    const res = await fetch(APILink);
    const post= await res.json();
    console.log(post);
    Show(post);
}
// show data
function Show(course){
    course_Cont.innerHTML="";
    course.forEach(course => {
        course_Cont.innerHTML+=`<article>
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