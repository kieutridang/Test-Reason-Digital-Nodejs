import { routes } from "../../constants/routes"
import { postGateway } from "../../gateways"

const getPosts = {
  method: "GET",
  path: routes.posts.value,
  config: {
    handler: async function (): Promise<object> {
      return postGateway.getPosts()
    },
    auth: {
      strategy: "jwt",
      scope: ["admin"],
    },
  },
}

module.exports = getPosts
