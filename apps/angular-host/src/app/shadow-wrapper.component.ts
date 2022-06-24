import {
  AfterContentInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { registry, Registry } from './registry';

@Component({
  selector: 'module-federation-web-components-shadow-wrapper',
  template: '<div #vc></div>',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowWrapperComponent implements AfterContentInit {
  @ViewChild('vc', { read: ElementRef, static: true })
  vc!: ElementRef;

  @Input()
  elementName!: string;

  @Input()
  importName!: keyof Registry;

  constructor(private route: ActivatedRoute) {}

  ngAfterContentInit(): void {
    const elementName = this.elementName ?? this.route.snapshot.data['elementName'];
    const importName: keyof Registry = this.importName ?? this.route.snapshot.data['importName'];

    const element = document.createElement(elementName);
    this.vc.nativeElement.appendChild(element);

    const importFn = registry[importName];
    importFn()
      .then()
      .catch((err: any) => console.error(`error loading ${elementName}:`, err));
  }
}
