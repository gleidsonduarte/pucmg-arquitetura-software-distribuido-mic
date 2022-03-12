import { AssociateInterface } from "../../../domain/interfaces/entities/AssociateInterface";
import { AssociateRepositoryInterface } from "../../../domain/interfaces/repositories/AssociateRepositoryInterface";
import { associateMapping } from "../mappings/AssociateMapping";

class AssociateRepository implements AssociateRepositoryInterface {
    public async findAll() {
        return await associateMapping.find({ });
    }

    public async findById(id: string) {
        return await associateMapping.findById(id);
    }

    public async findByFirstName(firstName: string) {
        return await associateMapping.find({
            firstName: { $regex: `.*${firstName}.*`, $options: 'i'}
        });
    }

    public async save(associate: AssociateInterface) {
        return await associateMapping.create(associate);
    }

    public async update(associate: AssociateInterface) {
        return await associateMapping.findByIdAndUpdate(associate.id, associate, {new: true});
    }

    public async deleteById(id: string) {
        return await associateMapping.findByIdAndRemove(id);
    }
}

export default new AssociateRepository();
