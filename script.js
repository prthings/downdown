const linkurl=document.querySelector("input")
const dwnbtn=document.querySelector("button")

dwnbtn.addEventListener("click", async ()=>{
    try {
        const response=await fetch(linkurl.value);
        const file=await response.blob();
        const link=document.createElement("a");
        link.href=URL.createObjectURL(file);
        link.download= new Date().getTime();
        link.click();
    } catch (error) {
        alert("Invalid Url and Unable to load the URL");
        
    }
});