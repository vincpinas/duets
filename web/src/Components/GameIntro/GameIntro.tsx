import { useEffect } from "react";
import "./GameIntro.scss";

function GameIntro({ title, text, duration, setter }: GameIntroProps) {
  const animationIntro = {
    animation: `fade-out ${duration || 4000 / 5}ms cubic-bezier(0.175, 0.885, 0.32, 1.275) ${duration || 4000 / 5 * 4}ms forwards`
  }

  const animationTitle = {
    animation: `scale-in-fade ${duration || 4000}ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 500ms forwards`
  }
  
  const animationText = {
    animation: `scale-in-fade ${duration || 4000}ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 1000ms forwards`
  }

  useEffect(() => {
    let temp = setTimeout(() => setter(false), duration || 4000);
    return () => clearTimeout(temp)
  }, [])

  return (
    <div className="c-gameintro" style={animationIntro}>
      <h1 className="c-gameintro__title" style={animationTitle}>{title}</h1>
      <h4 className="c-gameintro__text" style={animationText}>{text}</h4>
    </div>
  )
}

export default GameIntro