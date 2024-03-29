import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'pokeperuse/config/environment';
import '@glint/environment-ember-loose';
import '@glint/environment-ember-template-imports';

export default class App extends Application {
    modulePrefix = config.modulePrefix;
    podModulePrefix = config.podModulePrefix;
    Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
