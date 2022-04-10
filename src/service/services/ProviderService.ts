import { Provider } from "../../domain/entities/Provider";
import { ProviderServiceInterface } from "../../domain/interfaces/services/ProviderServiceInterface";
import ProviderRepository from "../../infrastructure/data/repositories/ProviderRepository";

class ProviderService implements ProviderServiceInterface {
    public async getAll() {
        return await ProviderRepository.findAll();
    }

    public async getById(id: string) {
        return await ProviderRepository.findById(id);
    }

    public async getByFirstName(firstName: string) {
        return await ProviderRepository.findByFirstName(firstName);
    }

    public async save(providerParams: Provider) {
        let provider = new Provider(providerParams);
        return await ProviderRepository.save(provider);
    }

    public async update(providerParams: Provider) {
        let provider = new Provider(providerParams);
        return await ProviderRepository.update(provider);
    }

    public async deleteById(id: string) {
        if (!id) {
            throw new Error('ID não pode ser nulo ou vazio!');
        }

        return await ProviderRepository.deleteById(id);
    }
}

export default new ProviderService();
