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
  for pattern of winPatterns=
}