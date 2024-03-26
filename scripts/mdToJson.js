import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const mdToJson = (filePath) => {
  const mdContent = fs.readFileSync(filePath, 'utf8');
  const parsedContent = matter(mdContent);
  const description = parsedContent.content
    .split('\n')
    .filter(line => line.startsWith('-'))
    .map(item => item.slice(1).trim());

  return {
    ...parsedContent.data,
    description,
  };
};
const fetchFiles = (dirPath) => {
  let filesJson = [];
  fs.readdirSync(dirPath).forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      filesJson = filesJson.concat(fetchFiles(fullPath));
    } else if (path.extname(fullPath) === '.md') {
      filesJson.push(mdToJson(fullPath));
    }
  });
  return filesJson;
};

const dirPath = 'src/content';
const jsonResults = {};
fs.readdirSync(dirPath).forEach(file => {
  const fullPath = path.join(dirPath, file);
  if (fs.lstatSync(fullPath).isDirectory()) {
    jsonResults[file] = fetchFiles(fullPath);
  }
});

fs.writeFileSync(path.join('src', 'data.json'), JSON.stringify(jsonResults, null, 2));