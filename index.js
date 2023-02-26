function following(){
    document.querySelector('.btn-follow').innerHTML = "Following";
}

const modal = document.querySelector(".modal-wrapper"),
    overlay = document.querySelector(".overlay");

const openModal = () =>{
    modal.classList.add("active-modal");
    overlay.classList.add("overlay-active");
    
};
const closeModal = ()=>{
    modal.classList.remove("active-modal");
    overlay.classList.remove("overlay-active");
};