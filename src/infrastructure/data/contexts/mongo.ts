import mongoose from 'mongoose';

mongoose.connect(`mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@mongo:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}?authSource=admin`, {
    useNewUrlParser: true
} as mongoose.ConnectOptions);

module.exports = mongoose;
