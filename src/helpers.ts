export function escapeHTML(code: string) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(code.replace(/>/g, '>\n')));

  return div.innerHTML;
}

export function formatXml(xml:string) {
  let formatted = '';
  const reg = /(>)(<)(\/*)/g;
  xml = xml.replace(reg, '$1\r\n$2$3');
  let pad = 0;
  xml.split('\r\n').forEach((node, index) => {
      let indent = 0;
      if (node.match( /.+<\/\w[^>]*>$/ )) {
          indent = 0;
      } else if (node.match( /^<\/\w/ )) {
          if (pad !== 0) {
              pad -= 1;
          }
      } else if (node.match( /^<\w([^>]*[^\/])?>.*$/ )) {
          indent = 1;
      } else {
          indent = 0;
      }

      let padding = '';
      for (let i = 0; i < pad; i++) {
          padding += '  ';
      }

      formatted += padding + node;
      pad += indent;
  });

  return formatted;
}


export function forDisplay(str: string): string {
  return escapeHTML(formatXml(str));
}
