// print large of content
export function resume(content: string) {
  content = deleteLinks(content);

  if (content?.length > 500) {
    return `${content.slice(0, 500)} ...`;
  }

  return content;
}

// detect url in text and convert to link
// TODO: need to return html tag
export function deleteLinks(content: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return content?.replace(urlRegex, function (url) {
    return ``;
  });
}

// detect url in text and delete http:// or https://
export function urlify(content: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return content.replace(urlRegex, function (url) {
    return url.replace("https://", "").replace("http://", "");
  });
}

// add at beginning of string https://twitter.com/
export function convertToTwitterUrl(content: string) {
  return `https://twitter.com/${content}`;
}

// detect at beginning of string "PTP social tesnet -" and delete
export function deletePTP(content: string) {
  return content.replace("PTP social tesnet - ", "");
}
