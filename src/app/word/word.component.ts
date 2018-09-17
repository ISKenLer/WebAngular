import { Component } from '@angular/core'
import { SelectorContext } from '@angular/compiler';

@Component ({
    templateUrl: './word.component.html', 
    selector: 'app-word',
    styleUrls: ['./word.component.css']
})

export class WordComponent {
    en = "Hello";
    vn = "Xin chào";
    imageUrl = "https://giaxe.2banh.vn/dataupload/products/images/1514862183-8df8c164204c7009307fc828700268e2.jpg";
    forgot = false;
    toggleForgot(){
        this.forgot = !this.forgot;
    }
}