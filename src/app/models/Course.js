const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String },
    description: { type: String },
    image: { type: String },
    videoId: { type: String },
    slug: { type: String, slug: 'name' }
}, {
    timestamps: true,
});

Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true
});

module.exports = mongoose.model('Course', Course);
