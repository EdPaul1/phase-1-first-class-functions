function receivesAFunction(spy){
    console.log("Spy called");
    spy();
}
function returnsANamedFunction(){
    return (function returned(){
        console.log('This is named');
    })
}
function returnsAnAnonymousFunction(){
    return (function(){
        console.log("This is not named");
    })
}