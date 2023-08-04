import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryItemTemplate = galleryItems
  .map(
    item => `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" width="480" />
   </a>
</li>`
  )
  .join('');

const galleryElem = document.querySelector('.gallery');
galleryElem?.insertAdjacentHTML('beforeend', galleryItemTemplate);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
