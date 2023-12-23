
{
    let a = 10
    const b = 20
    var c = 30

} // variables are declared in scopes so can be access outside 




    // console.log(a);
    // console.log(b);
    // console.log(c);


    function outer(){
        let username = "Amit"
        function inner(){
            let website  = "tube"
            console.log(`Username is ${username}`); // innser function can access outer function  variables 
        }
        console.log(`Website is ${website}`);
        inner();
    }

    outer();

    {
        let username = "Amit Sigh"
        {
            let usernametwo = "Alka mam"
            console.log(`Inside block scope  ${username}`);
        }
        console.log(usernametwo);
    }
    console.log(functionOne());
    function functionOne(){   // way of defining function
        return "From function one";
    }
    // console.log(functionTwo());  It can not be accesed because here is functionTwo expression can be used before declaration
    const functionTwo = function(){ // way of defining function sometimes known as expression
        return "From function one"
    }