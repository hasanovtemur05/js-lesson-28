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




function countWords() {
    const textInput = document.getElementById("textInput").value;
    const wordsArray = textInput.trim().split(/\s+/);
    const wordCount = wordsArray.filter(word => word !== "").length;
    document.getElementById("wordCount").innerText = wordCount;
}




let btn_2 = document.getElementById("btn_2");
btn_2.addEventListener("click", function() {
    let input = document.getElementById("int").value;
    let text = document.getElementById("text").value;
    if (input.length > 0) {
        if (text.split(" ").includes(input)) {
            alert("true")
        } else {
            alert("false")
        }
    } 
});




document.getElementById('fileInput').addEventListener('change', function() {
    let file = this.files[0];
    if (file) {
        let fileSizeKB = (file.size / 1024).toFixed(2); 
        document.getElementById('fileSize').innerText = `File size: ${fileSizeKB} KB`;
    } else {
        document.getElementById('fileSize').innerText = 'No file selected';
    }
});

