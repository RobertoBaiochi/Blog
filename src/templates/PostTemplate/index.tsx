import { PostStrapi } from '../../shared-typed/post-strapi';
import Post from '../../components/Post';
import BaseTemplate from '../Base';
import { SettingsStrapi } from '../../shared-typed/settings';

export type PostTemplateProps = {
  settings: SettingsStrapi;
  post: PostStrapi;
};

const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  return (
    <BaseTemplate settings={settings}>
      <Post {...post} />
    </BaseTemplate>
  );
};
export default PostTemplate;
