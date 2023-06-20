import { Component } from '@angular/core';
import {faMapMarkerAlt, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer-related-infor',
  templateUrl: './footer-related-infor.component.html',
  styleUrls: ['./footer-related-infor.component.scss']
})
export class FooterRelatedInforComponent {
  mapIcon = faMapMarkerAlt;
  phoneIcon = faPhone;
  mailIcon = faEnvelope;
  facebookIcon = faFacebookF;
  instagramIcon = faInstagram;
  twitterIcon = faTwitter;
  linkedinIcon = faLinkedin;
}
