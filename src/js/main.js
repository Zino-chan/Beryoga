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


barba.init({
	 	sync: true,

	 	transitions: [
	 		{
	 			async leave(data) {
	 				pageTransition();
	 				await delay(1000);
	 				//data.current.container.remove();
	 			},

	 		},
	 	],
	 });


	 function delay(n) {
	 	n = n || 2000;
	 	return new Promise((done) => {
	 		setTimeout(() => {
	 			done();
	 		}, n);
	 	});
	}
