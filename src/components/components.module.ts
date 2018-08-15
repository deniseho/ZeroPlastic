import {NgModule} from '@angular/core';
import {ContentDrawerComponent} from './content-drawer/content-drawer';
import { TopicQuizComponent } from './topic-quiz/topic-quiz';
@NgModule({declarations: [ContentDrawerComponent,
    TopicQuizComponent], imports: [], exports: [ContentDrawerComponent,
    TopicQuizComponent]})
export class ComponentsModule {}