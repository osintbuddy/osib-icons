import fs from 'fs'
import { getAllIcons } from './helpers.js'

const icons = getAllIcons()

fs.mkdirSync('dist', { recursive: true })

const buildSprite = () => {

  Object.entries(icons).forEach(([type, iconsInCategory]) => {
    let svgContent = ''
    iconsInCategory.forEach(icon => {
      // console.log(`Adding ${icon.name}...`)

      // Replaces opening svg tag with its attributes and the closing tag as well
      // Leaving just the svg content
      const svgFileContent = icon.content
        .replace(/<svg[^>]+>/g, '')
        .replace(/<\/svg>/g, '')
        .replace(/\n+/g, '')
        .replace(/>\s+</g, '><')
        .replace('<path stroke="none" d="M0 0h24v24H0z" fill="none"/>', '')
        .trim()

      const viewBox = icon.attributes.viewBox;
      const fill = icon.attributes.fill;
      const stroke = icon.attributes.stroke;
      const strokeWidth = icon.attributes["stroke-width"];
      const strokeLineCap = icon.attributes["stroke-linecap"];
      const strokeLineJoin = icon.attributes["stroke-linejoin"];

      const viewBoxAttr = viewBox ? `viewBox="${viewBox}"` : "";

      const fillAttr = fill ? `fill="${fill}"` : "";

      const strokeAttrs = `${stroke ? `stroke="${stroke}"` : ""} ${strokeWidth ? `stroke-width="${strokeWidth}"` : ""} ${strokeLineCap ? `stroke-linecap="${strokeLineCap}"` : ""} ${strokeLineJoin ? `stroke-linejoin="${strokeLineJoin}"` : ""}`;

      svgContent += `<symbol xmlns:xlink="http://www.w3.org/1999/xlink" id="osib-${icon.name}" ${viewBoxAttr} ${fillAttr} ${strokeAttrs}> ${svgFileContent} </symbol>`;
    });

    let svg = `<svg xmlns="http://www.w3.org/2000/svg" id="tabler-icons"><defs>${svgContent}</defs></svg>`

    // Save sprite
    fs.writeFileSync(`dist/osib-sprite.svg`, svg)
  })
}

buildSprite()
