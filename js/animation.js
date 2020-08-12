const pageTransition = () => {
    let tl = gsap.timeline();
    tl.to(".loader", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut"
    });

    tl.to(".loader", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3
    });

    tl.set('.loader', {left: "-100%"});
}

const homeAnimation = () => {

	gsap.from('.header', {
		y: -100,
		duration: 1,
		opacity: 0,
	})

	gsap.from('.home-text h1',{
		y: 100,
		duration: 2,
		opacity: 0,
		delay: .5,
		ease: "Expo.easeInOut"
	})
	gsap.from('.home-text p',{
		y: -100,
		duration: 2,
		opacity: 0,
		delay: 1,
		ease: "Expo.easeInOut"
	})
	gsap.from('.home-text .main-btn ',{
		x: -100,
		duration: 2,
		opacity: 0,
		delay: 1.2,
		ease: "Expo.easeInOut"
	})
	gsap.from('.home-text .btn-outline',{
		x: 100,
		duration: 2,
		opacity: 0,
		delay: 1.2,
		ease: "Expo.easeInOut"
	})
}

const aboutAnimation = () => {
	gsap.from('.title h2', {
		y: -100,
		duration: 2,
		opacity: 0,
		delay: .5,
		ease: "Expo.easeInOut"
	})

	gsap.from('.title p', {
		y: 100,
		duration: 2,
		opacity: 0,
		delay: 1,
		ease: "Expo.easeInOut"
	})

	gsap.from('.about-content .about-img', {
		scale: 0,
		duration: 1.5,
		opacity: 0,
		delay: 1.3,
		ease: "Expo.easeInOut"
	})

	gsap.from('.about-content h3', {
		y: 100,
		duration: 2,
		opacity: 0,
		delay: 1.5,
		ease: "Expo.easeInOut"
	})

	gsap.from('.about-content p', {
		y: 100,
		duration: 2,
		opacity: 0,
		delay: 1.7,
		ease: "Expo.easeInOut"
	})

}

const serviceAnimation = () => {
		gsap.from('.s-01-img', {
			x: '-100%',
			opacity: 0,
			duration: 2,
			ease: "Expo.easeInOut"
		})

		gsap.from('.s-01-content h2', {
			y: 100,
			opacity: 0,
			duration: 1.5,
			ease: "Expo.easeInOut"
		})
		gsap.from('.s-01-content .s-01-icon', {
			scale: 0,
			opacity: 0,
			duration: 1.5,
			stagger: 1.5,
			delay: .5,
			ease: "Expo.easeInOut"

		})

		gsap.from('.s-01-content h3', {
			x: 100,
			opacity: 0,
			duration: 1.5,
			delay: .2,
			stagger: 1.5,
			ease: "Expo.easeInOut"
		})

		gsap.from('.s-01-content p', {
			y: 100,
			opacity: 0,
			duration: 1.5,
			delay: .5,
			stagger: 1.5,
			ease: "Expo.easeInOut"
		})
}

const pricingAnimation = () => {
	gsap.from('.slide-left', {
		x: 100,
		opacity: 0,
		duration: 2,
		ease: "Expo.easeInOut",
		delay: .5
	})

	gsap.from('.slide-right', {
		x: -100,
		opacity: 0,
		duration: 2,
		ease: "Expo.easeInOut",
		delay: .5
	})
	gsap.from('.slide-in', {
		scale: 0,
		opacity: 0,
		duration: 2,
		ease: "Expo.easeInOut",
		delay: 1.5
	})
}


const contactAnimation = () => {
	gsap.from('.contact-text h3', {
		opacity: 0,
		y: -100,
		duration: 1.5,
		delay: 1.5,
		ease: "Expo.easeInOut",
	});

	gsap.from('.contact-text li', {
		x: -100,
		opacity: 0,
		duration: 1.5,
		delay: 1.5,
		ease: "Expo.easeInOut",
		stagger: .3
	})

	gsap.from('.contact-text p', {
		x: -100,
		opacity: 0,
		duration: 1.5,
		delay: 1.5,
		ease: "Expo.easeInOut",
	})

	gsap.from('.copy-right', {
		y: 100,
		opacity: 0,
		duration: 1.5,
		delay: 1.5,
		ease: "Expo.easeInOut",
	})
}

export { 
	pageTransition,
	homeAnimation, 
	aboutAnimation, 
	serviceAnimation, 
	pricingAnimation, 
	contactAnimation
}