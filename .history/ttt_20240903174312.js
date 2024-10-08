let boxes=document.querySelectorAll('.box');
let resetB=document.querySelector('.reset-b');
let newB=document.querySelector('.new-b');
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector('.msg');

const disableB=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}

const enableB=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}

let turnX=true;
const winPatterns=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
];

boxes.forEach((box)=>{
  box.addEventListener('click',()=>{
  if(turnX){
    box.innerText='X';
    turnX=false;
    box.disabled=true;
  }else{  
    box.innerText='O';
    turnX=true;
    box.disabled=true;
  }
  winner()
  });
});


const showWinner=(winner)=>{
  msg.innerText=`Congrats winner: ${winner}`;
  msgContainer.classList.remove('hide');
  disableB();
};
const winner= ()=>{
  for (let pattern of winPatterns){
    let ps1=boxes[pattern[0]].innerText;
    let ps2=boxes[pattern[1]].innerText;
    let ps3=boxes[pattern[2]].innerText;
    
    if(ps1!='' && ps3!='' && ps3!='' ){
      if(ps1===ps2 && ps2===ps3){
        console.log("Winner",ps1);
        showWinner(ps1);
      }
    }
  }
}

