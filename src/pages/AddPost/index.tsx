import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useSession } from '@/hooks/useSession';
import { createPost } from '@/services/posts';
import { CreatePostRequest } from '@/services/types';
import { handleAPIError } from '@/shared/validation';
import './AddPost.css';

function AddPost() {
  const navigate = useNavigate();
  const { session } = useSession();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let loadingToast: string | undefined;
    try {
      loadingToast = toast.loading('Saving post...');
      const data = new FormData(event.currentTarget);
      const request: CreatePostRequest = {
        title: data.get('title') as string,
        body: data.get('body') as string,
        createdBy: session?.sessionCode as string,
      };
      await createPost(request);
      toast.dismiss(loadingToast);
      toast.success('Post saved');
      navigate(-1);
    } catch (error) {
      toast.dismiss(loadingToast);
      handleAPIError(error);
    }
  }

  return (
    <div>
      <h1 className='form__title'>New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div className="form__group">
          <label htmlFor="body">Content</label>
          <textarea id="body" name="body" rows={5} required />
        </div>
        <div className="form__actions">
          <button type="submit">Add Post</button>
        </div>
      </form>
    </div>
  );
}

export default AddPost;