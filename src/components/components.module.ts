import {NgModule} from '@angular/core';
import {ContentDrawerComponent} from './content-drawer/content-drawer';
import { TopicQuizComponent } from './topic-quiz/topic-quiz';
import { QuizResultComponent } from './quiz-result/quiz-result';
import { MapInfoComponent } from './map-info/map-info';
@NgModule({declarations: [ContentDrawerComponent,
    TopicQuizComponent,
    QuizResultComponent,
    MapInfoComponent], imports: [], exports: [ContentDrawerComponent,
    TopicQuizComponent,
    QuizResultComponent,
    MapInfoComponent]})
export class ComponentsModule {}