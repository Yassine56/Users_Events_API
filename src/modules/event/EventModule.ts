import GenericModule from '../GenericModule';
import { Event } from '../../models';
import RepositoryFactory from '../../repositories/RepositoryFactory';
import IGenericRepository from '../../repositories/IGenericRepository';
export default class EventModule extends GenericModule<Event> {
  constructor(repository: IGenericRepository<Event> = RepositoryFactory.buildEventRepository()) {
    super(repository);
  }
}
