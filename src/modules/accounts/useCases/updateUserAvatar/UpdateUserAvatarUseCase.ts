import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '../../repositories/IUsersRepository';

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

    user.avatar = avatarFile;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
