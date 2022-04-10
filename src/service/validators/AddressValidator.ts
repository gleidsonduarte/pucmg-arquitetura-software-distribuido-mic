class AddressValidator {
    public validateConstructor(address: any) {
        if (!address.publicArea) {
            throw new Error('Endereço não pode ser nulo ou vazio!');
        }

        if (!address.city) {
            throw new Error('Cidade não pode ser nula ou vazia!');
        }

        if (!address.state) {
            throw new Error('Estado não pode ser nulo ou vazio!');
        }

        if (!address.postalCode) {
            throw new Error('Código postal não pode ser nulo ou vazio!');
        }
    }

    public isValidBrPostalCode(postalCode: string) {
        const brPostalCodePattern = /^[0-9]{8}$/;
        let isValidBrPostalCode = brPostalCodePattern.test(postalCode);
        if (!isValidBrPostalCode) {
            throw new Error('Código postal com números inválidos!');
        }
    }
}

export default new AddressValidator();
