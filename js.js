const prompt =require("prompt-sync")();

const deposit=()=>{
    
    const amount= prompt("Enter the deposit Amount: ");
    console.log(typeof amount);
}

deposit();