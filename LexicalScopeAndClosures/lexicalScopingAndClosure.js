// function outer(){
//     let username = "Shikhar"
//     function inner(){
//         console.log(`Inner function username ${username}`);
//     }
//     inner()
// }

// outer()

// Lexical Scoping - If there is nesting function . Inner function will have access
//                   to outer function variable
// console.log(`This is outer username ${username}`);

function outer(){
    let username = "Shikhar"
    function inner(){
        console.log(`Inner function username ${username}`);
    }
    return inner;
}

const closure = outer()
closure()
// Closure  - when outer function return inner function along with lexical scope is known as closures
