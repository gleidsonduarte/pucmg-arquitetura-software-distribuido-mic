import { Associate } from "../../domain/entities/Associate";
import AssociateRepository from "../../infrastructure/data/repositories/AssociateRepository";

class AssociateService {
    public getAllAssociates() {
        return AssociateRepository.findAll();
    }

    public getAssociateById(id: string) {
        return AssociateRepository.findById(id);
    }

    public saveAssociate(associateParams: Associate) {
        let associate = new Associate(associateParams);
        return AssociateRepository.save(associate);
    }

    public updateAssociate(associateParams: Associate) {
        let associate = new Associate(associateParams);
        return AssociateRepository.update(associate);
    }

    public async deleteAssociateById(id: string) {
        if (!id) {
            throw new Error('ID cannot be null or empty!');
        }

        return await AssociateRepository.deleteById(id);
    }
}

export default new AssociateService();
