// print large of content
export function resume(content: string) {
  if (content?.length > 100) {
    return `${content.slice(0, 100)} ...`;
  }

  return content;
}
