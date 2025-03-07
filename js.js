const prompt =require("prompt-sync")();

const deposit=()=>{
    
    const checkamount= prompt("Enter the deposit Amount: ");
    const amount=parseFloat(checkamount);
    if(isNaN(amount)|| amount<=0){
        console.log("Invalid amount , enter a positive number");
    }
    else{
        return amount;
    }
    
}
const getnumberofLines=()=>{
    
    const lines= prompt("Enter the number of lines between 1-3: ");
    const numberofLines=parseFloat(lines);
    if(isNaN(numberofLines)|| numberofLines<=0 || numberofLines>3){
        console.log("Invalid linesr");
    }
    else{
        return numberofLines;
    }
    
}

const getBet=(balance, numberofLines)=>{
    const getuserBet=prompt("Enter the bet amount: ");
    const userBet=parseFloat(getuserBet);
    if(userBet>balance || userBet<=0||userBet>balance/numberofLines){
        console.log("Invalid bet amount");
    }
    else{
        return userBet;
    }

}

let depositAmount=deposit();
const numberofLines=getnumberofLines();
const userBet= getBet(depositAmount,numberofLines);