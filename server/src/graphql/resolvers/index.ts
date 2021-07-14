import { PostResolver } from './PostResolver';
import { ContactMessageResolver } from './ContactMessageResolver';
import { UserResolver } from './UserResolver';
import { ImageResolver } from './ImageResolver';

export default [ContactMessageResolver, UserResolver, PostResolver, ImageResolver] as const;
