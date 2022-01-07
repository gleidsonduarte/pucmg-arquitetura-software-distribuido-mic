import mongoose from 'mongoose';

class Mongo {
    public connect(): void {
        mongoose.connect(`mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@mongo:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}?authSource=admin`, {
            useNewUrlParser: true
        } as mongoose.ConnectOptions);
    }

    public close(): void {
        mongoose.connection.close();
    }
}

export default new Mongo();
