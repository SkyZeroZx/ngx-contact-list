import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
  ContentChild,
  Renderer2,
  TemplateRef,
  OnDestroy,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'ngx-contact-list',
  templateUrl: './ngx-contact-list.component.html',
  host: {
    '(document:wheel)': 'onMouseWheelContent($event)',
    '(document:keydown)': 'onKeyDownContent($event)',
  },
})
export class NgxContactListComponent implements OnInit, OnChanges, OnDestroy {
  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;

  @ViewChild('inputBody') public inputBodyEl: ElementRef<HTMLElement>;
  @ViewChild('inputSearch') public inputSearchEl: ElementRef<HTMLElement>;
  @ViewChild('searchList') public searchListEl: ElementRef<HTMLElement>;
  @ViewChild('letterList') public letterList: ElementRef<HTMLElement>;
  @ViewChild('indicator') public indicatorEl: ElementRef<HTMLElement>;
  @ViewChild('content') public contentEl: ElementRef<HTMLElement>;

  @Input() height = '300px';
  @Input() propAlphaOrder = '';
  @Input() propsSearch: any = [];
  @Input() data: any[] = [];
  @Input() placeholder = 'type name or contact';
  @Input() listClass: string = null;
  @Input() withTemplate = false;
  @Input() noSmoothScroll = false;

  @Output() onCancel = new EventEmitter<any>();
  @Output() onClick = new EventEmitter<any>();

  public form: FormGroup;

  public closed = false;

  public objFilter: any;
  public inputFocused: boolean = false;

  public heightContent: number = 0;

  public alphabet: string[] = [];
  public currentAlpha: string = '';
  public currentLetterElement: any = null;

  public hiddenTitle: boolean = false;
  public lettersListHeight: number = 0;

  public indicatorClicked = false;

  private goingToLetter: boolean = false;

  constructor(
    private filter: FilterPipe,
    private renderer: Renderer2,
    private formBuilder: FormBuilder
  ) {
    for (let i = 0; i < 26; i++) {
      this.alphabet.push(String.fromCharCode(97 + i).toUpperCase());
    }
    this.form = this.formBuilder.group({
      search: [null],
    });
    this.form.get('search').valueChanges.subscribe(this.setFilter.bind(this));
  }

  ngOnInit() {
    setTimeout(() => {
      this.renderer.listen(
        this.searchListEl.nativeElement,
        'scroll',
        this.onScrollList.bind(this)
      );

      this.renderer.listen(
        this.contentEl.nativeElement,
        'mouseup',
        this.onMouseUpContent.bind(this)
      );
      this.renderer.listen(
        this.contentEl.nativeElement,
        'mousemove',
        this.onMouseMoveContent.bind(this)
      );

      this.renderer.listen(
        this.indicatorEl.nativeElement,
        'mousedown',
        this.onMouseDownIndicator.bind(this)
      );

      this.renderer.listen(
        this.indicatorEl.nativeElement,
        'mouseup',
        this.onMouseUpIndicator.bind(this)
      );

      this.renderer.listen(
        this.indicatorEl.nativeElement,
        'touchmove',
        this.onTouchMoveEvent.bind(this)
      );

      this.renderer.listen(
        this.indicatorEl.nativeElement,
        'touchstart',
        this.onTouchStartEvent.bind(this)
      );

      this.renderer.listen(
        this.indicatorEl.nativeElement,
        'touchend',
        this.onTouchEndEvent.bind(this)
      );

      this.heightContent =
        this.contentEl.nativeElement.clientHeight + (this.onCancel ? 20 : 37);

      this.lettersListHeight =
        this.letterList.nativeElement.children[0].clientHeight;
    }, 100);
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('data' in changes) {
      this.data = this.orderBy();
      if (this.data && this.propAlphaOrder) {
        this.data.forEach((item) => {
          let letter = item[this.propAlphaOrder].substr(0, 1);
          item['$letter'] = letter.toUpperCase();
          item['$class'] = 'let-' + letter.toLowerCase();
        });

        setTimeout(() => this.defineCurrentLetterElement(), 100);
      }
    }
    if ('propsSearch' in changes && this.propsSearch) {
      if (typeof this.propsSearch === 'string') {
        this.propsSearch = [this.propsSearch];
      }

      this.objFilter = {};
      for (const prop of this.propsSearch) {
        this.objFilter[prop] = null;
      }
      this.setFilter();
    }
  }

  defineCurrentLetterElement() {
    if (!this.goingToLetter) {
      const ulPosition =
        this.searchListEl.nativeElement.getBoundingClientRect();
      const ulTop = ulPosition.top;

      const elementsLetters = [];
      let current = null;
      for (const liElement of this.searchListEl.nativeElement.children as any) {
        let letterClass = '';

        for (const className of liElement.classList) {
          if (className.startsWith('let-')) {
            letterClass = className;
            break;
          }
        }

        if (
          elementsLetters.filter((x) => x.classList.contains(letterClass))
            .length === 0
        ) {
          elementsLetters.push(liElement);
          const liPosition = liElement.getBoundingClientRect();
          const liTop = liPosition.top - 20;

          if (liTop < ulTop) {
            current = liElement;
          }
        }
      }

      if (current && current !== this.currentLetterElement) {
        current.children[0]['position'] =
          current.children[0].innerHTML.charCodeAt(0) - 65;
        this.currentLetterElement = current;
        this.currentAlpha = current.children[0].innerHTML;
      } else if (!current) {
        this.currentLetterElement = null;
        this.currentAlpha = '';
      }
    }
  }

  public goLetter(letter: string) {
    this.currentAlpha = letter;

    const lettersElList = this.searchListEl.nativeElement.children as any;
    const letterElement = [...lettersElList].find((el: HTMLElement) => {
      const letterClass = (
        (el.classList.value.split(' ').find((x) => x.startsWith('let-')) ??
          '') as string
      ).replace('let-', '');
      return letterClass.toUpperCase() === letter.toUpperCase();
    });
    if (letterElement) {
      letterElement.children[0]['position'] =
        letterElement.children[0].innerHTML.charCodeAt(0) - 65;
      this.currentLetterElement = letterElement;
      const scrollHeight =
        this.searchListEl.nativeElement.scrollHeight -
        this.searchListEl.nativeElement.clientHeight;
      const scrollTop = Math.min(scrollHeight, letterElement.offsetTop);

      this.searchListEl.nativeElement.scrollTo({
        left: 0,
        top: scrollTop,
        behavior: 'smooth',
      });

      const checkIfScrollToIsFinished = setInterval(() => {
        if (scrollTop === this.searchListEl.nativeElement.scrollTop) {
          clearInterval(checkIfScrollToIsFinished);
          this.goingToLetter = false;
        }
      }, 60);
    }
  }

  onMouseMoveContent(event) {
    if (this.indicatorClicked) {
      for (const letter of this.letterList.nativeElement.children as any) {
        if (letter.classList.contains('contains')) {
          const position = letter.getBoundingClientRect();
          const bounds = {
            top: position.y,
            bottom: position.y + letter.clientHeight,
          };

          if (event.clientY >= bounds.top && event.clientY <= bounds.bottom) {
            if (this.currentAlpha !== letter.children[0].innerHTML)
              this.goLetter(letter.children[0].innerHTML);
            break;
          }
        }
      }
    }
  }

  onMouseDownIndicator(event) {
    if (event.button === 0) this.indicatorClicked = true;
  }

  onMouseUpIndicator() {
    this.indicatorClicked = false;
  }

  onMouseUpContent() {
    this.indicatorClicked = false;
  }

  onScrollList(e) {
    if (!this.goingToLetter) {
      if (!this.indicatorClicked) {
        this.defineCurrentLetterElement();
      }
    }
  }

  onMouseWheelContent(event: any) {}

  onKeyDownContent(event: KeyboardEvent) {
    const e = event as any;
    const key = (e.key || e.keyIdentifier || e.keyCode) as any;
    if (key === 27 || key === 'Escape') this.close();
  }

  click(data = null) {
    this.onClick.emit(data);
  }

  close() {
    if (this.onCancel.observers.length > 0) this.onCancel.emit();
  }

  sendTouchEvent(x, y, element, eventType) {
    const touchObj = new Touch({
      identifier: Date.now(),
      target: element,
      clientX: x,
      clientY: y,
      radiusX: 2.5,
      radiusY: 2.5,
      rotationAngle: 10,
      force: 0.5,
    });

    const touchEvent = new TouchEvent(eventType, {
      cancelable: true,
      bubbles: true,
      touches: [touchObj],
      targetTouches: [],
      changedTouches: [touchObj],
      shiftKey: true,
    });

    element.dispatchEvent(touchEvent);
  }

  startsWithLetter(_letter: string) {
    const letter = _letter.toUpperCase();
    return (
      this.filter
        .transform(this.data, this.objFilter)
        .filter((x) => x[this.propAlphaOrder].toUpperCase().startsWith(letter))
        .length > 0
    );
  }

  setFilter() {
    if (this.objFilter) {
      Object.keys(this.objFilter).forEach((prop) => {
        this.objFilter[prop] = this.form.get('search').value;
      });
      this.objFilter = Object.assign({}, this.objFilter);
      setTimeout(() => this.defineCurrentLetterElement(), 100);
    }
  }

  public clearFilter() {
    this.form.get('search').setValue(null);
    this.setFilter();
  }

  private orderBy() {
    return this.data.sort((a: { [key: string]: string }, b: any) => {
      if (
        a[this.propAlphaOrder].toUpperCase() <
        b[this.propAlphaOrder].toUpperCase()
      )
        return -1;
      if (
        a[this.propAlphaOrder].toUpperCase() >
        b[this.propAlphaOrder].toUpperCase()
      )
        return 1;

      return 0;
    });
  }

  onTouchMoveEvent(event) {
    event.preventDefault();
    for (const letter of this.letterList.nativeElement.children as any) {
      if (letter.classList.contains('contains')) {
        const position = letter.getBoundingClientRect();
        const bounds = {
          top: position.y,
          bottom: position.y + letter.clientHeight,
        };

        if (
          event.changedTouches[0].clientY >= bounds.top &&
          event.changedTouches[0].clientY <= bounds.bottom
        ) {
          if (this.currentAlpha !== letter.children[0].innerHTML)
            this.goLetter(letter.children[0].innerHTML);
          break;
        }
      }
    }
  }

  onTouchStartEvent(event) {
    this.indicatorClicked = true;
  }

  onTouchEndEvent(event) {
    this.indicatorClicked = false;
  }

  ngOnDestroy(): void {}
}
