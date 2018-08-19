import {NgModule} from '@angular/core';
import {ContentDrawerComponent} from './content-drawer/content-drawer';
import { TopicQuizComponent } from './topic-quiz/topic-quiz';
import { QuizResultComponent } from './quiz-result-modal/quiz-result-modal';
import { MapInfoComponent } from './map-modal/map-modal';
@NgModule({declarations: [ContentDrawerComponent,
    TopicQuizComponent,
    QuizResultComponent,
    MapInfoComponent], imports: [], exports: [ContentDrawerComponent,
    TopicQuizComponent,
    QuizResultComponent,
    MapInfoComponent]})
export class ComponentsModule {}