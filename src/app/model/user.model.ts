import { Role } from './role';
import { Theme } from './theme';
import { Banned } from './banned';

export class User{
    userId: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    roleId:Role;
    image: string;
    bannedId: Banned;
    themeId: Theme;
  resp: any;
}
 