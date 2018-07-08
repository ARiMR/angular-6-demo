import { async, inject, TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [TodoService]
    });
  });

  it('should be created', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));

  it('should call api to find todos', async(
    inject([TodoService, HttpTestingController],
      (service: TodoService, backend: HttpTestingController) => {

        expect(service).toBeTruthy();
        expect(backend).toBeTruthy();

        backend.verify();

        service.findAll(true).subscribe(todos => {
          expect(todos.length).toBe(1);
        });

        backend.expectOne({
          url: '/api/v1/todos?showDone=1',
          method: 'GET'
        }).flush([{
          id: 1,
          title: 'test',
          createdAt: new Date(),
          done: true,
        }]);

        backend.verify();

      })));
});
