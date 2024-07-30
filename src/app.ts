import { Hono } from 'hono';
import { UserRepository } from './repository';

const app = new Hono();
const userRepository = new UserRepository();

app.get('/users', async (c) => {
  const users = await userRepository.getAllUsers();
  return c.json(users);
});

app.fire();