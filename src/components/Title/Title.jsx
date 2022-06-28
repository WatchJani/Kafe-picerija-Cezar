import Styled from "./Title.module.css"

const Title = () => {
    return (
        <div className={Styled.TitleContainer}>
            <h1 className={Styled.Heding}>OUR MENU</h1>
            <h1><small>These fine folks trusted the award winning restaurant.</small></h1>
        </div>
    )
}

export default Title