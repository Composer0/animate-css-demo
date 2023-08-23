const buttonEffect = document.querySelectorAll('.btn');
const cardLeave = document.querySelectorAll(".card");

const arrivingSection = document.getElementById('hero');
const leavingSection = document.getElementById('leaving');

const arriveAnimationClasses = [
	'animate__bounceInLeft', 'animate__bounceIn', 'animate__fadeInUp', 'animate__fadeInBottomLeft', 'animate__rotateInDownLeft', 'animate__rotateInUpLeft'
]

const leaveAnimationClasses = ['animate__bounceOutLeft', 'animate__bounceOut', 'animate__fadeOutUp', 'animate__fadeOutBottomLeft', 'animate__rotateOutDownLeft', 'animate__rotateOutUpLeft'];

buttonEffect.forEach(btn => {
	btn.addEventListener("click", () => {
		btn.classList.add('animate__backOutUp');
	});
});

function addArrivingAnimationClass(card) {
	const leavingRandomIndex = Math.floor(Math.random() * leaveAnimationClasses.length);
	const leavingRandomClass = leaveAnimationClasses[leavingRandomIndex];

	const arrivingRandomIndex = Math.floor(Math.random() * arriveAnimationClasses.length);
	const arriveRandomClass = arriveAnimationClasses[arrivingRandomIndex];

	card.classList.remove(leavingRandomClass);
	card.classList.add(arriveRandomClass);
}

function addRandomAnimationClass(card) {
	const leavingRandomIndex = Math.floor(Math.random() * leaveAnimationClasses.length);
	const leavingRandomClass = leaveAnimationClasses[leavingRandomIndex];

	const arrivingRandomIndex = Math.floor(Math.random() * arriveAnimationClasses.length);
	const arriveRandomClass = arriveAnimationClasses[arrivingRandomIndex];

	card.classList.remove('animate__fadeInUp');
	card.classList.remove(arriveRandomClass);
	card.classList.add(leavingRandomClass);
}

document.addEventListener('scroll', () => {
	const arrivingSectionTop = arrivingSection.getBoundingClientRect().bottom;
	if (arrivingSectionTop <= window.innerHeight) {
		cardLeave.forEach(card => {
			addArrivingAnimationClass(card);
		});
	}
});

document.addEventListener('scroll', () => {
	const leavingSectionBottom = leavingSection.getBoundingClientRect().bottom;
	if (leavingSectionBottom <= window.innerHeight) {
		cardLeave.forEach(card => {
			addRandomAnimationClass(card);
		});
	}
});
