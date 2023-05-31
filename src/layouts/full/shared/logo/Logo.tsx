import { Link, styled } from "@mui/material";
import darkLogo from "=/images/logos/Wayfair-Logo.png";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <img src={darkLogo} alt="logo" height={70} width={174} priority />
    </LinkStyled>
  );
};

export default Logo;
