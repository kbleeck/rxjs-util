import { Observable } from "rxjs";
/**
 * Takes a list of boolean observables and returns an observables
 * that combines them using OR-logic.
 *
 * @param {...Observable<boolean>[]} observables List of observables.
 * @returns {Observable<boolean>} The created observable.
 */
export declare function or$(...observables: Observable<boolean>[]): Observable<boolean>;
