import {NgModule} from '@angular/core';
import {ContentDrawerComponent} from './content-drawer/content-drawer';
import { TopicQuizComponent } from './topic-quiz/topic-quiz';
import { QuizResultComponent } from './quiz-result-modal/quiz-result-modal';
import { MapInfoComponent } from './map-modal/map-modal';
import { TagsModalComponent } from './tags-modal/tags-modal';
import { EventModalComponent } from './event-modal/event-modal';
@NgModule({declarations: [ContentDrawerComponent,
    TopicQuizComponent,
    QuizResultComponent,
    MapInfoComponent,
    TagsModalComponent,
    EventModalComponent], imports: [], exports: [ContentDrawerComponent,
    TopicQuizComponent,
    QuizResultComponent,
    MapInfoComponent,
    TagsModalComponent,
    EventModalComponent]})
export class ComponentsModule {}