import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnboardingSliderPage } from './onboarding-slider';

@NgModule({
  declarations: [
    OnboardingSliderPage,
  ],
  imports: [
    IonicPageModule.forChild(OnboardingSliderPage),
  ],
})
export class OnboardingSliderPageModule {}
