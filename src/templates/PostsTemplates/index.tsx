import { PostCardProps } from '@/components/PostCard';
import PostGrid from '../../components/PostGrid';
import { SettingsStrapi } from '../../shared-typed/settings';
import BaseTemplate from '../Base';

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostCardProps[];
};

const PostsTemplate = ({ settings, posts = [] }: PostsTemplateProps) => {
  return (
    <BaseTemplate settings={settings}>
      <PostGrid posts={posts} />
    </BaseTemplate>
  );
};
export default PostsTemplate;
