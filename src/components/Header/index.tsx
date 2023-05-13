import { Wrapper } from './styles';

export type HeaderProps = {
  title?: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <Wrapper>
      <p>{title}</p>
    </Wrapper>
  );
};
export default Header;
