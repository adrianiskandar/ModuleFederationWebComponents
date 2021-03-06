import {
  AfterContentInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { registry, Registry } from './registry';

@Component({
  selector: 'module-federation-web-components-wrapper',
  template: '<div #vc></div>',
})
export class WrapperComponent implements AfterContentInit {
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
