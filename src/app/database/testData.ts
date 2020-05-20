import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
    createDb() {
    let Users = [
        { id: 1, name: 'Bhanu', email: 'bhanu@gmail.com' },
        { id: 2, name: 'Raj',   email: 'raj@gmail.com' },
        { id: 3, name: 'Neha', email: 'neha@gmail.com' },
        { id: 4, name: 'Rohan', email: 'rohan@gmail.com' }
    ];

    let user = [
      { id: 1, name: 'Bhanu', gender:'male', email: 'bhanu@gmail.com' },
      { id: 2, name: 'Raj', gender:'male', email: 'raj@gmail.com' },
      { id: 3, name: 'Neha', gender:'female', email: 'neha@gmail.com' },
      { id: 4, name: 'Rohan', gender:'male', email: 'rohan@gmail.com' }
    ];
    return {Users};
  }
}