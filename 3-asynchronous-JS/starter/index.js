const fs = require('fs');
const superagent = require('superagent');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('We failed te files bois');
      resolve('success');
    });
  });
};

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);

    await writeFilePro('dog-img.txt', res.body.message);
    console.log('Random dog image saved to file!');
  } catch {
    console.log(err);
    throw err;
  }

  return '2: READY';
};

console.log('Will get dog pics');
getDogPic()
  .then((x) => {
    console.log(x);
    console.log('get dem dog pics');
  })
  .catch((err) => {
    console.log('EXPLOSIONA');
  });

/*readFilePro(`${__dirname}/dog.txt`).then((data) => {
  console.log(`Breed: ${data}`);
  return superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => {
      console.log(res.body.message);
      return writeFilePro('dog-img.txt', res.body.message);
    })
    .then(() => {
      console.log('Random dog image saved to file');
    })
    .catch((err) => {
      console.log(err.message);
    });
});*/
