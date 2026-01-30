@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(data) {
    return this.prisma.user.create({ data });
  }

  findAll() {
    return this.prisma.user.findMany();
  }
}
