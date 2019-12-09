import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private client_id = "328264f0c9458580c39d";
  private client_secret = "003a27588bba009743a4b4a73aa176fb01bd3ae9";
  constructor(private http:HttpClient) { console.log("Service is ready!");
  this.username = "Munene19";
}
getProfileInfo(){
  return this.http.get("https://api.github.com/users/" + this.username + "?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
}

getProfileRepos(){
  return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
}
updateProfile(username:string){
  this.username = username;
}
}
