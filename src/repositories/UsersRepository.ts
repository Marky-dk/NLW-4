import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/User";

@EntityRepository(User)
class UsersRepositoty extends Repository<User> {}

export { UsersRepositoty }