import { inject, injectable } from 'tsyringe';

import { deleteFile } from '@utils/file';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

interface IRquest {
  userId: string;
  avatarFile: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject('usersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ userId, avatarFile }: IRquest): Promise<void> {
    const user = await this.usersRepository.findById(userId);

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }
    user.avatar = avatarFile;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
