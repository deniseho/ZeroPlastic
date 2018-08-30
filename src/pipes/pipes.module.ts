import { NgModule } from '@angular/core';
import { BadgesPipe } from './badges/badges';
import { SafeDomPipe } from './safe-dom/safe-dom';
@NgModule({
	declarations: [BadgesPipe,
    BadgesPipe,
    SafeDomPipe],
	imports: [],
	exports: [BadgesPipe,
    BadgesPipe,
    SafeDomPipe]
})
export class PipesModule {}
