
// const box = document.querySelector(".box");

// const animateElement = (element, duration, distance)=>{
//     const frame = (duration/1000)*60;
//     const dalta = distance /frame;

//     let currentX = element.getBoundingClientRect().x;
//     const maxX = currentX + distance;

//     const step =() => {
//         currentX += delta;
//         animateElement.style.transform = `translateX(${currentX}px) `;
//         if (currentX < maxX){
//             requestAnimationFrame(step);
//         }
//     }
//     requestAnimationFrame(step);
//     }



// const loadImage = (callback) => {
//     const image = new Image();
//     image.src = src;
//     image.addEventListener("load", () => {});
//     image.addEventListener("error", () => {});
// };

// const src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.depositphotos.com%2Fstock-photos%2F%25D0%25B3%25D1%2580%25D0%25B0%25D1%2584%25D1%2584%25D0%25B8%25D1%2582%25D0%25B8.html&psig=AOvVaw29itqx6zfzg1rjG3li_Nv4&ust=1667413062225000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCLCUw-vLjfsCFQAAAAAdAAAAABAE"

// const loadImage = (src) => {
//     return new Promise ((resolv, reject) => {
//         const image = new Image(); 
//         image.src = src;
//         image.addEventListener("load", () => {});
//     })
// }