import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: 'file-upload',
  templateUrl: "file-upload.component.html",
  styleUrls: ["file-upload.component.scss"]
})
export class FileUploadComponent {

    fileName = '';

    constructor(private http: HttpClient) {}

    onFileSelected(event:any) {

        const file:File = event.target.files[0];

        if (file) {

            this.fileName = file.name;

            const formData = new FormData();

            formData.append("uploadFile", file);

            const upload$ = this.http.post(environment.apiUrl + "/api/upload", formData);

            upload$.subscribe();
        }
    }
}