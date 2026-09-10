// Small HTML helpers shared by the templates.

export const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const flat = (v) => (Array.isArray(v) ? v.map(flat).join('') : v == null || v === false ? '' : String(v));

// Tagged template: joins arrays and drops null/false so conditionals read naturally.
// Values are NOT escaped — content is authored by us; use esc() for attributes.
export function html(strings, ...values) {
  let out = strings[0];
  for (let i = 0; i < values.length; i++) out += flat(values[i]) + strings[i + 1];
  return out;
}

export const attrs = (o = {}) =>
  Object.entries(o)
    .filter(([, v]) => v !== false && v != null)
    .map(([k, v]) => (v === true ? ` ${k}` : ` ${k}="${esc(v)}"`))
    .join('');

// Strip tags for meta descriptions etc.
export const plain = (s = '') => String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
