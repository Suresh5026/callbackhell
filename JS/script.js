const div = document.createElement("div");
div.className = "display"
let timer = 10;
let text = "Happy Independence Day"
console.log(div);
setTimeout(() =>{
    div.innerHTML = timer--;
    document.body.appendChild(div);
    setTimeout(()=>{
        div.innerHTML = timer--;  
        document.body.appendChild(div);
        setTimeout(()=>{
            div.innerHTML = timer--;  
            document.body.appendChild(div);
            setTimeout(()=>{
                div.innerHTML = timer--;  
                document.body.appendChild(div);
                setTimeout(()=>{
                    div.innerHTML = timer--;  
                    document.body.appendChild(div);
                    setTimeout(()=>{
                        div.innerHTML = timer--;  
                        document.body.appendChild(div);
                        setTimeout(()=>{
                            div.innerHTML = timer--;  
                            document.body.appendChild(div);
                            setTimeout(()=>{
                                div.innerHTML = timer--;  
                                document.body.appendChild(div);
                                setTimeout(()=>{
                                    div.innerHTML = timer--;  
                                    document.body.appendChild(div);
                                    setTimeout(()=>{
                                        div.innerHTML = timer--;  
                                        document.body.appendChild(div);
                                        setTimeout(()=>{
                                            div.innerHTML = text;  
                                            document.body.appendChild(div);
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000)
        },1000)
    },1000)

},1000)

