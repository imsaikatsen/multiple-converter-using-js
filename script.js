function weightCoverter(valNum){
    document.getElementById("outputKilograms").innerHTML = valNum /2.2046;
    document.getElementById("outputOunces").innerHTML=valNum*16;
    document.getElementById("outputGrams").innerHTML=valNum/0.0022046;
    document.getElementById("outputStones").innerHTML=valNum*0.071429;
}

function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
    document.getElementById("outputKelvin").innerHTML=((valNum-32)/1.8)+273.15;
  }

  function lengthConverter(valNum) {
    document.getElementById("outputMeters").innerHTML=valNum/3.2808;
    document.getElementById("outputInches").innerHTML=valNum*12;
    document.getElementById("outputcm").innerHTML=valNum/0.032808;
    document.getElementById("outputYards").innerHTML=valNum*0.33333;
    document.getElementById("outputKilometers").innerHTML=valNum/3280.8;
    document.getElementById("outputMiles").innerHTML=valNum*0.00018939;

  }

  function speedConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputKPH").innerHTML = valNum * 1.609344;
    document.getElementById("outputMach").innerHTML=valNum/761.207;
    document.getElementById("outputKnots").innerHTML=valNum/1.150779;
  }