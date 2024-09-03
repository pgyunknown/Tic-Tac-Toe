const boxes=document.querySelectorAll('.box');
let resetB=document.querySelector('.reset-b');

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

const winner= ()=>{
  for (let pattern of winPatterns){
    console.log(pattern[0],pattern[1],pattern[2]);
    console.log(boxes[pattern[0]].innerText,
              boxes[pattern[1]].innerText,
              boxes[pattern[2]].innerText);

    let ps1=boxes[pattern[0]].innerText;
    let ps2=boxes[pattern[1]].innerText;
    let ps3=boxes[pattern[2]].innerText;
    
    if(ps1!='' && ps3!='' && ps3!='' )
  }
}