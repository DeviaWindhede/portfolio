import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyImgDirective } from '../../lazy-img.directive';
import { BackToTopBtnComponent } from '../../utility/back-to-top-btn/back-to-top-btn.component';
import { NgxGistModule } from '@ekkolon/ngx-gist';

@Component({
  selector: 'app-ecs',
  standalone: true,
  imports: [ RouterModule, LazyImgDirective, BackToTopBtnComponent, NgxGistModule ],
  templateUrl: './ecs.component.html',
  styleUrl: './ecs.component.scss'
})
export class EcsComponent {
}
