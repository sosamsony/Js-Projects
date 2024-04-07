const notifications = document.querySelector(".notifications"),
buttons = document.querySelectorAll(".buttons .btn"),
crossbtn = document.querySelector(".cross")
const toastDetails = {
    timer: 5000,
    success:{
        icon: 'fa-circle-check',
        text: 'Success: This is a success toast'
    },
    error:{
        icon: 'fa-circle-xmark',
        text: 'Error: This is a error toast'
    },
    warning:{
        icon: 'fa-triangle-exclamation',
        text: 'Warning: This is a warning toast'
    },
    info:{
        icon: 'fa-circle-info',
        text: 'Info: This is a information toast'
    }
}
const removeToast = (toast) => {
    toast.classList.add("hide");
    if (toast.timeoutId) clearTimeout(toast.timeoutId)
    setTimeout(() => toast.remove(), 500);
}
const createToast = (id) => {
    const {icon, text} = toastDetails[id];
    const toast = document.createElement("li");
    toast.className = `toast ${id}`;
    toast.innerHTML = `<div class="column">
                        <i class="fa-solid ${icon}"></i>
                        <span>${text}</span>
                    </div>
                    <i class="fa-solid fa-xmark" onClick="removeToast(this.parentElement)"></i>`
    notifications.appendChild(toast)
    toast.timeoutId = setTimeout(() => {
        removeToast(toast)
    }, toastDetails.timer);
}
buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id))
});