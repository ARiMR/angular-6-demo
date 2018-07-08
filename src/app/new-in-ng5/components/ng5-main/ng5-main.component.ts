import { Component, HostBinding, OnInit } from '@angular/core';
import { CardListItem } from '../../../shared/models/card-list-item';
import { routerAnimation } from '../../../core/animations';

@Component({
  selector: 'ng6-ng5-main',
  templateUrl: './ng5-main.component.html',
  styleUrls: ['./ng5-main.component.scss'],
  animations: [routerAnimation]
})
export class Ng5MainComponent implements OnInit {

  @HostBinding('@routerAnimation') routerAnimation;

  public items: CardListItem[] = [];

  constructor() {
  }

  ngOnInit() {
    this.items.push({
      title: 'TypeScript 2.4 support',
      url: null,
      description: 'Angular 5 now officially supports TypeScript version 2.4. ' +
      'Previous versions of Angular have supported TypeScript 2.3 without errors since release 4.3, including the Strict-Null-Check option.'
    });
    this.items.push({
      title: '@angular/service-worker',
      url: null,
      description: 'Angular has the ability to create configuration and code on its own. ' +
      'Essentially, this allows the creation of mobile web applications that have features of native mobile applications, ' +
      'like offline capability, push notifications and an application logo in the start menu of the particular platform. ' +
      'Internally, service workers are used to implement the offline capability of the application and the treatment of push notifications.'
    });
    this.items.push({
      title: 'Build',
      url: null,
      description: 'Even for progressive web applications, updates in the framework are not sufficient; ' +
      'the build tooling has to be extended.<br>' +
      '<br>' +
      'This is exactly what happens with Angular-CLI in other areas. ' +
      'The static analysis of the AOT mode (Ahead of Time Compilation) is already but partly done in the normal build. ' +
      'Thus, many errors are detected earlier at build time and not at runtime.<br>' +
      '<br>' +
      'Thanks to the work on tree shaking, the size of the created application was reduced. ' +
      'The AOT mode has also been accelerated in order to support incremental builds and significantly reduce built time.<br>' +
      '<br>' +
      'For faster builds, a build tool from Google called Bazel can be integrated. ' +
      'However, it’s still in a very early stage of development at the moment. ' +
      'In the future, the Google Closure Compiler can also be used more intensively to achieve more optimized build results.'
    });
    this.items.push({
      title: 'Forms',
      url: null,
      description: 'With the new updateOn option, ' +
      'Angular 5 allows you to specify more precisely when this validation should be performed. ' +
      'You can select change, which specifies the previous behavior, submit or blur.'
    });
    this.items.push({
      title: 'HttpClient',
      url: null,
      description: 'The HttpClient introduced with Angular 4.3 now supports a parameter object for headers and parameters'
    });
    this.items.push({
      title: 'i18N Pipes',
      url: null,
      description: 'The i18n pipes that encompass things like the date, number, currency, ' +
      'and percent have been affected by several changes and internal modifications. ' +
      'For example, the Intl-API previously used by Angular is no longer supported due to browser inconsistencies. ' +
      'Instead, localization is based on the export of data from the Unicode Common Locale Data Repository (CLDR).'
    });
    this.items.push({
      title: 'Router',
      url: null,
      description: 'The Angular Router has been extended with additional events. ' +
      'Now, for example, you can create progress displays that display when a route is changed. ' +
      'The corresponding events are ActivationStart and ActivationEnd or ChildActivationStart and ChildActivationEnd.'
    });
    this.items.push({
      title: 'Animations',
      url: null,
      description: 'The animations package of Angular 5 has been extended with several syntax ingredients. ' +
      'It is now possible to respond to numerical value changes by using ' +
      ':increment and :decrement in order to animate according transitions.'
    });
  }

}
