import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonIdService {

  protected id: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor() { }

  public setId(newId: string) {
    this.id.next(newId);
  }

  public getId(): Observable<string> {
    return this.id;
  }

  //currentId = new Observable((observer) => {
  //  const { next, error } = observer;

  //  //return { unsubscribe() { } };
  //});

  //idSubscription = this.currentId.subscribe({
  //  next(id) {
  //    return id;
  //  },
  //  error(msg) {
  //    return msg;
  //  }
  //});

}
