
const rect = document.querySelector("#center");
const throttleFunction = (func, delay) => {
 
            
            let prev = 0;
            return (...args) => {
                let now = new Date().getTime();
 
            
                if (now - prev > delay) {
                    prev = now;
 
                    
                    return func(...args);
                  }
             } 
            }
        rect.addEventListener("mousemove",
            throttleFunction((details) => {
            let Cdiv = document.createElement("div");
            Cdiv.classList.add("imageDiv")
            Cdiv.style.left = details.clientX + 'px';
            Cdiv.style.top = details.clientY + 'px';

            var img = document.createElement("img");
            img.setAttribute("src" , "https://images.unsplash.com/photo-1698949654875-544ecfef27ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D")
            Cdiv.appendChild(img)

            document.body.appendChild(Cdiv)

            gsap.to(img,{
                y: "0",
                ease: Power1,
                duration: .2
            })
            setTimeout(()=>{
                Cdiv.remove()
            },2000)
            }, 400));
