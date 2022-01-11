import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Image = styled.img`
width: 148px;
height: 148px;
`
const Card = styled.div`
background: #FFFFFF;
border-radius: 3px;
width: 164px;
height: 299px;

`
const ProductName = styled.div`
font-family: SFProText-Regular;
font-size: 14px;
color: #000000;
text-align: center;
line-height: 20px;
`

const Price = styled.div`
font-family: SFProText-Semibold;
font-size: 16px;
color: #0070E0;
text-align: center;
`


const Product = ({
    id, name, price, presentation, brand, photo, originalPrice, updateAt, handleChange
}) => {
    const [amount, setAmount] = useState(0);
    // useEffect(
    // () => {
    //     handleChange(amount);
    // }, [amount]);
    return <>
    <Card>
    <Image src={require('../assets/Bitmap.png')} />
    <ProductName>
        Caldo Wilde
    </ProductName>
    <Price>
        55.90
    </Price>
    </Card>
    </>





};
export default Product;