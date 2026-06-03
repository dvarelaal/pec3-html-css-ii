/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';


import '@fontsource-variable/montserrat/wght.css';
import '@fontsource/archivo-black';


import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger,SplitText);


/**
 * Write any other JavaScript below
 */


// hacer que ".js-display" salga con una animacion wavy con color al cargar la página
const split = SplitText.create(".js-display", { type: "chars" });

gsap.from(split.chars, {
  y: 40, color: "#4C63DD", opacity: 0,
  stagger: { each: 0.04, from: "start" },
  duration: 0.6, ease: "sine.out"
});