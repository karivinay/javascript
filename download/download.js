// const downloadBtn = document.querySelector(".download-btn")

// const fileLink = "https://drive.google.com/file/d/1ttutxyl6ddn_UnzryZhej0FrAx9NDW_d/view?usp=sharing";



// const initTimer = () => {
//     if(downloadBtn.classList.contains("disable-timer")) {
//         return location.href = fileLink;
//     }
//     let timer = downloadBtn.dataset.timer;
//     downloadBtn.classList.add("timer");
//     downloadBtn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
//     const initCounter = setInterval(() => {
//         if(timer > 0) {
//             timer--;
//             return downloadBtn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
//         }
//         clearInterval(initCounter);
//         location.href = fileLink;
//         downloadBtn.innerText = "Your file is downloading...";
//         setTimeout(() => {
//             downloadBtn.classList.replace("timer", "disable-timer");
//             downloadBtn.innerHTML = `<i class="fa-solid fa-download" ></i>
//                                         <span class="text">Download Files</span>`;
//         }, 3000);
//     }, 1000);
// }

// downloadBtn.addEventListener("click", initTimer);




