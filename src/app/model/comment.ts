import { User } from './user.model';
import { Post } from './post';

export class Comment {
    timestamp: string;
    body: string;
    userId: User;
    postId: Post;
}