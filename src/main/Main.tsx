import s from "./Main.module.css"
import scontainer from "./../common/styles/Container.module.css"

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={scontainer.container}>
                <div className={s.text}>
                    <span>Hello!</span>
                    <h1>My name is Evgeniy</h1>
                    <p>I'm front-end developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

