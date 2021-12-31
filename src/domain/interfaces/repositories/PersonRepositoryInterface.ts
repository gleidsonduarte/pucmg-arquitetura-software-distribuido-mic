import { PersonInterface } from "../entities/PersonInterface";

export interface PersonRepositoryInterface {
    findAll(): Promise<PersonInterface[]>;
    findById(id: string): Promise<PersonInterface>;
    save(person: PersonInterface): Promise<PersonInterface>;
    update(person: PersonInterface): Promise<PersonInterface>;
    deleteById(id: string): Promise<PersonInterface>;
}
