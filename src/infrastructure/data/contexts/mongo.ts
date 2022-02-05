import mongoose from 'mongoose';

class Mongo {
    public connect(): void {
        mongoose.connect(`mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URI}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}?authSource=admin`, {
            useNewUrlParser: true
        } as mongoose.ConnectOptions);
    }

    public close(): void {
        mongoose.connection.close();
    }

    public connectionStatus() {
        return mongoose.connection.readyState;
    }
}

export default new Mongo();
