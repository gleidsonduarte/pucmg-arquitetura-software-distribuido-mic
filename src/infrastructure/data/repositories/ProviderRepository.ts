import { ProviderRepositoryInterface } from "../../../domain/interfaces/repositories/ProviderRepositoryInterface";
import { providerMapping } from "../mappings/ProviderMapping";
import { ProviderInterface } from "../../../domain/interfaces/entities/ProviderInterface";

class ProviderRepository implements ProviderRepositoryInterface {
    public async findAll() {
        return await providerMapping.find({ });
    }

    public async findById(id: string) {
        return await providerMapping.findById(id);
    }

    public async findByFirstName(firstName: string) {
        return await providerMapping.find({
            firstName: { $regex: `.*${firstName}.*`, $options: 'i'}
        });
    }

    public async save(provider: ProviderInterface) {
        return await providerMapping.create(provider);
    }

    public async update(provider: ProviderInterface) {
        return await providerMapping.findByIdAndUpdate(provider.id, provider, {new: true});
    }

    public async deleteById(id: string) {
        return await providerMapping.findByIdAndRemove(id);
    }
}

export default new ProviderRepository();
