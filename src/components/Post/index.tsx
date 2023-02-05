import { formatDate } from '@/shared/dataHelpers';
import { PostDetail } from '@/shared/types';
import './Post.css';

type PostProps = {
  data: PostDetail;
};

function Post({
  data,
}: PostProps) {
  return (
    <div className="post__content-wrapper">
      <div className="post__content">
        <h2>{data.title}</h2>
        <label className="muted">{formatDate(new Date(data.createdAt))} ・ {data.session.nickName}</label>
        <p className="post__body">{data.body}</p>
      </div>
    </div>
  );
}

export default Post;