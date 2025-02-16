const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public'); // Путь к папке public
const srcDir = path.join(__dirname, 'src'); // Путь к папке src
const manifestFile = path.join(srcDir, 'documents.json'); // Путь к файлу манифеста
const documentFolders = [
  'regulatory_documents',
  'statutory_documents',
  'social_services',
  'paid_services',
];

const documentsData = {};

function readDocuments(folderName) {
  return new Promise((resolve, reject) => {
    const folderPath = path.join(publicDir, folderName);

    fs.readdir(folderPath, (err, files) => {
      if (err) {
        console.error(`Ошибка чтения директории ${folderName}:`, err);
        reject(err);
        return;
      }

      // Больше не фильтруем файлы по расширению
      documentsData[folderName] = files;
      resolve();
    });
  });
}

async function generateManifest() {
  try {
    await Promise.all(documentFolders.map(folder => readDocuments(folder)));

    fs.writeFileSync(manifestFile, JSON.stringify(documentsData, null, 2)); // Записываем в JSON с форматированием
    console.log('Файл documents.json успешно создан в папке src.');
  } catch (error) {
    console.error('Ошибка при генерации манифеста:', error);
  }
}

generateManifest();