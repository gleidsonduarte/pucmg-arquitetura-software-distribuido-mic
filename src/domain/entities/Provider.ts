import { Person } from './Person';
import { ProviderInterface } from '../interfaces/entities/ProviderInterface';

export class Provider extends Person implements ProviderInterface {
    constructor(person: any) {
        super(person);
    }
}
