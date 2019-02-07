/*var $ = require('jquery');

//var Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person{
  payTaxes(){
    console.log(this.name + " now owes $0 in taxes.");
  }
}


alert("Teste 1234");

var john = new Person("john Doe", "blue");
john.greet();


var lila = new Adult("Lila Lila Lali", "orange");
lila.greet();
lila.payTaxes();

$("h1").remove();
*/
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
