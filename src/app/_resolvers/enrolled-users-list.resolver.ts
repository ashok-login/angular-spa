import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { User } from "../_models/user";
import { EnrollmentService } from "../_services/enrollment.service";

@Injectable()
export class EnrolledUsersListResolver implements Resolve<User[]> {
    // Default generated code is commented for Associate's reference
    // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> | Promise<User> {
    //     throw new Error("Method not implemented.");
    // }

    constructor(private enrollmentService: EnrollmentService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot) : Observable<User[]> {
        return this.enrollmentService.getUsers().pipe(
            catchError(error => {
                window.alert('Problem in retrieving data');
                this.router.navigate(['/']);
                return of(null);
            })
        )
    }
}
