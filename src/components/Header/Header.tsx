import { Container, Content } from "./styles";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Item } from "./Item/Item";

export const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo />

        <Item />
      </Content>
    </Container>
  );
};
