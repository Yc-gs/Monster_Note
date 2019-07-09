import { Component, OnInit, AfterViewInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import 'tinymce';
import 'tinymce/plugins/table';
import 'tinymce/plugins/link';
import 'tinymce/themes/modern/theme';
declare var tinymce: any;
@Component({
  selector: 'app-tiny-editor',
  template: `<textarea id="{{elementId}}"></textarea>`,
  styleUrls: ['./tiny-editor.component.scss']
})
export class TinyEditorComponent implements AfterViewInit, OnDestroy {

  @Input() elementId: String;
  @Output() onEditorContentChange = new EventEmitter();
  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,       // id 属性绑定在父组件上
      language: 'zh_CN',
      plugins: [
        'advlist autolink lists link charmap print preview hr anchor pagebreak media',
        'searchreplace wordcount visualblocks visualchars code fullscreen ',
        'insertdatetime nonbreaking save table contextmenu directionality ',
        'paste textcolor colorpicker textpattern'
      ],
      toolbar1: ' fullscreen insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link ',
      toolbar2: 'print preview | forecolor backcolor media ',
      height: "calc(100vh - 64px - 30px - 140px)",
      image_advtab: true,
      menubar: true,
      setup: editor => {
        this.editor = editor;
        console.log(editor, 111, editor.getContent())
        editor.on('keyup change', () => {
          const content = editor.getContent();
          this.onEditorContentChange.emit(content);
        });
      }
    });
    setTimeout(() => {
      tinymce.activeEditor.setContent(`<p>123</p>`)
    }, 1000);
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);        // 组件移除时销毁编辑器
  }

}
