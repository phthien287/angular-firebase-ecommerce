import { Component } from '@angular/core';
import {faMagnifyingGlass, faCartArrowDown, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchIcon = faMagnifyingGlass;
  cartIcon = faCartArrowDown;
  userIcon = faUser;
}
