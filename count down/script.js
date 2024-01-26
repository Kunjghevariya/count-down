const enddate = "1 Jan 2024 00:2";

document.querySelector(".date-1").innerText = "1 Jan 2024 00:00";

let date = document.querySelectorAll(".d");


const clock = () =>{
    const end = new Date(enddate);
    const now = new Date();
    const diff = (end - now)/1000;
    const day = diff/3600/24;
    const hours = (diff/3600)%24;
    const miniute = (diff/60)%60;
    const second = (diff%60)


    date[0].value = Math.floor(day);
    date[1].value = Math.floor(hours);
    date[2].value = Math.floor(miniute);
    date[3].value = Math.floor(second);
  
    if(hours <= 0 && second <= 0 && miniute <=0){

        document.querySelector(".clock").style.visibility = "hidden";
        document.querySelector(".date-2").innerText =  "2024";
        
    }else{
        document.querySelector(".i1").style.visibility = "hidden";
        

    
    }
    if(second>0){
        return;
    }

    

}
clock();

setInterval(
    () =>{
        clock();
    },1000
)