import { Controller, Get } from "@nestjs/common";
@Controller()
class AppController {
  @Get("/asdf")
  getRootRoute() {
    return "hi there from nest";
  }
}

export default AppController;
