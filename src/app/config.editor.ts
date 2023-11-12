import { AngularEditorConfig } from '@kolkov/angular-editor';


export const editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Ingresa contenido...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons : [
        [

        //   'bold',
        //   'italic',
        //   'underline',
        //   'strikeThrough',
        //   'subscript',
        //   'superscript',
        //   'justifyLeft',
        //   'justifyCenter',
        //   'justifyRight',
        //   'justifyFull',
        //   'indent',
        //   'outdent',
        //   'insertUnorderedList',
        //   'insertOrderedList',
           'heading',
          'fontName'
        ],
        [
          'fontSize',
          'textColor',
          'backgroundColor',
          'customClasses',
          'link',
          'unlink',
          'insertImage',
          'insertVideo',
          'insertHorizontalRule',
          'removeFormat',
          'toggleEditorMode'
        ]
      ]

};

