class ContactValidator {
    public validateConstructor(contact: any) {
        if (!contact.phoneNumber) {
            throw new Error('Phone number cannot be null or empty!');
        }

        if (!contact.cellNumber) {
            throw new Error('Cell number cannot be null or empty!');
        }

        if (!contact.emailAddress) {
            throw new Error('Email address cannot be null or empty!');
        }
    }
}

export default new ContactValidator();
