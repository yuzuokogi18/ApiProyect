import styled from "styled-components";

const ImgStyled = styled.img`
    border-radius: 8px 0 0 8px;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
`;

function Imagen(props) {
    return <ImgStyled src={props.src} alt={props.alt} />;
}

export default Imagen;
