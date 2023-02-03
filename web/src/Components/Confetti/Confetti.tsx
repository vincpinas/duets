import { useEffect, useRef } from 'react'
import { ConfettiProps } from '../../@types/client';
import "./Confetti.scss"

function Confetti({ delay }: ConfettiProps) {
    const canvas = useRef<HTMLCanvasElement | null>(null);
    let maxParticleCount = 150; //set max confetti count
    let particleSpeed = 0.2; //set the particle animation speed
    let stopConfetti: any; //call to stop adding confetti
    let colors = ["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"]
    let streamingConfetti = false;
    let animationTimer: any = null;
    let particles: any = [];
    let waveAngle = 0;

    function resetParticle(particle: any, width: number, height: number) {
        particle.color = colors[(Math.random() * colors.length) | 0];
        particle.x = Math.random() * width;
        particle.y = Math.random() * height - height;
        particle.diameter = Math.random() * 10 + 5;
        particle.tilt = Math.random() * 10 - 10;
        particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
        particle.tiltAngle = 0;
        return particle;
    }

    function startConfettiInner() {
        let context, width = window.innerWidth, height = window.innerHeight;

        window.requestAnimationFrame = (function () {
            return requestAnimationFrame ||
                function (callback: any) {
                    return window.setTimeout(callback, 16.6666667);
                };
        })();
        if (canvas.current) {
            context = canvas.current.getContext("2d");
        }

        if(context) {
            while (particles.length < maxParticleCount)
                particles.push(resetParticle({}, width, height));
            streamingConfetti = true;
            if (animationTimer === null) {
                (function runAnimation() {
                    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
                    if (particles.length === 0)
                        animationTimer = null;
                    else {
                        updateParticles();
                        drawParticles(context);
                        animationTimer = requestAnimationFrame(runAnimation);
                    }
                })();
            }
        }
    }

    function stopConfettiInner() {
        streamingConfetti = false;
    }

    function removeConfettiInner() {
        stopConfettiInner();
        particles = [];
    }

    function drawParticles(context: any) {
        let particle;
        let x;
        for (let i = 0; i < particles.length; i++) {
            particle = particles[i];
            context.beginPath();
            context.lineWidth = particle.diameter;
            context.strokeStyle = particle.color;
            x = particle.x + particle.tilt;
            context.moveTo(x + particle.diameter / 2, particle.y);
            context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
            context.stroke();
        }
    }

    function updateParticles() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let particle;
        waveAngle += 0.01;
        for (let i = 0; i < particles.length; i++) {
            particle = particles[i];
            if (!streamingConfetti && particle.y < -15)
                particle.y = height + 100;
            else {
                particle.tiltAngle += particle.tiltAngleIncrement;
                particle.x += Math.sin(waveAngle);
                particle.y += (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
                particle.tilt = Math.sin(particle.tiltAngle) * 15;
            }
            if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
                if (streamingConfetti && particles.length <= maxParticleCount)
                    resetParticle(particle, width, height);
                else {
                    particles.splice(i, 1);
                    i--;
                }
            }
        }
    }

    const handleResize = () => {
        if(canvas.current) {
            canvas.current.width = window.innerWidth
            canvas.current.height = window.innerHeight
        }
    }

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener("resize", handleResize)
            if(canvas.current) {
                canvas.current.width = window.innerWidth
                canvas.current.height = window.innerHeight
            }
            startConfettiInner();
    
            return () => {
                removeConfettiInner();
                window.removeEventListener("resize", handleResize)
            }
        }, delay ? delay : 0)
    })

    return (
        <canvas ref={canvas} id="c-confetti__canvas"></canvas>
    )
}

export default Confetti