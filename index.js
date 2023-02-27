let followBtn = document.querySelector(".btn-follow");
const innerTxt = document.querySelector('.btn-follow').innerHTML;

let isFollowed = true;
followBtn.addEventListener('click', ()=>{
    if(isFollowed){
        followBtn.innerHTML = "Following";
        isFollowed = false;
    }
    else{
        followBtn.innerHTML = innerTxt;
        isFollowed = true;
    }
    
});

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

let copyText = document.querySelector(".copy-box");
document.querySelector(".copy-btn").addEventListener('click',() => {
    let input = document.querySelector('.text');
    input.select();
    document.execCommand('copy');
    copyText.classList.add("active-pop");
    window.getSelection().removeAllRanges();

    setTimeout( () =>{
        copyText.classList.remove("active-pop");
    }, 2500);
});