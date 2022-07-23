import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {UserContentData} from "../model/user-content-data";
import {MockBackendApi} from "../mock/mock-backend-api";

@Injectable()
export class ScratchyCoreService {

  constructor() {
  }

  public getUserData(): Observable<UserContentData[]> {
    //TODO: Replace with actual backend API call
    return MockBackendApi.getMockUserData();
  }
}
