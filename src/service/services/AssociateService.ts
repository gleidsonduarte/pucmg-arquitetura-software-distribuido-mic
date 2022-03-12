import { Associate } from "../../domain/entities/Associate";
import { AssociateServiceInterface } from "../../domain/interfaces/services/AssociateServiceInterface";
import AssociateRepository from "../../infrastructure/data/repositories/AssociateRepository";

class AssociateService implements AssociateServiceInterface {
    public async getAll() {
        return await AssociateRepository.findAll();
    }

    public async getById(id: string) {
        return await AssociateRepository.findById(id);
    }

    public async getByFirstName(firstName: string) {
        return await AssociateRepository.findByFirstName(firstName);
    }

    public async save(associateParams: Associate) {
        let associate = new Associate(associateParams);
        return await AssociateRepository.save(associate);
    }

    public async update(associateParams: Associate) {
        let associate = new Associate(associateParams);
        return await AssociateRepository.update(associate);
    }

    public async deleteById(id: string) {
        if (!id) {
            throw new Error('ID cannot be null or empty!');
        }

        return await AssociateRepository.deleteById(id);
    }
}

export default new AssociateService();
