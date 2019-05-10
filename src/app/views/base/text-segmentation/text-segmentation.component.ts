import {Component, OnInit} from '@angular/core';
import {FileDropDirective, FileItem, FileUploader, ParsedResponseHeaders} from 'ng2-file-upload';

@Component({
  selector: 'app-text-segmentation',
  templateUrl: './text-segmentation.component.html'
})
export class TextSegmentationComponent {

  public courseId = 26;

  private uploader: FileUploader = new FileUploader({
    url: `http://localhost:8889/text/segmentation/cut`,
    additionalParameter: {
      courseId: this.getCourseId(),
      format: 'text'
    },
  });

  isCollapsed = false;

  type = 'paragraph';
  paragraphs: any = [];
  fragments: any = [];

  public hasBaseDropZoneOver = true;
  public hasAnotherDropZoneOver = true;

  getCourseId() {
    return this.courseId;
  }

  constructor() {
    this.uploader.onSuccessItem = this.successItem.bind(this);

    this.uploader.onBeforeUploadItem = () => {
      this.uploader.options.additionalParameter.courseId = this.courseId;
    };
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  successItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    // 上传文件成功
    if (status === 200) {
      // 上传文件后获取服务器返回的数据
      // console.log(response);

      if (this.type === 'paragraph' || this.type === 'struct') {
        this.paragraphs = JSON.parse(response);
      } else {
        this.fragments = JSON.parse(response);
        for (let i = 0; i < this.fragments.length; i++) {
          const f = this.fragments[i];
          if (f.questionType && f.questionType === 'COMPLEX' && f.subQuestions && f.subQuestions.length > 0) {
            for (let j = 0; j < f.subQuestions.length; j++) {
              const subQuestion = f.subQuestions[j];
              f.html += '<br>' + subQuestion.html;
            }
          }
        }
      }
    } else {
      // 上传文件后获取服务器返回的数据错误
    }
  }

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  getParagraph(item: FileItem): void {
    this.type = 'paragraph';
    this.paragraphs = [];
    this.uploader.options.additionalParameter.type = 'paragraph';
    item.upload();
  }

  getFragment(item: FileItem): void {
    this.type = 'fragment';
    this.fragments = [];
    this.uploader.options.additionalParameter.type = 'fragment';
    item.upload();
  }

  getStruct(item: FileItem): void {
    this.type = 'struct';
    this.paragraphs = [];
    this.uploader.options.additionalParameter.type = 'struct';
    item.upload();
  }

  public courseIdChange() {
    console.log(this.courseId);
  }
}
