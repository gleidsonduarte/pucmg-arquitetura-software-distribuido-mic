import { ProviderInterface } from "../entities/ProviderInterface";
import { PersonRepositoryInterface } from "./PersonRepositoryInterface";

export interface ProviderRepositoryInterface extends PersonRepositoryInterface {
    findByFirstName(firstName: string): Promise<ProviderInterface>;
}
