
/**
 * @description: inject some code into html
 * @example: injectScript({ src: 'console.log("injected")' })
 * @param {src} string code or code path
 * @param {fromUrl} boolean path is url
 * @param {remove} boolean remove the tag after executed
 * @return: void
 */
export const injectScript = (options: {
  src: string,
  fromUrl: boolean,
  remove: boolean
}) => {
  const s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;

  if (options.fromUrl) {
      s.src = options.src;
  } else {
      s.innerText = options.src;
  }
  
  const t = document.getElementsByTagName('body')[0];
  t.appendChild(s);

  // we just remove it as a macro task
  // this may cause some problems in your program, be cautious
  if (options.remove) {
      setTimeout(() => {
          t.removeChild(s);
      })
  }
}