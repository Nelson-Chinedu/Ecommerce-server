import { GraphQLObjectType, GraphQLString } from 'graphql';

import product from './product';

export default new GraphQLObjectType({
  name: 'order',
  fields: {
    orderId: { type: GraphQLString },
    merchantId: { type: GraphQLString },
    customerId: { type: GraphQLString },
    status: { type: GraphQLString },
    product: { type: product },
  },
});
