// ==UserScript==
// @name        Display ALT BlogPage
// @namespace        http://tampermonkey.net/
// @version        0.2
// @description        ブログ記事の画像にマウスホバーでALTを表示
// @author        Ameba Blog User
// @match        https://ameblo.jp/*
// @exclude        https://ameblo.jp/*/image*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=ameblo.jp
// @updateURL        https://github.com/personwritep/Display_ALT_BlogPage/raw/main/Display_ALT_BlogPage.user.js
// @downloadURL        https://github.com/personwritep/Display_ALT_BlogPage/raw/main/Display_ALT_BlogPage.user.js
// @grant        none
// ==/UserScript==


let active=1;

let target=document.querySelector('head');
let monitor=new MutationObserver(env_check);
monitor.observe(target, { childList: true });

env_check();

function env_check(){
    let path=location.pathname;
    if(path.includes('/entrylist') || path.includes('/archive') ||
       path.includes('/theme') || path.includes('/amemberentrylist')){ // 機能しない画面
        active=0; }
    else{
        active=1; }}



let adisp=
    '<div class="alt_disp"><span ></span>'+
    '<style>'+
    '.alt_disp { position: absolute; z-index: 1999; font: normal 14px/16px Meiryo; '+
    'padding: 3px 6px 1px; color: #000; border: 1px solid #aaa; background: #fff; '+
    'display: none; }'+
    '.articleText { overflow: visible; }'+ // 旧タイプスキンで赤マーク欠けを補償
    '</style></div>';

if(!document.querySelector('.alt_disp')){
    document.body.insertAdjacentHTML('beforeend', adisp); }



document.addEventListener('mouseover', function(event) {
    let pelement=event.target;
    if(pelement.tagName=='IMG' && active==1){
        disp(pelement); }});



function disp(pelement){
    let scroll_html=document.documentElement;
    let spos_y=scroll_html.scrollTop;
    let pos_x=pelement.getBoundingClientRect().left+4;
    let pos_y=pelement.getBoundingClientRect().top+spos_y+2;

    let alt_disp=document.querySelector('.alt_disp');
    let alt_disp_span=document.querySelector('.alt_disp span');
    let alt_text=pelement.getAttribute('alt');
    if(alt_text && alt_disp && alt_disp_span){
        alt_disp_span.textContent=alt_text;
        alt_disp.style.left=pos_x+'px';
        alt_disp.style.top=pos_y+'px';
        alt_disp.style.display='block';

        disp_out(pelement, alt_disp); }}



function disp_out(pelem, alt_disp){
    pelem.onmouseleave=()=>{
        alt_disp.style.display='none'; }
    pelem.onmouseover=()=>{
        alt_disp.style.display='block'; }
    alt_disp.onmouseover=()=>{
        alt_disp.style.display='block'; }
    alt_disp.onmouseleave=()=>{
        alt_disp.style.display='none'; }}



/* ======= 代替テキストの無いGif画像に赤マークを表示 ======== */
/* 🔴🔴 この機能が不要の場合は 以下のコードを全て削除してください      */


window.onscroll=()=>{
    gif_mark(); }


function gif_mark(){
    let imgall=document.querySelectorAll('#entryBody img');
    for(let k=0; k<imgall.length; k++){
        let src=imgall[k].getAttribute('src');
        if(src && src.includes('.gif')){
            if(imgall[k].getAttribute('alt')==''){
                let root=imgall[k].closest('.ogpCard_root');
                if(root){
                    root.style.boxShadow='-2px 0 0 #fff, -15px 0 0 red'; }
                else{
                    imgall[k].style.boxShadow='-2px 0 0 #fff, -15px 0 0 red'; }}}}}
