import { makeAutoObservable } from 'mobx';

class AppStore {
  constructor() {
    makeAutoObservable(this);
  }
}

const appStore = new AppStore();
export default appStore;
