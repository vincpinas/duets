import './RubberSpan.scss'

interface RSProps {
    letters: string;
    margin?: number|string;
    hero?: boolean;
    emoji?: string;
    br?: boolean;
}

function RubberSpan({ letters, margin = 5, hero, emoji, br }: RSProps) {
    let letterArray: string[] = [];

    let split = letters.split("");
    split.forEach(item => {
        letterArray.push(item)
    });

    // Set the animation on hovering over the target
    function changeAnimation(e: any) {
        e.target.style.animationName = 'rubberBand'
        e.target.style.animationDuration = '1.1s'
    }

    // Remove the animation after a set time to reset it so it can be played again later.
    function resetAnimation(e: any) {
        setTimeout(() => {
            e.target.style.animation = 'none';
            e.target.style.animation = '';
        }, 1000);
    }

    const rubberContainerStyles = {
        marginRight: margin + "px"
    }

    const heroLetter = {
        textShadow: "-1px 0 0px #4d43ff, 0 1px 0px #4238ff, -2px 1px 0px #4d43ff, -1px 2px 0px #4238ff, -3px 2px 0px #4d43ff"
    }

    return (
        <>
            <span style={rubberContainerStyles}>
                {letterArray.map((item, index) => {
                    return (
                        <span key={index} className="blast-text noselect" style={hero ? heroLetter : {}} onMouseOver={changeAnimation} onMouseLeave={resetAnimation}>{item}</span>
                    )
                })}
                <span className="blast-text noselect" onMouseOver={changeAnimation} onMouseLeave={resetAnimation}>{emoji}</span>
            </span>
            { br ? <br></br> : null }
        </>
    )
}

export default RubberSpan