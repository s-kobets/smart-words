import fetch from 'node-fetch';
import express from 'express';
import randomUseragent from 'random-useragent';

process.env.NODE_ENV = 'development';

const app = express();

const host = process.env.PROXY || 'localhost';
const port = process.env.PROXY ? '' : 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.route('/api/translation/*').get(async (req, res) => {
  if (req.originalUrl) {
    const data = await getTranslateText(req.originalUrl);
    return res.status(200).send(data);
  }
  return res.status(404).send('Path not found.');
});

app.route('/api/search').get(async (req, res) => {
  if (req.originalUrl) {
    const response = await fetch(
      req.originalUrl.replace('/api', 'https://www.google.com'),
      {
        method: 'GET',
        headers: {
          Accept: '*/*',
          Connection: 'keep-alive',
          'User-Agent': randomUseragent.getRandom(),
        },
      }
    );
    const data = await response.text();
    return res.status(200).send(data);
  }
  return res.status(404).send('Path not found.');
});

const constants = {
  CONTEXT_URL: 'https://context.reverso.net',
};

async function getTranslateText(url) {
  try {
    const data = await fetch(constants.CONTEXT_URL + url, {
      method: 'GET',
      headers: {
        Accept: '*/*',
        Connection: 'keep-alive',
        'User-Agent': randomUseragent.getRandom(),
      },
    });
    return await data.text();
  } catch (err) {
    console.error(err);
  }
}

app.listen(port, host, () =>
  console.log('Server listens' + port ? `${host}:${port}` : host)
);
