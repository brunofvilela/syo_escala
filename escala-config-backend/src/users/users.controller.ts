@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post()
  create(@Body() body) {
    return this.service.create(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
