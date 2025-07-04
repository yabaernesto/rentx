import { verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import { AppError } from '@shared/errors/AppError';
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  // Bearer dfskdashadhasjasasdsada
  const [, token] = authHeader.split(' ');

  try {
    const { sub: userId } = verify(
      token,
      '6dde1e9dba7794c123a9880cf9205256',
    ) as IPayload;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(userId);

    if (!user) {
      throw new AppError('User does not exists!', 401);
    }

    request.user = {
      id: userId,
    };

    next();
  } catch {
    throw new AppError('Invalid token!', 401);
  }
}
