import { ProviderRepositoryInterface } from "../../../domain/interfaces/repositories/ProviderRepositoryInterface";
import { providerMapping } from "../mappings/ProviderMapping";
import { ProviderInterface } from "../../../domain/interfaces/entities/ProviderInterface";

class ProviderRepository implements ProviderRepositoryInterface {
    public async findAll() {
        try {
            return await providerMapping.find({ });
        } catch (error) {
            return error;
        }
    }

    public async findById(id: string) {
        try {
            return await providerMapping.findById(id);;
        } catch (error) {
            return error;
        }
    }

    public async findByFirstName(firstName: string) {
        try {
            return await providerMapping.find({
                firstName: { $regex: `.*${firstName}.*`, $options: 'i'},
            });
        } catch (error) {
            return error;
        }
    }

    public async save(provider: ProviderInterface) {
        try {
            return await providerMapping.create(provider);
        } catch (error: any) {
            return error;
        }
    }

    public async update(provider: ProviderInterface) {
        try {
            return await providerMapping.findByIdAndUpdate(provider.id, provider);
        } catch (error) {
            return error;
        }
    }

    public async deleteById(id: string) {
        try {
            return await providerMapping.findByIdAndRemove(id);
        } catch (error) {
            return error;
        }
    }
}

export default new ProviderRepository();
