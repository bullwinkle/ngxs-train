import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-root',
  templateUrl: './profile-root.component.html',
  styleUrls: ['./profile-root.component.scss']
})
export class ProfileRootComponent implements OnInit {

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.profileService.loadSkills();
  }
}
