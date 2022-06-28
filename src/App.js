import { PriceList, Title, Container } from "./components"

export const App = () => {

    const data = [
        { food: "ENGLISH ASPARAGUS", price: "14.95", paragraf: "pellentesque enim. Aliquam tempor" },
        { food: "ENGLISH ASPARAGUS", price: "14.95", paragraf: "pellentesque enim. Aliquam tempor" },
        { food: "ENGLISH ASPARAGUS", price: "14.95", paragraf: "pellentesque enim. Aliquam tempor" },
        { food: "ENGLISH ASPARAGUS", price: "14.95", paragraf: "pellentesque enim. Aliquam tempor" },
        { food: "ENGLISH ASPARAGUS", price: "14.95", paragraf: "pellentesque enim. Aliquam tempor" },
        { food: "ENGLISH ASPARAGUS", price: "14.95", paragraf: "pellentesque enim. Aliquam tempor" }
    ]

    return (
        <Container>
            <Title />
            <div>
                {data.map((data, index) => {
                    return (
                        <PriceList key={index} food={data} />
                    )
                })}
            </div>
        </Container>
    )
}