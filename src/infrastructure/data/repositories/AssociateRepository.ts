import { AssociateInterface } from "../../../domain/interfaces/entities/AssociateInterface";
import { AssociateRepositoryInterface } from "../../../domain/interfaces/repositories/AssociateRepositoryInterface";
import { associateMapping } from "../mappings/AssociateMapping";

class AssociateRepository implements AssociateRepositoryInterface {
    public async findAll() {
        try {
            return await associateMapping.find({ });
        } catch (error) {
            return error;
        }
    }

    public async findById(id: string) {
        try {
            return await associateMapping.findById(id);
        } catch (error) {
            return error;
        }
    }

    public async save(associate: AssociateInterface) {
        try {
            return await associateMapping.create(associate);
        } catch (error) {
            return error;
        }
    }

    public async update(associate: AssociateInterface) {
        try {
            return await associateMapping.findByIdAndUpdate(associate.id, associate);
        } catch (error) {
            return error;
        }
    }

    public async deleteById(id: string) {
        try {
            return await associateMapping.findByIdAndRemove(id);
        } catch (error) {
            return error;
        }
    }
}

export default new AssociateRepository();
