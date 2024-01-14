function fahrenhetToCelcius(f){
    return (f - 32)/1.8000;
}
let newCelciusTemp = 0;


while(newCelciusTemp < 73 || newCelciusTemp > 77){
    let userTemp = prompt('Please enter the desired temperature');
    newCelciusTemp = fahrenhetToCelcius(userTemp);
    if(newCelciusTemp < 73){
        alert('Temperature is too low, please adjust the setting.');
    } else if(newCelciusTemp > 77){
        alert('Temperature is too high, please adjust the setting.');
    } else {
        alert('Temperature is correctly set.')
    }
}


