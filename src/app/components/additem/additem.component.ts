import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  id: number = 0;
  title: string = "";
  price: number = 0;
  quantity: number = 0;

  constructor(private router: Router, private itemService: ItemService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    const item = new Item();
    item.id = this.id;
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false;

    this.itemService.addItem(item).subscribe(i => {
      this.router.navigate(['/']);
    });
  }

}
