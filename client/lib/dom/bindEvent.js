function bindEvent(node, type, handler) {
  if (isString(node)) node = getNode(node);

  node.addEventListner(type, handler);

  return () => node.removeEventListener(type, handler);
}
