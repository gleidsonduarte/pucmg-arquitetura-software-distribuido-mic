class AddressValidator {
    public validateConstructor(address: any) {
        if (!address.publicArea) {
            throw new Error('Public area cannot be null or empty!');
        }

        if (!address.city) {
            throw new Error('City cannot be null or empty!');
        }

        if (!address.state) {
            throw new Error('State cannot be null or empty!');
        }

        if (!address.postalCode) {
            throw new Error('Postal code cannot be null or empty!');
        }
    }

    public isValidBrPostalCode(postalCode: string) {
        const brPostalCodePattern = /^[0-9]{8}$/;
        let isValidBrPostalCode = brPostalCodePattern.test(postalCode);
        if (!isValidBrPostalCode) {
            throw new Error('Postal code with invalid numbers!');
        }
    }
}

export default new AddressValidator();
