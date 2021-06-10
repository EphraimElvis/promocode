var fetchPromoCodes = () => {

  const cachePromoCode = {}
  const promoElements = document.getElementsByClassName('promo');
  
  for (let i = 0; i < promoElements.length; i++) {
    if(!promoElements[i]&& !promoElements[i].children[0]) continue;

    const promotionCode = promoElements[i].children[0].textContent;
    if(cachePromoCode[promotionCode]){
        promoElements[i].children[0].textContent = cachePromoCode[promotionCode];
    }else{
        const getPromoCode = fetch(`https://your.uniqodo.com/code.php?promo-name=${promotionCode}` );
        getPromoCode.then((res)=> {
            return res.json();
        }).then((res)=>{
            promoElements[i].children[0].textContent = res.code;
            cachePromoCode[promotionCode] = res.code;
        }).catch(err=>{
            console.error(err)
        })
    }
  }
}
fetchPromoCodes();