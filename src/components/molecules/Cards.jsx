import styled from "styled-components";
import Imagen from "../atoms/Imagen";
import Information from "../atoms/Information";
import Title from "../atoms/Title";

const StyledDiv = styled.div`
  background-color: #3d3d3d;
  border-radius: 15px;
  margin: 13px auto;  
  width: 48%;
  display: flex;
  max-height: 225px;
`;

const StyledContainerImage = styled.div`
  border-radius: 8px 0 0 8px;
  margin: 0;
  width: 280px;
  height: 100%;
`;

const StyledContainerData = styled.div`
  padding: 1%;
  border-radius: 8px;
  width: 80%;
`;

function Cards(props) {
    return (
        <StyledDiv key={props.id}>
            <StyledContainerImage>
                <Imagen src={props.image} alt={props.name} />
            </StyledContainerImage>

            <StyledContainerData>
                <Title text={props.name} />
                <Information text={`Race: ${props.race}`} />
                <Information text={`Gender: ${props.gender}`} />
                <Information text={`Ki: ${props.ki}`} />
                <Information text={`Max Ki: ${props.maxKi}`} />
                <Information text={`Affiliation: ${props.affiliation}`} />
            </StyledContainerData>
        </StyledDiv>
    );
}

export default Cards;
