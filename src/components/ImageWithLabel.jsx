import styled from "styled-components";
import { Label } from "../modules/styles";
import PropTypes from "prop-types";

const ImageWithLabelStyled = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
const RoundShape = styled.div`
  width: ${(props) => props.theme.scaleFactor * (props.imageSize || 32)}px;
  height: ${(props) => props.theme.scaleFactor * (props.imageSize || 32)}px;
`;

const ImageWithLabel = ({ image, imageSize, text, labelProps }) => {
  return (
    <ImageWithLabelStyled>
      <RoundShape imageSize={imageSize}>
        <Image src={image} />
      </RoundShape>
      {text && <Label {...labelProps}>{text}</Label>}
    </ImageWithLabelStyled>
  );
};

ImageWithLabel.propTypes = {
  image: PropTypes.string.isRequired,
  imageSize: PropTypes.number,
  text: PropTypes.string,
  labelProps: PropTypes.object,
};

ImageWithLabel.displayName = "ImageWithLabel";

export default ImageWithLabel;
