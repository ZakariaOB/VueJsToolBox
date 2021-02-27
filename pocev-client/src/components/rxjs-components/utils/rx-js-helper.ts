import { Observable } from 'rxjs/internal/Observable';

export class RxJsHelper {
  static CreateHttpObservable(url: string) {
    const $http = Observable.create(
      (observer: {
        next: (arg0: Response) => any;
        console: { error: (arg0: any) => any };
      }) => {
        fetch(url)
          .then((res) => res.json())
          .then((response) => observer.next(response))
          // tslint:disable-next-line:no-console
          .catch((err) => console.log(err));
      }
    );

    return $http;
  }
}
