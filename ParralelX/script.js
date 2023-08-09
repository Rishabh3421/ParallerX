const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#background",
        start: "top top",
        scrub: 3 //for smooth animation
    }
});

const elem = gsap.utils.toArray('.parallax').forEach(elem => {
    const depth = elem.dataset.depth;
    const shifting = -(depth * (elem.offsetHeight * 1.1));
    tl.to(elem, {
            y: shifting,
            ease: "none"
        }, 0)
        .to('#overlay', {
            opacity: 0,
            ease: "none"
        }, 0)
})

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#content",
        start: "top center",
        toggleActions: 'play pause resume reverse',
        // scrub: 3
    }
});

tl2.from('.boxes', {
        stagger: .3,
        opacity: 0,
        delay: .1,
        duration: 0.5,
        ease: 'Expo.easeInOut'
    })
    .from('.boxes .image1 .image2 .image3 .image4', {
        stagger: .1,
        opacity: 1,
        duration: 0.4,
        ease: 'Expo.easeInOut'
    })
    .from('.boxes h4', {
        y: 10,
        opacity: 0,
        duration: 0.5,
        ease: 'Expo.easeInOut',
        stagger: .3,

    })
    .from('#content p', {
        y: -10,
        opacity: 0,
        duration: 1,
        ease: 'Expo.easeInOut'
    })
    .from('footer', {
        y: -10,
        opacity: 0,
        width: 0,
        duration: 1,
        ease: 'Expo.easeInOut'
    })