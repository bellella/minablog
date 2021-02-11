import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BaseAPIService {
    private headers: HttpHeaders = new HttpHeaders();
    protected constructor(
        protected http: HttpClient,
    ) {
        this.headers = this.headers.append('Content-Type', 'application/json; charset=UTF-8');
        this.headers = this.headers.append('Accept', 'application/json; charset=UTF-8');
    }
    private setHeaders(settingHeaders: object) {
        for (let key in settingHeaders) {
            this.headers = this.headers.append(key, settingHeaders[key]);
        }
      }

    protected GET<T>(url: string, context?: any, opts?: {}): Observable<T | any> {
        if (context) {
            return this.http.get<T>(this.inject(url, context), opts || {});
        } else {
            return this.http.get<T>(url, opts || {});
        }
    }

    protected POST<T>(url: string, body: object = {}, opts?: {}, isImage: boolean = false): Observable<T | any> {
        return this.http.post<T>(url, body, { headers: this.headers, ...opts });
    }

    protected PATCH<T>(url: string, body: object = {}, opts?: {}, isImage: boolean = false): Observable<T | any> {
        return this.http.patch<T>(url, body, { headers: this.headers, ...opts });
    }

    protected DELETE<T>(url: string, context?: any, opts?: {}): Observable<T | any> {
        if (context) {
            return this.http.delete<T>(this.inject(url, context), opts || {});
        } else {
            return this.http.delete<T>(url, opts || {});
        }
    }

    protected inject(restApi: string, context?: any): string {
        let properties = restApi.match(/(:\w+)/g);

        properties.forEach((property: string) => {
            let contextVar = property.substring(1);
            let contextValue = context[contextVar];

            if (contextValue !== undefined) {
                restApi = restApi.replace(property, contextValue);
            } else {
                throw new Error('inject: context.' + contextVar + ' expected but undefined');
            }
        });

        return restApi;
    }

}
