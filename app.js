let convertFahrToCelcius = (h) => {
    Array.isArray()
    if(typeof h == 'number') {

        let celcius = ((h-32) * (5/9));
        console.log(celcius)
        console.log("function1")
        return(celcius)
    }
    else if(typeof h =='object') {
        if (Array.isArray(h)) {
            console.log('this is an array');

            return '$(h) is not a valid number but an Array'
        } else {
            console.log('this is an object');
            output= '${JSON.stringify(h)} is not a valid number but a  $(type of h)'
            return output
        }

    

    }
       else if (typeof h =='string') {
           console.log('')
           let hNumber = Number(h);
           console.log(hNumber)
           console.log(typeof hNumber)
        if(isNaN(hNumber)) {
            console.log('this is not a number')
            return ('$(h) is not a valid number but a $(typeof h).')

        } else{
            let celsius= ((hNumber - 32) * (5/9));
            console.log(celsius *"c");
            return celcius
        }
       }
}