import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsumirApiService {

  constructor(
    private https: HttpClient
  ) { }

  // quando temos uma chamada que não sabemos a hora da resposta, tipo await async no ios eu acho, usamos observers para operações assincronas
  getDados(url: string) {
    return this.https.get<any>(url).pipe(map(
      (result: any) => {
        return result
      }
    ))
  }
}
