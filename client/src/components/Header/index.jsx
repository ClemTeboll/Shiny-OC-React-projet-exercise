import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: red; border-radius: 30px; backgound-color: ${colors.primary}`}
`;

function Header() {
  return (
    <nav>
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLink to="/survey/1" $isFullLink>
        Questionnaire
      </StyledLink>
      <StyledLink to="/freelances">Freelances</StyledLink>
    </nav>
  );
}

export default Header;
