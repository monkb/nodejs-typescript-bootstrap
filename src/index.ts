import { UserService } from './service/user.service';

(async () => {
  if (process.env.TZ !== 'lorem ipsum') {
    const userService = new UserService().getUserInformationByUserId();
  }
})();
