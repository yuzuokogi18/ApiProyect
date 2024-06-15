import styled from "styled-components";
import Imagen from "../atoms/Imagen";
import Info from "../atoms/Information";
import Pointt from "../atoms/Pointt";
import Title from "../atoms/Title";
import SubInformation from "../atoms/SubInformation";

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

const StyledSpanDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
`;

function Cards(props) {
  let color = "";

  switch (props.status) {
    case "Alive":
      color = "green";
      break;
    case "unknown":
      color = "gray";
      break;
    case "Dead":
      color = "red";
      break;
    default:
      console.log("Estatus no encontrado");
  }

  return (
    <StyledDiv key={props.key}>
      <StyledContainerImage>
        <Imagen src={props.src} />
      </StyledContainerImage>

      <StyledContainerData>
        <Title text={props.name} />
        <StyledSpanDiv>
          <Pointt color={color} size="10px" /> 
          <Info text={props.status} />
          <Info text=" - " />
          <Info text={props.species} />
        </StyledSpanDiv>
        <SubInformation text="Last know location:" />
        <Info text={props.origin} />
        <SubInformation text="First see in:" />
        <Info text={props.location} />
      </StyledContainerData>
    </StyledDiv>
  );
}

export default Cards;
