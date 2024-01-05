import { SessionEntity } from './entities/session';
import { User } from '../../user/entities/user.entity';
import { Member } from '../../team/entities/member.entity';

const entities = [SessionEntity, User, Member];
export default entities;

export { SessionEntity, User, Member };
