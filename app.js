let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const score1=document.getElementById("user-score");
const score2=document.getElementById("comp-score");
const showWinner=(userWin)=>{
    if(userWin)
       {
        console.log("You Win");
        userScore++;
        score1.innerText=`${userScore}`;
         
       }
    else
    {
        console.log("You Lose");
        compScore++;
        score2.innerText=`${compScore}`;

    }
}



const DrawGame=()=>{
    console.log("Game was Draw");
}
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
   const indx= Math.floor(Math.random()*3);
  return options[indx];

}
const playGame=(userChoice)=>{

    console.log("Your choice  is ",userChoice);
    const comChoice=genCompChoice();
    console.log("comp choice  is ",comChoice);
    if(userChoice===comChoice)
    {
        DrawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin=comChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            userWin=comChoice==="scissor"?false:true;
        }
        else{
            userWin=comChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }


}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)
    })
})