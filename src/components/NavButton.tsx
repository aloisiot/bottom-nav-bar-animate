import styles from '../style/NavButton.module.css';
import NavButtonModel from '../model/NavButton'
import Icon1 from "../icons/1.png"
import Icon2 from "../icons/2.png"
import Icon3 from "../icons/3.png"
import Icon4 from "../icons/4.png"
import Icon5 from "../icons/5.png"
import Icon6 from "../icons/6.png"
import Icon7 from "../icons/7.png"
import Icon8 from "../icons/8.png"
import Icon9 from "../icons/9.png"
import Icon10 from "../icons/10.png"

interface Props {
    navButtonModel: NavButtonModel;
    onChange: (navButton: NavButtonModel) => void
}

const Icons = [
    Icon1,
    Icon2,
    Icon3,
    Icon4,
    Icon5,
    Icon6,
    Icon7,
    Icon8,
    Icon9,
    Icon10,
]

export default function NavButton({navButtonModel, onChange}: Props){
    const { position, active} = navButtonModel
    const iconNumber = active ? position + 5 : position

    function scaleAnimate(event: any){
            event.target.animate([
                {
                    transform: "scale(.5)",
                    opacity: 0
                },
                {
                    transform: "scale(1)",
                    opacity: 1
                }
            ], 200)
    }

    function handlerClic(event: any){
        onChange(navButtonModel)
        if(iconNumber < 5 )
            scaleAnimate(event)
    }

    return (
        <div className={styles.button}
            onClick={handlerClic}>
            <img className={styles.navIcon} 
                src={Icons[iconNumber]} alt="nav-icon" />
        </div>
    )
}