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
      console.log('TEST');
      console.log(it.body);
      console.log(searchText);
      return it.body.toLowerCase().includes(searchText);
    });
  }
}