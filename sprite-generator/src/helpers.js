import path, { resolve, basename } from 'node:path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { globSync } from 'glob';

export const types = ['all'];

export const getCurrentDirPath = () => {
  return path.dirname(fileURLToPath(import.meta.url));
};

const HOME_DIR = resolve(getCurrentDirPath(), '../..');
const ICONS_SRC_DIR = resolve(HOME_DIR, 'icons');

export const parseMatter = (icon) => {
  const { data, content } = matter.read(icon, { delims: ['<!--', '-->'] });

  return { data, content };
};

// Extracts attributes from the svg tag
const getSvgAttributes = (svg) => {
  const attributesList = [
    "viewBox",
    "stroke",
    "stroke-width",
    "stroke-linecap",
    "stroke-linejoin",
    "fill",
  ];

  const attributes = {};

  for (const attr of attributesList) {
    const attrRegex = new RegExp(`${attr}=\"([^\"]*)\"`, "gm");
    const attrValue = attrRegex.exec(svg);
    if (attrValue) {
      attributes[attr] = attrValue[1]; // accessing the capturing group
    }
  }

  return attributes;

}

export const getAllIcons = () => {
  let icons = {};

  types.forEach((type) => {
    const globPath = path.join(ICONS_SRC_DIR, `${type}/*.svg`);

    icons[type] = globSync(globPath).map((i) => {
      const { _, content } = parseMatter(i),
            name = basename(i, '.svg');

      return {
        name,
        path: i,
        attributes: getSvgAttributes(content),
        content: content,
      };
    })
  });

  return icons;
};
