// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryEl = document.querySelector('.gallery');

function createdElementGallery(galleryItems) {
  return galleryItems.map(itm => {
    return `
   <li class='gallery__item'>
   <a class='gallery__link' href='${itm.original}'>
     <img
       class='gallery__image'
       src='${itm.preview}'
       alt='${itm.description}'
     />
   </a>
 </li>
  `;
  }).join('');
}

const element = createdElementGallery(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', element);

let gallery = new SimpleLightbox('.gallery a',
  {
    fadeSpeed: 300,
    animationSpeed: 250,
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });