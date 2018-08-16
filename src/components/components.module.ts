import {NgModule} from '@angular/core';
import {ContentDrawerComponent} from './content-drawer/content-drawer';
import { TopicQuizComponent } from './topic-quiz/topic-quiz';
import { QuizResultComponent } from './quiz-result/quiz-result';
@NgModule({declarations: [ContentDrawerComponent,
    TopicQuizComponent,
    QuizResultComponent], imports: [], exports: [ContentDrawerComponent,
    TopicQuizComponent,
    QuizResultComponent]})
export class ComponentsModule {}