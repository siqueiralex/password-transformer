import { sha256 } from 'js-sha256';
import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCopy } from "@fortawesome/free-solid-svg-icons";

const minus = "abcdefghijklmnopwrstuvwxyz"
const maius = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const num = "0123456789"
const espec = "!@#$%^&*()"

export default function Home() {

  const eye = <FontAwesomeIcon icon={faEye} />;
  const copyIcon = <FontAwesomeIcon icon={faCopy} />;

  const [phrase, setPhrase] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [phraseShown, setPhraseShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const togglePhraseVisiblity = () => {
    setPhraseShown(phraseShown ? false : true);
  };

  useEffect( () => {

    setPassword(transform(phrase)) 

  });  


  return (
    <div className="container">

        <div className="generator">
            <div className="form">

              <label htmlFor="phrase">Weak Password</label>
              <div>

              <input 
              type = {phraseShown ? "text" : "password"}
              id="phrase" 
              placeholder="Your easy-to-remember password" 
              value = {phrase}
              onChange={ e => setPhrase(e.target.value) }/>

              <i onClick={togglePhraseVisiblity}>{eye}</i>
              </div>
              
              
                <label htmlFor="phrase">Strong Password</label>
                <div className="pass-wrapper">
                <input 
                type={passwordShown ? "text" : "password"}
                id="strongpassword" 
                placeholder="Your strong password will appear here" 
                value = {password}
                disabled
                />
                <span>
                <i onClick={togglePasswordVisiblity}>{eye}</i>
                <i onClick={() => {navigator.clipboard.writeText(password)}} >{copyIcon}</i>

                </span>
              </div>
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