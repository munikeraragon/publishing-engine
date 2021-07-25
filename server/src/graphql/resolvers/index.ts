import { PostResolver } from './PostResolver';
import { ContactMessageResolver } from './ContactMessageResolver';
import { UserResolver } from './UserResolver';
import { ImageResolver } from './ImageResolver';
import { AdminResolver } from './AdminResolver';

export default [
    ContactMessageResolver,
    UserResolver,
    PostResolver,
    ImageResolver,
    AdminResolver
] as const;
