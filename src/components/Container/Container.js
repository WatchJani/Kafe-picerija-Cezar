import Styled from "./Container.module.css"

const Container = ({ children }) => {
    return (
        <div className={Styled.Container}>
            {children}
        </div>
    )
}

export default Container