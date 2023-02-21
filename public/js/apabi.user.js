// ==UserScript==
// @name         中华数字书苑下载
// @namespace    https://userscripts.zisu.dev/
// @version      0.0.1
// @description  中华数字书苑下载
// @author       thezzisu
// @match        http://cebxol.apabiedu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=apabiedu.com
// @grant        none
// @run-at       document-idle
// ==/UserScript==

;(function () {
  'use strict'

  console.log('中华数字书苑下载')
  const header = document.querySelector('div.header')
  const ul = header.querySelector('ul')
  const li = document.createElement('li')
  ul.appendChild(li)
  const a = document.createElement('a')
  a.addEventListener('click', () => {
    const total = parseInt(document.querySelector('#TotalCount').innerText.trim())
    const target = document.querySelector('#img1').src.trim()
    console.group('Downloading')
    console.log(total)
    console.log(target)
    const data = btoa(JSON.stringify({ target, total }))
    console.log(data)
    const command = 'pku library apabi download --info ' + data
    console.log(command)
    console.groupEnd()
    const input = document.createElement('input')
    input.value = command
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    alert('已复制到剪贴板')
  })
  a.innerText = 'Download'
  li.appendChild(a)
})()
