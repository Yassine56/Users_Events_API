import GenericModule from '../GenericModule';
import { User } from '../../models';
import RepositoryFactory from '../../repositories/RepositoryFactory';
import IGenericRepository from '../../repositories/IGenericRepository';
export default class UserModule extends GenericModule<User> {
  constructor(repository: IGenericRepository<User> = RepositoryFactory.buildUserRepository()) {
    super(repository);
  }
}
