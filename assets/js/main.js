gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    const heroVideo = document.getElementById('hero-video');
    const demoVideo = document.getElementById('demo-video');
    if (heroVideo) heroVideo.playbackRate = 6;
    if (demoVideo) demoVideo.playbackRate = 2;

    setTimeout(() => {
        document.getElementById('glass-nav').classList.add('visible');
    }, 500);
});

const heroTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5
    }
});

heroTl
    .to('.hero-text', {
        y: -500,
        scale: 1.8,
        opacity: 0,
        z: -1000,
        duration: 1.5
    });

gsap.utils.toArray('.floating-cub').forEach((cub, i) => {
    const speed = 1.2 + (i * 0.15);
    const rotation = (i % 2 === 0) ? 180 : -180;
    const xMove = (i % 2 === 0) ? 150 : -150;

    gsap.to(cub, {
        y: -600 * speed,
        x: xMove,
        rotation: rotation,
        scale: 1.5,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5
        }
    });
});

gsap.to('.overlay-win', {
    y: -400,
    x: 200,
    scale: 1.2,
    rotation: -10,
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5
    }
});

gsap.to('.overlay-loss', {
    y: 300,
    x: -200,
    scale: 1.2,
    rotation: 10,
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5
    }
});

gsap.utils.toArray('.split-card').forEach((card, i) => {
    gsap.from(card, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
        }
    });
});

gsap.utils.toArray('.platform-card').forEach((card, i) => {
    gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
        scrollTrigger: {
            trigger: card,
            start: 'top 90%',
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
