import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
/* Memanggil Model Categorynya */
import Category from 'App/Models/Category'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Category.createMany([
      {title: 'Food'},
      {title: 'Travel'},
      {title: 'Entertainment'},
      {title: 'Gamer'},
      {title: 'Tecnology'},
    ])
  }
}
