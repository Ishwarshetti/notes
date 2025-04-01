const notes_cont=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");
let img_3=document.querySelector(".img-3");


function shownotes()
{
    notes_cont.innerHTML=localStorage.getItem("notes");
}
shownotes();
function updateStorage(){

    localStorage.setItem("notes",notes_cont.innerHTML);

}

createBtn.addEventListener("click",()=>{

    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    img.className="img-3"
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
        img.src="img3.jpg";
        notes_cont.appendChild(inputBox).appendChild(img);

    
})

notes_cont.addEventListener("click",function(e){

    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==="P"){
        allnotes=document.querySelectorAll(".input-box");
        allnotes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }rm -rf .git

})


// notes_cont.addEventListener("click", (e) => {
//     if (e.target.classList.contains("img-3")) {
//         e.target.parentElement.remove();
//     }
// });

