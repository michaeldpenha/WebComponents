export class Index {
  constructor() {
    this.renderDiv();    
  }

  //methods
  private renderDiv = () => {
    document.getElementById('root').innerHTML = 'Welcome to Webcomponents';
  }
}
new Index();