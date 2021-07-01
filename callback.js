/* 
    function getName(callback) {
    //    var name = prompt('Enter your name: ')   // prompt won't work in Node
        let name = "Dan"
        callback(name)
    }

    getName((name) => console.log('Hello ' + name))  // (name) here is the 'callback function'

    //which is like doing:
    getName(function(name){
        console.log('Hello', name)
    })
    // OR
    getName((name) => {
        console.log('Hello', name)
    })

    // OR
    getName( name => console.log('Hello', name))   // don't need parentheses around name because only one parameter

 */


//example - if steps are synchronous
function makeBurger() {
    let beef = getBeef()
    let patty = cookBeef(beef)
    let buns = getBuns()
    let burger = putBeefBetweenBuns(buns,patty)
    return burger
}

let burger = makeBurger()
serve(burger)

//with callbacks *****all these nested callbacks -- CALLBACK HELL -- not good
function makeBurger(nextStep) {
    getBeef( beef => {
        cookBeef( (beef,patty) => {
            // ******MISSING THINGS HERE
        })
    }
}

let burger = makeBurger()
serve(burger)

