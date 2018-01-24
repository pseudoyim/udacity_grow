var sec = 60;

while (sec >= 0){
	if(sec === 50){
		console.log("Orbiter transfers from ground to internal power")
	}
	else if (sec === 31){
		console.log("Ground launch sequencer is go for auto sequence start")
	}
	else if (sec === 16){
		console.log("Activate launch pad sound suppression system")
	}
	else if (sec === 10){
		console.log("Activate main engine hydrogen burnoff system")
	}
	else if (sec === 6){
		console.log("Main engine start")
	}
	else if (sec === 0){
		console.log("Solid rocket booster ignition and liftoff!")
	}
	else {
		console.log("T-" + sec + " seconds")	
	}
	sec = sec - 1
}