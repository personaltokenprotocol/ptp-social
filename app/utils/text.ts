// print large of content
export function resume(content: string) {
  content = urllify(content);

  if (content?.length > 500) {
    return `${content.slice(0, 500)} ...`;
  }

  return content;
}

// detect url in text and convert to link
// TODO: need to return html tag
export function urllify(content: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return content.replace(urlRegex, function (url) {
    return ``;
  });
}
