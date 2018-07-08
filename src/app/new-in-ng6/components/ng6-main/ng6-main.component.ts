import { Component, HostBinding, OnInit } from '@angular/core';
import { CardListItem } from '../../../shared/models/card-list-item';
import { routerAnimation } from '../../../core/animations';

@Component({
  selector: 'ng6-ng6-main',
  templateUrl: './ng6-main.component.html',
  styleUrls: ['./ng6-main.component.scss'],
  animations: [routerAnimation]
})
export class Ng6MainComponent implements OnInit {

  @HostBinding('@routerAnimation') routerAnimation;

  public items: CardListItem[] = [];

  constructor() {
  }

  ngOnInit() {
    this.items.push({
      title: 'TypeScript 2.7 support',
      url: null,
      description: 'Angular 6 now officially supports TypeScript version 2.7. ' +
      'Previous versions of Angular have supported TypeScript 2.4'
    });
    this.items.push({
      title: 'Web Components with Angular Elements',
      url: null,
      description: 'With Angular Elements, ' +
      'Angular is now advancing into this lightweight area by providing Angular components as Web Components. ' +
      'Strictly speaking we must speak of custom elements, especially ' +
      'since Web Components is a collective term for various technologies. ' +
      'No matter how you look at it, in the end it revolves around framework-independent ' +
      'components which behave like standard HTML elements.'
    });
    this.items.push({
      title: 'Smaller bundles thanks to ngIvy (experimental)',
      url: null,
      description: 'Most of the resources involved in the implementation of Angular 6 have gone into a very innovative concept: ' +
      'The new view engine ngIvy. ' +
      'It compiles Angular templates to very DOM-like code and is optimized for Tree Shaking. ' +
      'This means that only those parts of Angular which are actually needed are bundled'
    });
    this.items.push({
      title: 'Treeshakable providers',
      url: null,
      description: 'Although the Angular team relied on tree shaking to reduce bundle sizes right from the start, ' +
      'services were not treeshakable until now. ' +
      'This means that all services of the application as well as those of libraries ' +
      'have always been bundled – regardless of whether they were used or not. '
    });
    this.items.push({
      title: 'Remove whitespaces',
      url: null,
      description: 'Another way to optimize bundle sizes is to remove whitespaces from the templates. ' +
      'These make up 7% to 13% in many applications.' +
      ' Angular has mastered this task for a long time, but up until now it had to be explicitly activated. ' +
      'From version 6 it will be activated by default. In the very unlikely case where you still need the whitespaces, ' +
      'the preserveWhitespaces switch in tsconfig.json or tsconfig.app.json can be used for CLI projects'
    });
    this.items.push({
      title: 'Architect: On the way to Bazel',
      url: null,
      description: 'The Angular CLI uses the popular webpack solution to tie bundles. ' +
      'In order to support alternative tools in the future, the CLI team has created a plug-in system called Project Architect. ' +
      'While the standard plugins, which are delivered with the CLI, delegate to webpack, ' +
      'it is now possible for everyone to also integrate tools. ' +
      'Which plugins are used for which tasks has to be entered in the control file angular.json, ' +
      'which replaces the previous .angular-cli.json. As a rule, however, this does not have to be a burden, ' +
      'as the CLI takes care of it when generating the project.'
    });
    this.items.push({
      title: 'Npm packages with the new CLI',
      url: null,
      description: 'You can use the npm packages of the JavaScript world to create reusable libraries. ' +
      'And they can be versioned and distributed through an internal or public registry.' +
      'Until now you had to use community projects to create such packages. ' +
      'But in the future CLI will take over this task on request. ' +
      'In order to do this you just simply add a library to an existing CLI project'
    });
    this.items.push({
      title: 'Lazy loading without router',
      url: null,
      description: 'Lazy Loading is an important feature, especially for large applications: ' +
      'Instead of loading everything at program start, only the most important modules are loaded into the browser ' +
      'at the beginning and the rest is loaded by the application if required. For using lazy loading, the router ' +
      'offers a very comfortable API that hides the less handy, low-level APIs, which are enabling lazy loading in the first place.' +
      '<br><br>' +
      'However, in cases where application developers want to use the low-level APIs for more control, ' +
      'the CLI has not provided support to date. But this changes now with version 6'
    });
    this.items.push({
      title: 'Submitting and updating libraries with Schematics',
      url: null,
      description: 'A very monotonous and therefore annoying task is the set-up of packages, ' +
      'which you load into a JavaScript application. For example, think of the library Angular Material: ' +
      'After obtaining it with npm install you have to import the correct Angular modules from this package, ' +
      'include a stylesheet file and also assemble the basic framework of the application from individual components.' +
      '<br><br>' +
      'To automate such tasks, CLI has been using the scaffolding tool Schematics for some time now. ' +
      'Each library can offer its own generators for standard tasks. These are triggered with the known command ng generate.'
    });
    this.items.push({
      title: 'Long Time Support Version',
      url: null,
      description: 'For those who are not always able to switch to the latest versions, there are Long-Time Support versions. ' +
      'The product team at ngconf 2018 also had a pleasing announcement in this regard: ' +
      'in the future there will be long-time support for each version – not just for every second version as previously planned. ' +
      'This period lasts twelve months and begins with the release of the next version. ' +
      'This means, for example, that every single version of Angular is supported ' +
      'for 18 months and receives security-related updates and bug fixes.'
    });
    this.items.push({
      title: 'Breaking Changes',
      url: null,
      description: '<ul>' +
      '<li>If you import any animations services or tools from @angular/core, you should import them from @angular/animations</li>' +
      '<li>Switch from HttpModule and the Http service to HttpClientModule and the HttpClient service. ' +
      'HttpClient simplifies the default ergonomics (You don\'t need to map to json anymore) ' +
      'and now supports typed return values and interceptors</li>' +
      '<li>Make sure you are using Node 8 or later</li>' +
      '<li>All CLI commands now use two dashes for flags (eg ng build --prod --source-map) to be POSIX compliant.</li>' +
      '<li>After the update, TypeScript and RxJS will more accurately flow types across your application, ' +
      'which may expose existing errors in your application\'s typings</li>' +
      '<li>ngModelChange is now emitted after the value/validity is updated ' +
      'on its control instead of before to better match expectations. ' +
      'If you rely on the order of these events, you will need to begin tracking the old value in your component.</li>' +
      '<li>RxJS dependency there have been a few cleanups, but these can be largely automated with the information ' +
      'linked there or taken into account with a shim.</li>' +
      '<li>If you have TypeScript configured to be strict (if you have set strict to true in your tsconfig.json file), ' +
      'update your tsconfig.json to disable strictPropertyInitialization or ' +
      'move property initialization from ngOnInit to your constructo</li>' +
      '<li>Once you and all of your dependencies have updated to RxJS 6, remove rxjs-compat</li>' +
      '</ul>'
    });
  }

}
