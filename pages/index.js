import { sha256 } from 'js-sha256';
import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import {Eye, Copy} from '../components/svgs.js'

const minus = "abcdefghijklmnopwrstuvwxyz"
const maius = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const num = "0123456789"
const espec = "!@#$%^&*()"

export default function Home() {

  const [phrase, setPhrase] = useState('');
  const [password, setPassword] = useState('');
  const [phraseShown, setPhraseShown] = useState(false);
  const [copiedShown, setCopiedShown] = useState(false);

  const togglePhraseVisiblity = () => {
    setPhraseShown(phraseShown ? false : true);
  };

  const clickedToCopy = () => {
    setCopiedShown(true)
    navigator.clipboard.writeText(password)
  }

  const userTyping = e => {
    setPhrase(e.target.value)    
    setCopiedShown(false)
  }

  useEffect( () => {

    setPassword(transform(phrase)) 
    // setCopiedShown(false)
  });  


  return (
    <div className="container">
        <Head>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <title>Password Transformer</title>
          
        </Head>
        <div className="generator">
            <div className="form">

              <div className="pass-wrapper">

                <input 
                autoComplete="off"
                type = {phraseShown ? "text" : "password"}
                id="phrase" 
                placeholder="Enter your easy-to-remember password here" 
                value = {phrase}
                onChange={ e => userTyping(e) }/>
                <Eye onClick={togglePhraseVisiblity} />
                </div>
              <div className="pass-wrapper">
                <input 
                autoComplete="off"
                type = {phraseShown ? "text" : "password"}
                id="strongpassword" 
                placeholder="a stronger password will appear here" 
                value = {password}
                disabled
                />
                  <Copy onClick={clickedToCopy}/>

                
              </div>
              <div className={copiedShown? 'copied' : 'hide'} >copied to clipboard!</div>
            </div>             
        </div>
 
      </div>
  )
}



function shuffle(ar,seed){
  let numbers = [];
  for( let a = 0, max = ar.length; a < max; a++){
      numbers.push(a);
  }
  let shuffled = [];
  for( let i = 0, len = ar.length; i < len; i++ ){
      let r = (seed *1000)% (len - i) ;
      shuffled.push(ar[numbers[r]]);
      numbers.splice(r,1);
  }
  return shuffled.join("");
}

function transform(phrase){
  if(phrase){

      let passletters = ""
      let c = ""
      let hash = sha256.create();
      hash.update(phrase);
      const hashed_word = hash.hex();
      let i=0;
      
      let idx = parseInt("0x"+hashed_word.slice(i, i+2))%minus.length - 1
      if (idx<0){
        c = minus.charAt(minus.length + idx)
        passletters = passletters.concat(c)      
      }else{
        c = minus.charAt(idx)
        passletters = passletters.concat(minus.charAt(idx))
      }
      
      i+=2
      idx = parseInt("0x"+hashed_word.slice(i, i+2))%minus.length - 1
      if (idx<0){
        c = minus.charAt(minus.length + idx)
        passletters = passletters.concat(c)      
      }else{
        c = minus.charAt(idx)
        passletters = passletters.concat(minus.charAt(idx))
      }
    
      i+=2
      idx = parseInt("0x"+hashed_word.slice(i, i+2))%maius.length - 1
      if (idx<0){
        c = maius.charAt(maius.length + idx)
        passletters = passletters.concat(c)      
      }else{
        c = maius.charAt(idx)
        passletters = passletters.concat(maius.charAt(idx))
      }
      i+=2
      idx = parseInt("0x"+hashed_word.slice(i, i+2))%maius.length - 1
      if (idx<0){
        c = maius.charAt(maius.length + idx)
        passletters = passletters.concat(c)      
      }else{
        c = maius.charAt(idx)
        passletters = passletters.concat(maius.charAt(idx))
      }
    
      i+=2
      idx = parseInt("0x"+hashed_word.slice(i, i+2))%num.length - 1
      if (idx<0){
        c = num.charAt(num.length + idx)
        passletters = passletters.concat(c)      
      }else{
        c = num.charAt(idx)
        passletters = passletters.concat(num.charAt(idx))
      }
      i+=2
      idx = parseInt("0x"+hashed_word.slice(i, i+2))%num.length - 1
      if (idx<0){
        c = num.charAt(num.length + idx)
        passletters = passletters.concat(c)      
      }else{
        c = num.charAt(idx)
        passletters = passletters.concat(num.charAt(idx))
      }
    
      i+=2
      idx = parseInt("0x"+hashed_word.slice(i, i+2))%espec.length - 1
      if (idx<0){
        c = espec.charAt(espec.length + idx)
        passletters = passletters.concat(c)      
      }else{
        c = espec.charAt(idx)
        passletters = passletters.concat(espec.charAt(idx))
      }
      i+=2
      idx = parseInt("0x"+hashed_word.slice(i, i+2))%espec.length - 1
      if (idx<0){
        c = espec.charAt(espec.length + idx)
        passletters = passletters.concat(c)      
      }else{
        c = espec.charAt(idx)
        passletters = passletters.concat(espec.charAt(idx))
      }
    
    
      i+=2
      idx = parseInt("0x"+hashed_word.slice(i, i+2))%minus.length - 1
      if (idx<0){
        c = minus.charAt(minus.length + idx)
        passletters = passletters.concat(c)      
      }else{
        c = minus.charAt(idx)
        passletters = passletters.concat(minus.charAt(idx))
      }
      i+=2
      idx = parseInt("0x"+hashed_word.slice(i, i+2))%minus.length - 1
      if (idx<0){
        c = minus.charAt(minus.length + idx)
        passletters = passletters.concat(c)      
      }else{
        c = minus.charAt(idx)
        passletters = passletters.concat(minus.charAt(idx))
      }
      i+=2
      let seed = parseInt("0x"+hashed_word.slice(i, i+2))
      
      return shuffle(passletters,seed)
  }
  return ""
}