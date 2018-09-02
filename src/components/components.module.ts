import {NgModule} from '@angular/core';
import {ContentDrawerComponent} from './content-drawer/content-drawer';
import { TopicQuizComponent } from './topic-quiz/topic-quiz';
import { QuizResultComponent } from './quiz-result-modal/quiz-result-modal';
import { MapInfoComponent } from './map-modal/map-modal';
import { TagsModalComponent } from './tags-modal/tags-modal';
import { EventModalComponent } from './event-modal/event-modal';
import { SpeciesModalComponent } from './species-modal/species-modal';
import { SpeciesvideoComponent } from './speciesvideo/speciesvideo';
import { GameInfoPageComponent } from './game-info-page/game-info-page';
@NgModule({declarations: [ContentDrawerComponent,
    TopicQuizComponent,
    QuizResultComponent,
    MapInfoComponent,
    TagsModalComponent,
    EventModalComponent,
    SpeciesModalComponent,
    SpeciesvideoComponent,
    GameInfoPageComponent], imports: [], exports: [ContentDrawerComponent,
    TopicQuizComponent,
    QuizResultComponent,
    MapInfoComponent,
    TagsModalComponent,
    EventModalComponent,
    SpeciesModalComponent,
    SpeciesvideoComponent,
    GameInfoPageComponent]})
export class ComponentsModule {}