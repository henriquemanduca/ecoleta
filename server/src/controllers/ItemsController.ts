import { Request, Response } from 'express';
import knex from '../database/conection';

class ItemsController {
  async index(req: Request, res: Response): Promise<any> {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image: `http://192.168.1.130:3333/uploads/${item.image}`,
      };
    });

    return res.json(serializedItems);
  }
}

export default ItemsController;
