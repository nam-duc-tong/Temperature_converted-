const celciusInput = document.getElementById('celcius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

const inputs = document.getElementsByClassName("input");
for(let i = 0; i < inputs.length; i++){
    let input = inputs[i];
    input.addEventListener("input",function(e){
        let value = parseFloat(e.target.value);
        // console.log(e.target.name + ":" + value);
        switch (e.target.name){
            case "celcius":
                // console.log("c");
                fahrenheitInput.value = (value*1.8) +32;
                kelvinInput.value = value + 273.15;
                break;
            case "fahrenheit":
                // console.log("f");
                celciusInput.value = (value - 32) / 1.8;
                kelvinInput.value = ((value - 32)/1.8)+273.15;
                break;
            case "kelvin":
                // console.log("k");
                celciusInput.value = (value-273.15);  
                fahrenheitInput.value = ((value - 273.15)*1.8) + 32;             
                break;    
        }
    });
}
// C-F = (C*1.8)+32;
// C-K = C+273.15;
// F-C = (F-32)/1.8;
// F-K = ((F-32)/1.8)+273.15;
// K-C = K-273.15;
// K-F = (K-273.15)*1.8+32;