const dynamoose = require("dynamoose");

const personSchema = new dynamoose.Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
    },
});

const personModel = dynamoose.model("Person", personSchema);

module.exports = personModel;
