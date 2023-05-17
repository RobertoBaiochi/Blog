import * as Styled from './styles';

export type HtmlComponentProps = {
  content: string;
};

const HtmlComponent = ({ content }: HtmlComponentProps) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: content }} />;
};

export default HtmlComponent;
