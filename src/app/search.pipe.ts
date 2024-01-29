import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  
  //1st argument should be the item which have to be transformed 
  //2nd argument : based on which the transformation need to be done
  transform(allEmployee:any[], searchKey: string): any[] {
    const result:any = []
    // includes returns boolean value.
    if(!allEmployee || searchKey===""){
      return allEmployee
    }
    allEmployee.forEach((item:any)=>{
      if(item.name.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }
    })

    return result;

  }

}
