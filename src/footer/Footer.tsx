import s from "./Footer.module.css"
import scontainer from "./../common/styles/Container.module.css"


export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${scontainer.container} ${s.footerContainer}`}>
                <h2>Evgeniy Ivanov</h2>
                <div className={s.footerInfo}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div>@ 2023 No rights for this</div>
            </div>
        </div>
    );
};

