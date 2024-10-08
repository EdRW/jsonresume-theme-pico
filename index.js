import handlebars from 'handlebars';
import fs from 'node:fs';
import path from 'node:path';
import helpers from './theme/helpers/index.js';

/**
 * @param {unknown} resume
 * @returns string
 */
export function render(resume) {
  const css = fs.readFileSync(import.meta.dirname + '/style.css', 'utf-8');
  const template = fs.readFileSync(
    import.meta.dirname + '/resume.hbs',
    'utf-8'
  );
  const partialsDir = path.join(import.meta.dirname, 'theme', 'partials');
  const filenames = fs.readdirSync(partialsDir);

  // Register partials
  filenames.forEach((filename) => {
    const matches = /^([^.]+).hbs$/.exec(filename);
    if (!matches) {
      return;
    }
    const name = matches[1];
    const filepath = path.join(partialsDir, filename);
    const template = fs.readFileSync(filepath, 'utf8');

    handlebars.registerPartial(name, template);
  });

  Object.entries(helpers).forEach(([name, helper]) =>
    handlebars.registerHelper(name, helper)
  );

  return handlebars.compile(template)({
    css,
    resume,
  });
}
