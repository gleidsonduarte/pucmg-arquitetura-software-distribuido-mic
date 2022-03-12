import { Person } from "../../entities/Person";
import { PersonInterface } from "../entities/PersonInterface";

export interface PersonServiceInterface {
    getAll(): Promise<PersonInterface[]>;
    getById(id: string): Promise<PersonInterface>;
    getByFirstName(firstName: string): Promise<PersonInterface[]>;
    save(personParams: Person): Promise<PersonInterface>;
    update(personParams: Person): Promise<PersonInterface>;
    deleteById(id: string): Promise<PersonInterface>;
}
