import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { UsersRepository } from '../modules/accounts/repositories/implementation/UsersRepository';

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
    throw new Error('Token missing');
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
      throw new Error('User does not exists!');
    }

    next();
  } catch {
    throw new Error('Invalid token!');
  }
}
