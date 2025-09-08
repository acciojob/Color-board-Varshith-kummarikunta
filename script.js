const container = document.querySelector(".container")


        for(let i = 1;i <= 800; i++){
           createSquare()
        }

        function createSquare(){
            const square = document.createElement("div")
            square.classList.add("square");
            square.addEventListener("mouseover",addRandomColor)
            container.appendChild(square)
        }

        function addRandomColor(e){
            const square = e.target
            const randomColor = "#" + Math.floor(Math.random() *255 *255 *255).toString(16).padStart(6,"0")
            console.log(randomColor,randomColor.length,'random coler')
            square.style.backgroundColor = randomColor

        square.addEventListener("mouseleave", () => { setTimeout(()=> e.target.style.backgroundColor = "",1000)
        })
    }