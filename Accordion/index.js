const items = document.querySelectorAll(".item")
items.forEach(item => {
    const question = item.querySelector(".question-box");
    const answer = item.querySelector(".answer");
    const icon = item.querySelector('.icon');
    question.addEventListener("click", () => {
        items.forEach(otherItem => {
            const otherAnswer = otherItem.querySelector(".answer");
            const otherIcon = otherItem.querySelector('.icon');
            if (otherItem === item) {
                answer.classList.toggle("active");
                icon.classList.toggle("fa-plus");
                icon.classList.toggle("fa-minus");
            } else {
                otherAnswer.classList.remove("active");
                otherIcon.classList.replace("fa-minus", "fa-plus");
            }
        });
        
        
    })
})