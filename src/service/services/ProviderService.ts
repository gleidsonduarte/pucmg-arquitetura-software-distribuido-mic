import { Provider } from "../../domain/entities/Provider";
import ProviderRepository from "../../infrastructure/data/repositories/ProviderRepository";

class ProviderService {
    public getAllProviders() {
        return ProviderRepository.findAll();
    }

    public getProviderById(id: string) {
        return ProviderRepository.findById(id);
    }

    public getProviderByFirstName(firstName: string) {
        return ProviderRepository.findByFirstName(firstName);
    }

    public saveProvider(providerParams: Provider) {
        let provider = new Provider(providerParams);
        return ProviderRepository.save(provider);
    }

    public updateProvider(providerParams: Provider) {
        let provider = new Provider(providerParams);
        return ProviderRepository.update(provider);
    }

    public deleteProviderById(id: string) {
        if (!id) {
            throw new Error('ID cannot be null or empty!');
        }

        return ProviderRepository.deleteById(id);
    }
}

export default new ProviderService();
