import s from "./Remotejob.module.css"
import scontainer from "./../common/styles/Container.module.css"
import sbutton from "./../common/styles/Button.module.css"


export const Remotejob = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${scontainer.container} ${s.skillsContainer}`}>
                <h2>Im down to work remotely</h2>
                <button className={sbutton.button}>Hire me !!!</button>
            </div>
        </div>
    );
};

