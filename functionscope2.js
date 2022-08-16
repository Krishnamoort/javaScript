//exampe-1
function scope(print) {

    var insideIf;

    if (print) {
        insideIf = '12' + 'hours';
    }
    console.log(insideIf);
}
// prints '12' - no error
scope(true);


//example-2
 function scope1(){
     var top = "top";
     bottom = "bottom";
     console.log(bottom);
      
    var bottom;
    
     }
    scope1(); 

    function scope3(print1){
        let insideMe;
        if(print1){
          insideMe = 'Krishna';
        }

        
        
        console.log(insideMe);
         }
         scope3(true); // prints ''
        //In this example, nothing is logged to the console because the insideIf variable is 
       // available only inside the if statement bloc