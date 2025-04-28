let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const result = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
choices.forEach((choice)=>{

    const showWinner=(userWin , userchoice , compchoice)=>{
  if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    result.style.backgroundColor="green";
    result.innerText=`You Won! your ${userchoice} beats ${compchoice}`;
  }
  else{
    compScore++;
    compScorePara.innerText=compScore;
    result.style.backgroundColor="red";
    result.innerText=`You Loss!  ${compchoice} beats your ${userchoice}`;
  }
    }

    const drawGame=()=>{
        result.innerText="Draw";
        result.style.backgroundColor="rgb(46, 46, 55)";
    }
    
    const playGame=(userchoice)=>{
        //generating computer choice
        let randomIndx=Math.floor(Math.random()*3);
        const options=["rock","paper","scissor"];
        let compchoice=options[randomIndx];

        if(userchoice === compchoice){
            drawGame();
        }else{
            let userWin=true;
            if(userchoice==="rock"){
                userWin= compchoice === "paper"? false : true;
            }
            else if(userchoice==="paper"){
                userWin=compchoice==="scissor"? false : true;
            }
            else{
                userWin=compchoice==="rock"?false : true;
            }

            showWinner(userWin , userchoice , compchoice);
        }
    }    
    
    
    
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        console.log("your choice ",userchoice);
        playGame(userchoice);
    })
})