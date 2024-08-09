// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

function initLanguages() {
	if (document.querySelector('.language-selector')) {
		const wrapper = document.querySelector('.language-selector');
		const activeClass = '_lang-open';

		document.addEventListener('click', (e) => {
			if (!wrapper.classList.contains(activeClass) && e.target.closest('.language-selector__button')) {
				wrapper.classList.add(activeClass);
			} else if (wrapper.classList.contains(activeClass) && !e.target.closest('language-selector')) {
				wrapper.classList.remove(activeClass);
			}
		});
	}
}

document.addEventListener('DOMContentLoaded', () => {
	initLanguages();
});
