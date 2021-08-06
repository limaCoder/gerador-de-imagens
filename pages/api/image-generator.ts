import { NextApiRequest, NextApiResponse } from 'next'
import { getScreenshot } from '../../infra/getScreenshot';

const getHTML = ({ title }: any) => `
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <style>
      body {
        margin: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
        /* background-color: #666; */
        ${title === 'a pessoa que eu mais amo no mundo' ? 'background-image: url(https://wallpapercave.com/wp/95gUwal.jpg)' : 'background-color: #666;'}
        /* background-image: url(https://wallpapercave.com/wp/95gUwal.jpg) */
      }
      h1 {
        font-size: 7vw;
        color: #fff;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h1>
    ${title}
    </h1>
    ${title === 'a pessoa que eu mais amo no mundo' ? '<img style="margin-left: 1rem; border-radius: 3rem;" src="https://github.com/viclsr.png"/>' : '<div></div>'}
    <!-- <img style="margin-left: 1rem; border-radius: 3rem;" src="https://github.com/viclsr.png"/> -->
  </body>
</html>
`;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const isHTMLDebugMode = false;
  const html = getHTML({
    title: req.query.title || 'Adicione na URL: /?title=Titulo',
  })

  if (isHTMLDebugMode) {
    res.setHeader('Content-Type', 'text/html')
    return res.end(html)
  }


  const file = await getScreenshot(html, { width: 1920, height: 1080 });

  res.setHeader('Content-Type', 'image/png')
  res.end(file);
}