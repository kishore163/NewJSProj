const prompt =require("prompt-sync")();

const SYMBOLS={
    A:2,
    B:4,
    C:3,
    D:7
};

const SYMBOLS_AMOUNT={
    A:5,
    B:4,
    C:2,
    D:1
};

const ROWS=3;
const COLS=3;

const spin=()=>{
    const symbolToUse=[];
    for(const[symb,count] of Object.entries(SYMBOLS)){
        for(let i=0;i<count;i++){
            symbolToUse.push(symb);
        }
    }
    const reels=[[],[],[]];
    for(let i=0;i<ROWS;i++){
        const sybtoAppend=[...symbolToUse];
        for(let j=0;j<COLS;j++){
            const randomIndex=Math.floor(Math.random()*symbolToUse.length);
            const selectedSymbol=sybtoAppend[randomIndex];
            reels[i].push(selectedSymbol);
            sybtoAppend.splice(randomIndex,1)
        }

    }
    return reels;

}




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

const transpose=(array)=>{
    const NewArr=[];
    for(let i=0;i<ROWS;i++){
        let rows=[];
        for(let j=0;j<COLS;j++){
            rows.push(array[j][i]);
        }
        NewArr.push(rows);
    }
    return NewArr;
}

const rowsToPrint=(array)=>{
    
    for(const row of array){
        let rowstr="";
        for( let [ind,colele] of row.entries()){
            rowstr+=colele
            if (ind !=ROWS.length-1){
                rowstr+=" | "
            }
        }
        console.log(rowstr);
    }
}

let depositAmount=deposit();
const numberofLines=getnumberofLines();
const userBet= getBet(depositAmount,numberofLines);
const reels=spin();
const transposeArr=transpose(reels);
console.log(reels);
console.log(transposeArr);
const printRows=rowsToPrint(transposeArr);
