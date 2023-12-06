import mongoose from 'mongoose'

const URI = 'mongodb+srv://nadiyatita:kaDHMh1799KKDxrz@cluster1.vb8zo0q.mongodb.net/?retryWrites=true&w=majority'

mongoose
    .connect(URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err));