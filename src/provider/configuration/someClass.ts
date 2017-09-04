import {Observable} from 'rxjs/Observable';

export class SomeClass {
    doSomething(): Observable<string> {
        return Observable.of('foobar');
    }
}