import { Component, OnInit } from "@angular/core";
import { PwaService } from "./pwa.service";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(public Pwa: PwaService, private dataService: DataService) {}
  title = "pwa";
  jokes: any;
  installPwa(): void {
    //this.Pwa.promptEvent.prompt();
  }
  ngOnInit() {
    this.dataService.getChuckNorrisJokes().subscribe(jokes => {
      this.jokes = jokes;
    });
  }
}
