import Styled from "./PriceList.module.css"

const PriceList = ({ food: { food, price, paragraf } }) => {
  return (
    <div className={Styled.PriceListContainer}>
      <div className={Styled.PriceContainer}>
        <h4 className={Styled.Food}>{food}</h4>
        <div className={Styled.DottedBg}></div>
        <span className={Styled.Price}>${price}</span>
      </div>
      <p className={Styled.PriceListParagraf}>{paragraf}</p>
    </div>
  )
}

export default PriceList