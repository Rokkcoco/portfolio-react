import s from "./Contacts.module.css"
import scontainer from "./../common/styles/Container.module.css"
import sbutton from "./../common/styles/Button.module.css"


export const Contacts = () => {
    return (
        <div className={s.remoteMain}>
            <div className={`${scontainer.container} ${s.remoteContainer}`}>
                <h2>My contacts</h2>
                <form className={s.formContainer}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea cols="50" rows="10"></textarea>
                </form>
                <button className={sbutton.button}>Hire me !!!</button>
            </div>
        </div>
    );
};

