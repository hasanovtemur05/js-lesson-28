let btn = document.getElementById("btn")
btn.addEventListener("click", function(event){
    event.preventDefault()
    let width = document.getElementById("width").value
    let height = document.getElementById("height").value
    let border_radius = document.getElementById("border_raduies").value
    let bg_color = document.getElementById("bg_color").value
    let result = document.getElementById("result")
    result.style.width = width + "px"
    result.style.height = height + "px"
    result.style.borderRadius = border_radius + "px"
    result.style.backgroundColor = bg_color
})