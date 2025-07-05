document.addEventListener("DOMContentLoaded",()=>{
     const fadeElems = document.querySelectorAll('.fade');
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('show');
    }
    });
    }, {
    rootMargin: "-10px 0px", // ←ここを追加！
    });


    fadeElems.forEach(elem => observer.observe(elem));
})