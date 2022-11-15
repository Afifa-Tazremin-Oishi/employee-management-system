import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getAlldept(){
    return this.http.get('http://localhost:8000/getallemployee');
  }
 addDepart(requestBody: any){
  return this.http.post('http://localhost:8000/add', requestBody);
 }
 updateDept(requestBody: any) {
  return this.http.patch('http://localhost:8000/updateemployee', requestBody);
}
deleteDept(requestBody: any){
  return this.http.delete('http://localhost:8000/deleteemployee', requestBody);
}

BookDelete (requestBody:number):Observable<number>{
  let httpheaders=new HttpHeaders()
  .set('Content-type','application/Json');
  let options={
    headers:httpheaders,
    body: requestBody
  };
  return this.http.delete<number>('http://localhost:8000/deleteemployee', options);
}

}
