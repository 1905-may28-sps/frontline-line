import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../model/post';
@Pipe({
  name: 'filter'
})
export class PostSearchPipe implements PipeTransform {
  transform(items: Post[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(it => {
      let test = it.body.toLowerCase().includes(searchText);
      console.log('TEST');
      console.log(it.body);
      console.log(searchText);
      return test;
    });
  }
}

//  this.posts = this.posts.filter(it => {
//       console.log('In filter post');
      
//       this.searchText = this.searchText.toLowerCase();
//       let test =  it.body.toLowerCase().includes(this.searchText);
      
//       console.log(it.body + test);
//       console.log(this.searchText);

//       return test ;
     