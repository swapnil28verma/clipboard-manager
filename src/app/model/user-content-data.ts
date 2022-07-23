export class UserContentData {
  id: string;
  title: string;
  tabColor: string;
  content: string;


  constructor(id: string = '', title: string = '', tabColor: string = '', content: string = '') {
    this.id = id;
    this.title = title;
    this.tabColor = tabColor;
    this.content = content;
  }
}
