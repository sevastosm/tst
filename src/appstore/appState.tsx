export interface Iappstate {
  catlist: [];
  actions?: any;
  pageNumer: number;
  selectedCat: [];
  favoriteList:[];
  dataLoaded:boolean
}

let appState: Iappstate = {
  catlist: [],
  pageNumer: 0,
  selectedCat: [],
  favoriteList:[],
  dataLoaded:false
};
export default appState;
