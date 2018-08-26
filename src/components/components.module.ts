import {NgModule} from '@angular/core';
import {ContentDrawerComponent} from './content-drawer/content-drawer';
import { TopicQuizComponent } from './topic-quiz/topic-quiz';
import { QuizResultComponent } from './quiz-result-modal/quiz-result-modal';
import { MapInfoComponent } from './map-modal/map-modal';
import { TagsModalComponent } from './tags-modal/tags-modal';
import { EventModalComponent } from './event-modal/event-modal';
import { VideoModalComponent } from './video-modal/video-modal';
@NgModule({declarations: [ContentDrawerComponent,
    TopicQuizComponent,
    QuizResultComponent,
    MapInfoComponent,
    TagsModalComponent,
    EventModalComponent,
    VideoModalComponent], imports: [], exports: [ContentDrawerComponent,
    TopicQuizComponent,
    QuizResultComponent,
    MapInfoComponent,
    TagsModalComponent,
    EventModalComponent,
    VideoModalComponent]})
export class ComponentsModule {}