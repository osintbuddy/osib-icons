import path, { resolve, basename } from 'node:path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { globSync } from 'glob';
import { JSDOM } from 'jsdom'

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

  const dom = new JSDOM(svg);
  const domSvg = dom.window.document.querySelector("svg");

  for (const attr of attributesList) {
    const attrValue = domSvg.getAttribute(attr);
    if (attrValue) {
      attributes[attr] = attrValue;
    }
  }

  return attributes;

}

export const getAllIcons = () => {
  let icons = {};

  types.forEach((type) => {
    const globPath = path.join(ICONS_SRC_DIR, `${type}/*.svg`);

    icons[type] = globSync(globPath).map((i) => {

      const { data, content } = parseMatter(i),
            name = basename(i, '.svg');

      if (name === "annotation-highlight") {
        console.log("Path: " + i);
        console.log("Name: " + name);
        console.log(content)
        console.log(data)
      }

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
