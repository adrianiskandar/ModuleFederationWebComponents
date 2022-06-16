import {
  AfterContentInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { registry, Registry } from './registry';

@Component({
  template: '<div #vc></div>',
})
export class WrapperComponent implements AfterContentInit {
  @ViewChild('vc', { read: ElementRef, static: true })
  vc!: ElementRef;

  constructor(private route: ActivatedRoute) {}

  ngAfterContentInit(): void {
    const elementName = this.route.snapshot.data['elementName'];
    const importName: keyof Registry = this.route.snapshot.data['importName'];

    const element = document.createElement(elementName);
    this.vc.nativeElement.appendChild(element);

    const importFn = registry[importName];
    importFn()
      .then()
      .catch((err: any) => console.error(`error loading ${elementName}:`, err));
  }
}
