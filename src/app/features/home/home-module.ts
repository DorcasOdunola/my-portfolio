import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { Home } from './home';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';

@NgModule({
  declarations: [Home, Hero, About, Skills],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
