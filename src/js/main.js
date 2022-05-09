import translationMock from '../../mock/translation';
import imageMock from '../../mock/image';

document.addEventListener('DOMContentLoaded', () => {
  const result = document.getElementById('result');
  // form
  const form = document.forms.search;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { value } = e.currentTarget.elements[0];
    console.log(value);

    const translationNode = await getTranslateText(value);
    const imageNode = await getImage(value);

    result.appendChild(translationNode);
    result.appendChild(imageNode);

    // e.currentTarget.reset();
  });
});

async function getImage(text) {
  try {
    const data = await fetch(`/api/search?q=${text}&tbm=isch`, {
      method: 'GET',
    });
    const html = await data.text();
    // mock
    // const html = imageMock;

    parser = new DOMParser();
    doc = parser.parseFromString(html, 'text/html');

    // TODO
    return doc.body.querySelectorAll('div')[5];
  } catch (error) {
    console.error(console.error);
  }
}

async function getTranslateText(text) {
  const from_language = 'english';
  const to_language = 'russian';
  text = from_language + '-' + to_language + '/' + encodeURIComponent(text);

  try {
    const data = await fetch(`/api/translation/${text}`, {
      method: 'GET',
    });
    const html = await data.text();
    // mock
    // const html = translationMock;

    parser = new DOMParser();
    doc = parser.parseFromString(html, 'text/html');

    return doc.querySelector('div[id="translations-content"]');
  } catch (error) {
    console.error(console.error);
  }
}
