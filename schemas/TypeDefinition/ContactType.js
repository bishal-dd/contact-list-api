const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLBoolean,
} = graphql;

const ContactType = new GraphQLObjectType({
  name: "Contact",
  fields: () => ({
    id: { type: GraphQLID },
    contact_name: { type: GraphQLString },
    contact_number: { type: GraphQLInt },
    contact_email: { type: GraphQLString },
    userId: { type: GraphQLInt }, // This is the foreign key
    isActive: { type: GraphQLBoolean }, // New boolean field
  }),
});

module.exports = ContactType;
