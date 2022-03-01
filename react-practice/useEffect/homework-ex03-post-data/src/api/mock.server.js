import { createServer, Model, RestSerializer } from "miragejs";
import faker from "faker";

export default function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer
    },

    models: {
      address: Model
    },

    routes() {
      this.namespace = "api";
      this.timing = 3000;
      this.resource("addresses");
    },

    seeds(server) {
      [...Array(5)].forEach((_) => {
        server.create("address", {
          id: faker.datatype.uuid(),
          city: faker.address.city()
        });
      });
    }
  });
}
