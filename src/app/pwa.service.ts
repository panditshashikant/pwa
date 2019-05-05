import { Injectable } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";

@Injectable({
  providedIn: "root"
})
export class PwaService {
  update: boolean = false;
  constructor(private swUpdate: SwUpdate) {
    // window.addEventListener("beforeinstallprompt", event => {
    //   this.promptEvent = event;
    // });
    swUpdate.available.subscribe(event => {
      this.update = true;
    });
    // swUpdate.available.subscribe(event => {
    //   swUpdate.activateUpdate().then(() => {
    //     document.location.reload();
    //   });
    // });
  }
}
