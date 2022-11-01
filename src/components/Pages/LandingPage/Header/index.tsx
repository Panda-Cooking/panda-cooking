import { TiThMenuOutline } from "react-icons/ti";
import { Heading3 } from "../../../../styles/typography";
import { HeaderStyled } from "./styles";

export const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <Heading3>Panda Cooking</Heading3>
        <button>
          <TiThMenuOutline />
        </button>
      </div>
    </HeaderStyled>
  );
};
