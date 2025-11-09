const getUser = (input: string | null) =>{
    if(input){
        console.log(`From database : ${input}`)
    }else{
        console.log(`From db : All User`)
    }
}

getUser(null)


// unknown 

const discountCalculator = (input: unknown)=>{
    if(typeof input === "number"){
        const discountedPrice = input*0.1
        console.log(discountedPrice)
    }else if(typeof input === "string"){
        const [discountedPrice] = input.split(' ');
        console.log(Number(discountedPrice) * 0.1)    
    }else {
        console.log(`wrong input`)
    }
}  
// discountCalculator(100)
// discountCalculator(`100 Taka`)
// discountCalculator(null)


const throwError = (msg : string): never => {
    throw new Error(msg)
}

throwError("error...")