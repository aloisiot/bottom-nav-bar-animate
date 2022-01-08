import styles from '../style/NavBar.module.css';
import NavButton from './NavButton';
import { useRef, useEffect, useState } from 'react';
import { getNavButtonList } from '../function/navButtons';

export default function NavBar(){
    const [position, setPosition] = useState(1);
    const [navButtons, setNavButtons] = useState(getNavButtonList(position));
    const grayEllement = useRef<HTMLDivElement>(null);
    const navBar = useRef<HTMLDivElement>(null);

    function grayElementAnimate() {
        if(grayEllement.current !== null && navBar.current !== null){
            const newPosition = `calc(100% / 5 * ${position})`
            grayEllement.current.animate([
                { left: newPosition }
            ],{
                duration: 300,
                fill: "both",
                easing: 'ease-out'
            })
        }
    }

    useEffect(() => {
        grayElementAnimate()
    })

    useEffect(() => {
        setNavButtons(getNavButtonList(position))
    }, [position])

    const renderNavButtons = () => {
        return navButtons.map(button => {
            return (
                <NavButton
                    key={button.position}
                    navButtonModel={button}
                    onChange={ navButton => setPosition(navButton.position)}
                />
            )
        })
    }

    return (
        <div ref={navBar} className={styles.navBar}>
            {renderNavButtons()}
            <div ref={grayEllement} 
                className={styles.grayElement}
                style={{ left: `calc(100% / 5 * ${position})` }}
            ></div>
        </div>
    )
}