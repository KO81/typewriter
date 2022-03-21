/*
author: Christian Feilert
date started: 22/2-2022
last modified: 12/3-2022
*/
var solve,solved,solve,towrite=[];
window._ = function (el) {
  return document.getElementById(el);
};
window.typeWriter = function (where, txt, speed, timeout) {
  var i = 0;
  if (where == null) {
    return null;
  };
  where.dataset.processed = true;
  if (txt == null) {
    if (typeof where.dataset.alttext !== 'undefined') {
      txt = where.dataset.alttext;
    } else {
      throw new ReferenceError('Undefined Attribute ("data-alttext") on an element ' + where.nodeName + ' with a class of typewriter.', 'common.js');
    };
  };
  if (speed == null) {
    speed = 50;
    if (where.dataset.textspeed) {
      speed = where.dataset.textspeed;
      if (!Number.isInteger(Math.abs(speed))) {
        throw new ReferenceError('Malformed Attribute ("data-textspeed") on an element ' + where.nodeName + ' with a class of typewriter.', 'common.js');
      };
    };
  };
  if (timeout == null) {
    timeout = 0;
    if (where.dataset.textspeedtimeout) {
      timeout = where.dataset.textspeedtimeout;
    };
    if (!Number.isInteger(Math.abs(timeout))) {
      throw new ReferenceError('Malformed Attribute ("data-textspeedtimeout") on an element ' + where.nodeName + ' with a class of typewriter.', 'common.js');
    };
  };
  if (typeof where.dataset.textcontrol === 'undefined') {
    where.dataset.textcontrol = txt;
  };
  if (where.dataset.texthuman) {
    speed = Math.abs(where.dataset.textspeed) + Math.floor(Math.random() * 750);
  };
  if (where.dataset.textclassremove) {
    if (where.classList.contains(where.dataset.textclassremove)) {
      where.classList.remove(where.dataset.textclassremove);
    } else {
      where.closest('.' + where.dataset.textclassremove).classList.remove(where.dataset.textclassremove);
    };
    where.removeAttribute('data-textclassremove');
  };
  if (i < txt.length) {
    where.innerHTML += txt.charAt(i);
    i++;
    setTimeout(() =>{
      setTimeout(() =>{
        if (where.dataset.textafter) {
          where.innerHTML = where.innerHTML.replace(where.dataset.textafter, '');
        };
        window.typeWriter(where)
      }, speed);
      where.dataset.alttext = txt.substring(1);
    }, timeout);
    where.dataset.textspeedtimeout = 0;
  };
  if (where.dataset.textafter) {
    where.innerHTML = where.innerHTML + where.dataset.textafter;
  };
  if (i == txt.length && where.dataset.textafter) {
    setTimeout(() =>{
      where.innerHTML = where.innerHTML.replace(where.dataset.textafter, '');
      setTimeout(() =>{
        where.innerHTML = where.dataset.textcontrol
      }, speed + 150);
    }, speed);
    if (towrite.length > 0) {
      new typeWriter(towrite.shift());
    };
  };
  if (where.dataset.texttodo) {
    solve = where.dataset.texttodo.split(':');
    if (solve.length == 2) {
      try {
        solved = _(solve[0]).parentNode.offsetHeight;
        if (solve[1] == 'width') {
          solved = _(solve[0]).parentNode.offsetWidth;
        };
        _(solve[0]).parentNode.setAttribute('style', '' + solve[1] + ':' + solved + 'px!important;');
      } catch (e) {
        e = 0;
      };
    }
  };
};
document.getElementsByClassName('typewriter').forEach(el=>{if(el.innerHTML==''){towrite.push(el);};});
typeWriter(towrite.shift());
