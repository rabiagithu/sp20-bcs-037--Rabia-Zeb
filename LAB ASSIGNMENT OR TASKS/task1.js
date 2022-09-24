const n=(name)=> {
    console.log(n);
}
console.log("My Name");
n("Rabia");


console.log("-----");

const seperate=(...args)=>{
    let s=args.length;
    console.log("total args =" +s);
    console.log(args);

    let even=[];
    let odd=[];
     for(let i=0;i<args.length;i++){
        if(args[i]%2==0){
            even.push(args[i]);
        }
        else{
            odd.push(args[i]);
        }
     }

     console.log("-----");
     console.log("even args");
     console.log(even);
     console.log("-----");
     console.log("odd args");
     console.log("----");
     console.log("divide even args by 2");


     let neweven = even.map(divide);
     function divide(num){
        return num/2;
     }

     console.log(neweven);
     console.log("----");
     console.log("multiplied odd args by 2");
    
     let newodd = odd.map(divide);
     function multiply(num){
        return num*2;
     }
     console.log(newodd);

     var obj={
        odd_num:odd,
        even_num:even
     }
     console.log("-----");
     console.log("object of odd and even");
     console.log(obj);
     return obj;
}

seperate(2,3,4,5,7,8,9)