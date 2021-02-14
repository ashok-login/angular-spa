import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../_models/user';
import { EnrollmentService } from '../_services/enrollment.service';

@Component({
  selector: 'app-enrolled-users-list',
  templateUrl: './enrolled-users-list.component.html',
  styleUrls: ['./enrolled-users-list.component.css']
})
export class EnrolledUsersListComponent implements OnInit {
  users: User[];
  constructor(private enrollmentService: EnrollmentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data['users'];
    });
  }
}
