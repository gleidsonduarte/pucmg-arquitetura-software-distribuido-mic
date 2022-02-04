import { Provider } from "../../domain/entities/Provider";
import ProviderRepository from "../../infrastructure/data/repositories/ProviderRepository";

class ProviderService {
    public async getAllProviders() {
        return await ProviderRepository.findAll();
    }

    public async getProviderById(id: string) {
        return await ProviderRepository.findById(id);
    }

    public async getProviderByFirstName(firstName: string) {
        return await ProviderRepository.findByFirstName(firstName);
    }

    public async saveProvider(providerParams: Provider) {
        let provider = new Provider(providerParams);
        return await ProviderRepository.save(provider);
    }

    public async updateProvider(providerParams: Provider) {
        let provider = new Provider(providerParams);
        return await ProviderRepository.update(provider);
    }

    public async deleteProviderById(id: string) {
        if (!id) {
            throw new Error('ID cannot be null or empty!');
        }

        return await ProviderRepository.deleteById(id);
    }
}

export default new ProviderService();
