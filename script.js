const container = document.querySelector('.container');
const text = document.querySelector('#text');
const timerEl = document.querySelector('#timer');

const totalTime = 7500;               // 7.5 sec
const breathTime = (totalTime/5)*2;   // 3 sec, in and out
const holdTime = totalTime/5;         // 1.5 sec

function breathAnimation(){
	text.innerText = 'Breath In';
	container.className = 'container grow'; // just add class, during Breath In circle will grow 
	/*
  let counter = 1;                         // Breath In timer starts from 1
	timerEl.innerText = counter;             // show counter in UI
	let interval = setInterval(() => {       // set interval to increment counter by 1 every second
		counter++;                             
		timerEl.innerText = counter;           // show incremented counter in UI
	}, 1000)                                 // interval size = 1 sec
  */

	setTimeout(() => {
		text.innerText = 'Hold';
		//timerEl.innerText = '';              // show blanck in UI
		//clearInterval(interval);             // stop counter via clearInterval the function
		
		setTimeout(() => {
      /*
			counter = 1;                         // Breath Out timer starts from 1
			timerEl.innerText = counter;         // show counter in UI
			let interval2 = setInterval(() => {  // set another interval to increment counter by 1 every second
				counter++;
				timerEl.innerText = counter;       // show incremented counter in UI
			}, 1000)                             // interval size = 1 sec
      */

			text.innerText = 'Breath Out';
			container.className = 'container shrink'; // just add class, during Breath Out circle will shrink

			setTimeout(() => {
				clearInterval(interval2);          // stop counter via clearInterval the function
			}, 1500);                            // after 1.5 sec

		}, holdTime)
	}, breathTime)
}

breathAnimation()

setInterval(breathAnimation, totalTime) // every 7.5sec animation will start again



