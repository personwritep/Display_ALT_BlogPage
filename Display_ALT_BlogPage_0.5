// ==UserScript==
// @name        Display ALT BlogPage
// @namespace        http://tampermonkey.net/
// @version        0.5
// @description        ブログ記事の画像にマウスホバーでALTを表示
// @author        Ameba Blog User
// @match        https://ameblo.jp/*
// @exclude        https://ameblo.jp/*/image*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=ameblo.jp
// @updateURL        https://github.com/personwritep/Display_ALT_BlogPage/raw/main/Display_ALT_BlogPage.user.js
// @downloadURL        https://github.com/personwritep/Display_ALT_BlogPage/raw/main/Display_ALT_BlogPage.user.js
// @grant        none
// ==/UserScript==


let active; // ツール機能の有効・無効のフラグ

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
        active=is_my_bog(); }

    set_env();
    check_control(); }



function set_env(){
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

    let sw=
        '<button class="alt_sw"></button>'+
        '<style>'+
        '._2oLD75lf { position: relative; }'+
        '.alt_sw { position: absolute; top: 8px; left: 8px; width: 14px; height: 25px; '+
        'border: none; background: #cbe8ef; }'+
        '.alt_sw.active { background: red; }'+
        '.alt_sw.active_me { background: #56caff; }'+
        '</style>';

    let login_menu=document.querySelector('._3qMawLFY'); // ログインしないと無効
    if(login_menu){
        if(!document.querySelector('.alt_sw')){
            login_menu.insertAdjacentHTML('beforebegin', sw); }}

} // set_env()



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
        let body=document.body;
        let zoom_f=window.getComputedStyle(body).getPropertyValue('zoom');
        if(!zoom_f){
            zoom_f=1; } // 拡大ツールがない環境の場合

        alt_disp_span.textContent=alt_text;
        alt_disp.style.left=pos_x/zoom_f+'px';
        alt_disp.style.top=pos_y/zoom_f+'px';
        alt_disp.style.display='block';

        disp_out(pelement, alt_disp); }}



function disp_out(pelem, alt_disp){
    pelem.onmouseleave=()=>{
        alt_disp.style.display='none'; }
    pelem.onmouseover=()=>{
        if(active==1){
            alt_disp.style.display='block'; }}
    alt_disp.onmouseover=()=>{
        if(active==1){
            alt_disp.style.display='block'; }}
    alt_disp.onmouseleave=()=>{
        alt_disp.style.display='none'; }}



function is_my_bog(){
    let userID=location.pathname.split('/')[1];

    let Luser=document.querySelector('._w6MHwCAy');
    if(Luser){
        let LuserID=Luser.textContent;
        if(LuserID==userID){
            return 1; }
        else{
            return 0; }}
    else{
        return 0; }

} // is_my_bog()



function no_alt(){
    let imgall=document.querySelectorAll('#entryBody img');
    for(let k=0; k<imgall.length; k++){
        if(imgall[k].getAttribute('alt')=='' || imgall[k].getAttribute('alt')==null){
            let ogp=imgall[k].closest('.ogpCard_link');
            let pick=imgall[k].closest('.pickCreative');
            if(active==1){
                if(ogp || pick){ ; }
                else{
                    imgall[k].style.boxShadow='-2px 0 0 #fff, -15px 0 0 red'; }}
            else{
                imgall[k].style.boxShadow=''; }}}

} // no_alt()



function check_control(){
    let ssa=sessionStorage.getItem('DALT_BP');
    if(ssa){
        active=ssa; }

    let b_class='active';
    if(is_my_bog()==1){
        b_class='active_me'; }

    let alt_sw=document.querySelector('.alt_sw');
    if(alt_sw){
        if(active==1){
            alt_sw.classList.add(b_class);
            no_alt(); }
        else{
            alt_sw.classList.remove(b_class); }

        alt_sw.onclick=(event)=>{
            event.preventDefault();
            event.stopImmediatePropagation();
            if(active==0){
                active=1;
                alt_sw.classList.add(b_class); }
            else{
                active=0;
                alt_sw.classList.remove(b_class); }

            sessionStorage.setItem('DALT_BP', active);

            no_alt(); }}

} // check_control()
