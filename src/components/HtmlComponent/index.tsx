import * as Styled from './styles';
import { Content } from '../../shared-typed/content';

const HtmlComponent = ({ content }: Content) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: content }} />;
};

export default HtmlComponent;
