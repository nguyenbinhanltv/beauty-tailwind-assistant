import { Component } from '@angular/core';
import alanBtn from "@alan-ai/alan-sdk-web";

@Component({
  selector: 'bta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beauty-tailwind-assistant';

  alanBtnInstance;

  constructor() {
    this.alanBtnInstance = alanBtn({
      key: '6e2f30a591a971a8b161db583bbed7582e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: () => {
      },

      // onConnectionStatus: async (status) => {
      //   if (status === 'authorized') {
      //     await this.alanBtnInstance.activate();
      //     this.alanBtnInstance.playText('Hey, this is Alan');
      //     this.alanBtnInstance.deactivate();
      // }
      // }
    });
  }
}
