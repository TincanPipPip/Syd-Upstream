export default function toggleDataAttr(el, dataname, onState, offState) {
  el.setAttribute(`data-${dataname}`, el.getAttribute(`data-${dataname}`) === onState ? offState : onState);
}
